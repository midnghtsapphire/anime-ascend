import React, { createContext, useContext, useEffect, useState } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'premium' | 'free';
  subscriptionTier: 'free' | 'premium' | 'pro';
  tokensRemaining: number;
  createdAt: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage or session)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        if (token) {
          // Verify token and fetch user data
          const response = await fetch('/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem('auth-token');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Check for admin auto-auth (angelreporters@gmail.com)
  useEffect(() => {
    const adminEmail = 'angelreporters@gmail.com';
    if (!user && !isLoading) {
      // In production, this would be handled by backend
      // For now, we'll set it up when the user logs in with this email
    }
  }, [user, isLoading]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token, user: userData } = await response.json();
      localStorage.setItem('auth-token', token);
      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Redirect to Google OAuth flow
      const redirectUri = `${window.location.origin}/api/auth/google/callback`;
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      const scope = 'openid email profile';
      const responseType = 'code';

      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      authUrl.searchParams.set('client_id', clientId);
      authUrl.searchParams.set('redirect_uri', redirectUri);
      authUrl.searchParams.set('response_type', responseType);
      authUrl.searchParams.set('scope', scope);

      window.location.href = authUrl.toString();
    } catch (error) {
      console.error('Google login error:', error);
      setIsLoading(false);
      throw error;
    }
  };

  const loginWithApple = async () => {
    setIsLoading(true);
    try {
      // Redirect to Apple Sign-In flow
      const redirectUri = `${window.location.origin}/api/auth/apple/callback`;
      const clientId = import.meta.env.VITE_APPLE_CLIENT_ID;
      const teamId = import.meta.env.VITE_APPLE_TEAM_ID;

      const authUrl = new URL('https://appleid.apple.com/auth/authorize');
      authUrl.searchParams.set('client_id', clientId);
      authUrl.searchParams.set('redirect_uri', redirectUri);
      authUrl.searchParams.set('response_type', 'code id_token');
      authUrl.searchParams.set('response_mode', 'form_post');
      authUrl.searchParams.set('scope', 'openid email name');

      window.location.href = authUrl.toString();
    } catch (error) {
      console.error('Apple login error:', error);
      setIsLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth-token');
      setUser(null);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const { token, user: userData } = await response.json();
      localStorage.setItem('auth-token', token);
      setUser(userData);

      // Auto-signup to trial for freemium conversion
      if (userData.subscriptionTier === 'free') {
        // Trigger trial signup flow
        await fetch('/api/billing/trial-signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        loginWithApple,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

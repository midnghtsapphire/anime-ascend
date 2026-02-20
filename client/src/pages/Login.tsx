import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Chrome, Apple } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Anime Ascend Login Page
 * Design: Neon Shrine glassmorphism
 * 
 * Features:
 * - Email/password login
 * - Google OAuth
 * - Apple Sign-In
 * - Link to signup
 */

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, loginWithGoogle, loginWithApple, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      setLocation('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google login failed');
    }
  };

  const handleAppleLogin = async () => {
    setError('');
    try {
      await loginWithApple();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Apple login failed');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Card className="glass-panel w-full max-w-md relative z-10">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Anime Ascend</h1>
            <p className="text-foreground/70">Sign in to your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
            <div>
              <Label htmlFor="email" className="text-foreground/80">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 bg-background/50 border-primary/30 text-foreground placeholder:text-foreground/40"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-foreground/80">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 bg-background/50 border-primary/30 text-foreground placeholder:text-foreground/40"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-background font-semibold"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <Separator className="flex-1 bg-primary/20" />
            <span className="text-foreground/60 text-sm">Or continue with</span>
            <Separator className="flex-1 bg-primary/20" />
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              variant="outline"
              className="w-full border-primary/30 text-foreground hover:bg-primary/10 flex items-center gap-2"
            >
              <Chrome className="w-4 h-4" />
              Google
            </Button>
            <Button
              onClick={handleAppleLogin}
              disabled={isLoading}
              variant="outline"
              className="w-full border-primary/30 text-foreground hover:bg-primary/10 flex items-center gap-2"
            >
              <Apple className="w-4 h-4" />
              Apple
            </Button>
          </div>

          {/* Signup Link */}
          <div className="text-center text-foreground/70 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => setLocation('/signup')}
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Sign up
            </button>
          </div>

          {/* Admin Note */}
          <div className="mt-6 pt-6 border-t border-primary/20 text-center">
            <p className="text-xs text-foreground/50">
              Admin: angelreporters@gmail.com auto-authenticated
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

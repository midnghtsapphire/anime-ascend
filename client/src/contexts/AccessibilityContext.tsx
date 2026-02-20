import React, { createContext, useContext, useEffect, useState } from 'react';

export type AccessibilityMode = 'wcag-aaa' | 'eco-code' | 'neuro-code' | 'dyslexic' | 'no-blue-light';

interface AccessibilityContextType {
  activeModes: Set<AccessibilityMode>;
  toggleMode: (mode: AccessibilityMode) => void;
  isEnabled: (mode: AccessibilityMode) => boolean;
  reset: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [activeModes, setActiveModes] = useState<Set<AccessibilityMode>>(new Set());

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('a11y-modes');
    if (saved) {
      try {
        const modes = JSON.parse(saved) as AccessibilityMode[];
        setActiveModes(new Set(modes));
      } catch (e) {
        console.error('Failed to load accessibility modes:', e);
      }
    }
  }, []);

  // Apply accessibility modes to document
  useEffect(() => {
    const root = document.documentElement;

    // Remove all a11y classes first
    root.classList.remove('a11y-wcag-aaa', 'a11y-eco-code', 'a11y-neuro-code', 'a11y-dyslexic', 'a11y-no-blue-light');

    // Add active modes
    activeModes.forEach((mode) => {
      root.classList.add(`a11y-${mode}`);
    });

    // Save to localStorage
    localStorage.setItem('a11y-modes', JSON.stringify(Array.from(activeModes)));
  }, [activeModes]);

  const toggleMode = (mode: AccessibilityMode) => {
    setActiveModes((prev) => {
      const next = new Set(prev);
      if (next.has(mode)) {
        next.delete(mode);
      } else {
        next.add(mode);
      }
      return next;
    });
  };

  const isEnabled = (mode: AccessibilityMode) => activeModes.has(mode);

  const reset = () => {
    setActiveModes(new Set());
  };

  return (
    <AccessibilityContext.Provider value={{ activeModes, toggleMode, isEnabled, reset }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}

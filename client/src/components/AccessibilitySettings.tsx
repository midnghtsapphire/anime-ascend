import { useAccessibility, type AccessibilityMode } from '@/contexts/AccessibilityContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface AccessibilitySettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const modes: Array<{
  id: AccessibilityMode;
  label: string;
  description: string;
}> = [
  {
    id: 'wcag-aaa',
    label: 'WCAG AAA Compliance',
    description: 'Maximum contrast, keyboard navigation, screen reader support',
  },
  {
    id: 'eco-code',
    label: 'ECO CODE Mode',
    description: 'Low energy, reduced animations, minimal color changes',
  },
  {
    id: 'neuro-code',
    label: 'NEURO CODE (ADHD-Friendly)',
    description: 'Reduced clutter, focus mode, larger touch targets',
  },
  {
    id: 'dyslexic',
    label: 'DYSLEXIC MODE',
    description: 'OpenDyslexic font, increased spacing, high contrast',
  },
  {
    id: 'no-blue-light',
    label: 'NO BLUE LIGHT Mode',
    description: 'Warm color filter, removes blue wavelengths, night-safe',
  },
];

export function AccessibilitySettings({ isOpen, onClose }: AccessibilitySettingsProps) {
  const { isEnabled, toggleMode, reset } = useAccessibility();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-primary/20 bg-background/95">
          <h2 className="text-2xl font-bold">Accessibility Settings</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Introduction */}
          <div className="text-foreground/70">
            <p className="mb-4">
              Anime Ascend supports all 5 mandatory accessibility modes. Enable any combination that works best for you.
            </p>
            <p className="text-sm">
              Your preferences are saved automatically and will be remembered on your next visit.
            </p>
          </div>

          {/* Accessibility Modes */}
          <div className="space-y-4">
            {modes.map((mode) => (
              <div
                key={mode.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-colors"
              >
                <Switch
                  id={mode.id}
                  checked={isEnabled(mode.id)}
                  onCheckedChange={() => toggleMode(mode.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor={mode.id} className="text-base font-semibold cursor-pointer">
                    {mode.label}
                  </Label>
                  <p className="text-sm text-foreground/60 mt-1">{mode.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mode Details */}
          <div className="border-t border-primary/20 pt-6">
            <h3 className="font-semibold mb-4">Mode Details</h3>
            <div className="space-y-3 text-sm text-foreground/70">
              <div>
                <p className="font-semibold text-foreground mb-1">WCAG AAA Compliance</p>
                <p>Ensures color contrast ratios of at least 7:1, full keyboard navigation, and screen reader support.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">ECO CODE Mode</p>
                <p>Reduces energy consumption by disabling animations, minimizing color changes, and using solid dark backgrounds.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">NEURO CODE (ADHD-Friendly)</p>
                <p>Reduces visual clutter, simplifies navigation, and increases touch target sizes for better focus.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">DYSLEXIC MODE</p>
                <p>Uses OpenDyslexic font, increases letter and line spacing, removes italics, and maintains high contrast.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">NO BLUE LIGHT Mode</p>
                <p>Applies a warm color filter to remove blue wavelengths, making the app safe for night use.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t border-primary/20">
            <Button
              variant="outline"
              onClick={reset}
              className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
            >
              Reset All
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 bg-primary hover:bg-primary/90 text-background"
            >
              Done
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

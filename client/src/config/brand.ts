/**
 * Anime Ascend Brand Configuration
 * Neon Shrine Aesthetic: Cyberpunk Torii meets Coming-of-Age Storytelling
 * 
 * Design Philosophy:
 * - Warm neon glow on dark surfaces (crimson torii gates, golden lanterns)
 * - Glassmorphism panels with frosted edges
 * - Torii gate motifs as structural dividers
 * - Anime-inspired coming-of-age narratives and character growth
 */

export const brandConfig = {
  // Brand Identity
  name: 'Anime Ascend',
  tagline: 'Your Coming-of-Age Journey',
  domain: 'anime-ascend.app',
  description: 'Discover transformative anime stories. Track character growth, find your next favorite series, and connect with a community exploring life\'s milestones through anime.',

  // Neon Shrine Color Palette
  colors: {
    // Primary: Crimson-Coral (Torii gate red)
    primary: '#FF4D6A',
    primaryLight: '#FF6B8A',
    primaryDark: '#E63A57',
    
    // Accent: Warm Gold (Shrine lanterns)
    accent: '#FFB347',
    accentLight: '#FFC566',
    accentDark: '#E6A037',
    
    // Dark Backgrounds: Deep Charcoal
    background: '#1A1A2E',
    backgroundLight: '#2D2D44',
    
    // Teal-Jade (Success, highlights)
    success: '#2EC4B6',
    successLight: '#4DD9CC',
    
    // Neutral grays for text
    foreground: '#E8E8E8',
    foregroundMuted: '#A8A8A8',
    border: '#3A3A52',
    
    // Semantic colors
    error: '#FF6B6B',
    warning: '#FFD93D',
    info: '#6BCB77',
  },

  // Typography
  typography: {
    headingFont: 'Outfit',
    bodyFont: 'DM Sans',
    headingWeights: [400, 500, 600, 700, 800],
    bodyWeights: [400, 500, 600, 700],
  },

  // Glassmorphism Settings
  glass: {
    backdropBlur: 'blur(10px)',
    backgroundColor: 'rgba(26, 26, 46, 0.7)',
    borderColor: 'rgba(255, 77, 106, 0.2)',
    borderWidth: '1px',
  },

  // Coming-of-Age Themes
  themes: [
    'Growth & Transformation',
    'School & Friendship',
    'First Love & Romance',
    'Self-Discovery',
    'Overcoming Challenges',
    'Slice of Life',
    'Adventure & Exploration',
    'Finding Your Purpose',
  ],

  // Accessibility Modes
  a11y: {
    wcagAAA: 'WCAG AAA Compliance',
    ecoCode: 'ECO CODE (Low Energy)',
    neuroCode: 'NEURO CODE (ADHD-Friendly)',
    dyslexic: 'DYSLEXIC MODE',
    noBlueLight: 'NO BLUE LIGHT',
  },

  // Features
  features: [
    { id: 'discover', label: 'Discover', icon: 'compass' },
    { id: 'watchlist', label: 'Watchlist', icon: 'bookmark' },
    { id: 'journey', label: 'My Journey', icon: 'map' },
    { id: 'community', label: 'Community', icon: 'users' },
    { id: 'characters', label: 'Characters', icon: 'user' },
    { id: 'ai-chat', label: 'AI Chat', icon: 'message-circle' },
    { id: 'recommendations', label: 'Recommendations', icon: 'sparkles' },
  ],

  // SEO
  seo: {
    title: 'Anime Ascend | Coming-of-Age Anime Discovery & Community',
    description: 'Discover your coming-of-age anime journey. Anime Ascend connects you with transformative stories, character growth arcs, and a community of fans exploring life\'s milestones through anime.',
    keywords: [
      'coming-of-age anime',
      'anime discovery',
      'character growth',
      'anime community',
      'seasonal anime',
      'mood-based recommendations',
      'anime watchlist',
      'slice-of-life anime',
      'transformation',
      'personal growth',
    ],
  },
};

export type BrandConfig = typeof brandConfig;

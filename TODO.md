# Anime Ascend — Build Todo

## PHASE 1: Core App Setup & Theme (CURRENT)
- [ ] Update package.json with project name "anime-ascend"
- [ ] Configure Neon Shrine color palette in index.css (crimson #FF4D6A, gold #FFB347, charcoal #1A1A2E, teal #2EC4B6)
- [ ] Set up dark mode as default theme
- [ ] Create brand config (colors, typography, mascot)
- [ ] Update HTML metadata and SEO tags
- [ ] Set up glassmorphism component styles
- [ ] Create torii gate SVG divider components

## PHASE 2: Authentication & Admin (MANDATORY)
- [ ] Implement Google OAuth login
- [ ] Implement Apple Sign-In
- [ ] Implement email/password auth with JWT
- [ ] Create admin auto-auth for angelreporters@gmail.com (no password required)
- [ ] Build admin dashboard with full access
- [ ] Create user role system (admin, premium, free)
- [ ] Implement logout and session management

## PHASE 3: Landing & Home Pages
- [ ] Create landing page with hero banner (use generated image)
- [ ] Build home page with featured coming-of-age anime
- [ ] Create onboarding flow for new users
- [ ] Add call-to-action for sign-up/login

## PHASE 4: Core Features — Coming-of-Age Focus
- [ ] **Discover Page**: Browse coming-of-age anime by mood/theme
  - Mood-based filtering (growth, romance, school, slice-of-life, transformation)
  - Seasonal anime tracker
  - AI recommendations based on character growth arcs
- [ ] **Personal Journey Tracker**: Track watched anime as personal growth milestones
  - Mark anime as "watched", "watching", "planning"
  - Rate character growth and personal impact
  - Create personal "coming-of-age journey" timeline
- [ ] **Watchlist/Collection**: Save anime to personal watchlist
  - Organize by status (watching, completed, planning)
  - Add notes and ratings
  - Share watchlist with community
- [ ] **Community Forums**: Discuss coming-of-age themes
  - Create discussion threads about character growth
  - Share personal stories inspired by anime
  - Recommend anime for specific life stages
- [ ] **Character Growth Profiles**: Deep dive into character arcs
  - Track character development across series
  - Compare character journeys
  - Mood-based character matching

## PHASE 5: Stripe Billing & Token Economy (MANDATORY)
- [ ] Set up Stripe integration (test mode first)
- [ ] Create subscription tiers:
  - **Free**: 10 anime/month, basic features
  - **Premium**: Unlimited anime, advanced features, $9.99/month
  - **Pro**: Premium + AI recommendations, $19.99/month
- [ ] Implement token system for AI features
  - Free: 5 tokens/month
  - Premium: 50 tokens/month
  - Pro: 200 tokens/month
- [ ] Create payment page and checkout flow
- [ ] Implement dunning emails for failed payments
- [ ] Add payment failure retry logic
- [ ] Freemium conversion flow:
  - Give 5 free tokens on signup
  - Auto-signup to trial on first use
  - Auto-charge monthly if not cancelled

## PHASE 6: All 5 Accessibility Modes (MANDATORY)
- [ ] **WCAG AAA Compliance**
  - Keyboard navigation
  - Screen reader support
  - Color contrast ratios ≥7:1
  - Focus indicators
- [ ] **ECO CODE Mode** (Low energy, reduced animations, dark backgrounds)
  - Disable all animations
  - Reduce refresh rates
  - Minimize color changes
  - Solid dark backgrounds
- [ ] **NEURO CODE / ADHD Mode** (Reduced clutter, focus mode)
  - Hide non-essential UI elements
  - Simplified navigation
  - Larger touch targets
  - Clear visual hierarchy
- [ ] **DYSLEXIC MODE** (OpenDyslexic font, increased spacing, high contrast)
  - Switch to OpenDyslexic font
  - Increase letter/line spacing
  - High contrast text
  - Remove italics
- [ ] **NO BLUE LIGHT Mode** (Warm color filter, removes blue wavelengths)
  - Replace all blues with warm tones
  - Apply warm overlay filter
  - Adjust brightness
  - Night-safe color palette
- [ ] Create accessibility settings panel
- [ ] Add toggle buttons for all 5 modes
- [ ] Persist user accessibility preferences

## PHASE 7: AI Features (Blue Ocean)
- [ ] **AI Character Chat**: Talk to anime characters about growth
  - Use OpenRouter API
  - Character personality profiles
  - Context-aware responses
- [ ] **Mood-Based Recommendations**: AI suggests anime based on mood
  - Emotion detection from user input
  - Match to coming-of-age themes
  - Personalized suggestions
- [ ] **Character Growth Analysis**: AI analyzes character arcs
  - Identify key growth moments
  - Compare to user's personal journey
  - Suggest similar character arcs

## PHASE 8: Admin Panel (MANDATORY)
- [ ] Dashboard with user stats
- [ ] Revenue tracking
- [ ] Subscription management
- [ ] Token usage analytics
- [ ] User management (ban, promote, etc.)
- [ ] Content moderation tools
- [ ] Payment logs and refund interface

## PHASE 9: Customer Service (MANDATORY)
- [ ] Text-based support chat
- [ ] FAQ page
- [ ] Refund request form
- [ ] Subscription cancellation flow
- [ ] Contact form
- [ ] Email support integration

## PHASE 10: Analytics & Monitoring
- [ ] Set up analytics tracking
- [ ] Create dashboard for metrics
- [ ] Track user engagement
- [ ] Monitor payment success rates
- [ ] Track feature usage

## PHASE 11: Testing & QA
- [ ] Test all auth flows
- [ ] Test payment flows (test mode)
- [ ] Test accessibility modes
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Performance testing

## PHASE 12: Deployment & Launch
- [ ] Build production bundle
- [ ] Deploy to live URL
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Push to GitHub (MIDNGHTSAPPHIRE/anime-ascend)
- [ ] Add to meetaudreyevans.com hub
- [ ] Create app card with icon, description, launch button

## PHASE 13: Post-Launch
- [ ] Monitor for errors
- [ ] Gather user feedback
- [ ] Plan future features
- [ ] Iterate based on usage data

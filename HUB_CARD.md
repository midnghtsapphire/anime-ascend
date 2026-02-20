# Anime Ascend — Hub Card for meetaudreyevans.com

## App Information

**Name**: Anime Ascend

**Tagline**: Your Coming-of-Age Journey

**Status**: Live / Production

**Category**: Entertainment / Anime Discovery

**Description**: 

Anime Ascend is a premium coming-of-age anime discovery and community platform. Discover transformative anime stories, track character growth arcs, build your personal watchlist, and connect with a community of fans exploring life's milestones through anime. Features AI-powered recommendations, mood-based filtering, glassmorphism UI, and full accessibility support.

**Features**:
- Mood-based anime discovery (8 coming-of-age themes)
- Personal journey tracking and watchlist management
- Community forums and discussion
- AI character chat and recommendations
- Subscription tiers (Free, Premium $9.99, Pro $19.99)
- Token economy for AI features
- All 5 accessibility modes (WCAG AAA, ECO CODE, NEURO CODE, DYSLEXIC, NO BLUE LIGHT)
- Google OAuth, Apple Sign-In, email authentication
- Admin dashboard with analytics and moderation tools

## Design

**Aesthetic**: Neon Shrine — Cyberpunk Torii meets Coming-of-Age Storytelling

**Color Palette**:
- Primary: Crimson-Coral (#FF4D6A) — Torii gate red
- Accent: Warm Gold (#FFB347) — Shrine lanterns
- Background: Deep Charcoal (#1A1A2E)
- Success: Teal-Jade (#2EC4B6)

**UI Style**: Glassmorphism with frosted edges, torii gate dividers, warm neon glow effects

**Dark Mode**: Default dark theme with optional light mode

**Responsive**: Fully mobile-friendly and accessible

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS 4, shadcn/ui
- **Backend**: Express.js, TypeScript, JWT authentication
- **Payments**: Stripe (test and live modes)
- **AI**: OpenRouter API
- **Deployment**: Docker, Manus platform

## URLs

- **Live App**: [anime-ascend.manus.space](https://anime-ascend.manus.space)
- **GitHub Repository**: [MIDNGHTSAPPHIRE/anime-ascend](https://github.com/MIDNGHTSAPPHIRE/anime-ascend)
- **Admin Dashboard**: [anime-ascend.manus.space/admin](https://anime-ascend.manus.space/admin)
- **Support**: [anime-ascend.manus.space/support](https://anime-ascend.manus.space/support)

## Key Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with hero banner and feature overview |
| Discover | `/discover` | Browse anime by mood, season, and AI recommendations |
| Pricing | `/pricing` | Subscription tiers and feature comparison |
| Login | `/login` | Sign in with Google, Apple, or email |
| Signup | `/signup` | Create account with freemium conversion |
| Settings | `/settings` | Account, accessibility, notifications, billing |
| Support | `/support` | Chat, FAQ, contact form, refund requests |
| Admin | `/admin` | User analytics, revenue tracking, moderation |

## Authentication

- **Google OAuth**: Sign in with Google account
- **Apple Sign-In**: Sign in with Apple ID
- **Email/Password**: Traditional email authentication with JWT
- **Admin Auto-Auth**: angelreporters@gmail.com auto-authenticated with full admin access

## Billing

**Subscription Tiers**:
- **Free**: 10 anime/month, 5 tokens/month
- **Premium**: Unlimited anime, $9.99/month, 50 tokens/month
- **Pro**: Premium + AI features, $19.99/month, 200 tokens/month

**Features**:
- Stripe payment processing (test and live)
- Token economy for AI features
- Freemium conversion flow (auto-signup to trial)
- Payment failure handling with dunning emails
- Refund request system
- Subscription cancellation

## Accessibility

All 5 mandatory accessibility modes fully implemented:

1. **WCAG AAA Compliance** — 7:1 contrast ratio, keyboard navigation, screen reader support
2. **ECO CODE Mode** — Reduced animations, low energy, dark backgrounds
3. **NEURO CODE (ADHD-Friendly)** — Reduced clutter, focus mode, larger touch targets
4. **DYSLEXIC MODE** — OpenDyslexic font, increased spacing, high contrast
5. **NO BLUE LIGHT Mode** — Warm color filter, night-safe palette

## Admin Features

- User management and analytics
- Revenue tracking and subscription management
- Token usage analytics
- Payment logs and refund interface
- Content moderation tools
- Failed payment handling

## Customer Service

- Text-based support chat
- FAQ section
- Contact form
- Refund request form
- Subscription management
- Email support integration

## Blue Ocean Features

- **AI Character Chat**: Talk to anime characters about growth and transformation
- **Mood-Based Recommendations**: AI suggests anime based on emotional state
- **Character Growth Analysis**: Deep dive into character arcs and development
- **Personal Journey Tracking**: Connect character arcs to your own transformation

## Installation & Development

```bash
# Clone the repository
git clone https://github.com/MIDNGHTSAPPHIRE/anime-ascend.git
cd anime-ascend

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Setup

Copy `.env.example` to `.env` and configure:
- Google OAuth credentials
- Apple Sign-In credentials
- Stripe API keys
- OpenRouter API key
- Email service credentials
- Admin email

## Deployment

The app is deployed on the Manus platform with:
- Automatic builds and deployments
- SSL certificate management
- Custom domain support
- Analytics and monitoring
- Automatic scaling

## Support & Feedback

- **Support Page**: [anime-ascend.manus.space/support](https://anime-ascend.manus.space/support)
- **GitHub Issues**: [MIDNGHTSAPPHIRE/anime-ascend/issues](https://github.com/MIDNGHTSAPPHIRE/anime-ascend/issues)
- **Email**: support@anime-ascend.app

## Credits

**Built by**: Revvel

**Design**: Neon Shrine Aesthetic — Cyberpunk Torii meets Coming-of-Age Storytelling

**Platform**: Manus

---

**Anime Ascend** — Premium Coming-of-Age Anime Discovery Platform | Glassmorphism UI | Full Accessibility | AI-Powered | Stripe Billing

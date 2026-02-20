# Anime Ascend

**Premium Coming-of-Age Anime Discovery & Community Platform**

Anime Ascend is a glassmorphism-based platform dedicated to discovering, tracking, and sharing coming-of-age anime stories. With AI-powered recommendations, mood-based filtering, and a thriving community, Anime Ascend helps fans explore transformative narratives and track their personal growth through character arcs.

## 🎨 Design Philosophy

**Neon Shrine Aesthetic** — Cyberpunk Torii meets Coming-of-Age Storytelling

- **Color Palette**: Crimson-Coral (#FF4D6A) primary, Warm Gold (#FFB347) accent, Deep Charcoal (#1A1A2E) backgrounds
- **UI Style**: Glassmorphism panels with frosted edges, torii gate dividers, warm neon glow effects
- **Dark Mode**: Default dark theme with optional light mode
- **Responsive**: Fully mobile-friendly and accessible

## ✨ Core Features

### Discovery & Exploration
- **Mood-Based Filtering**: Browse anime by emotional themes (growth, romance, school, slice-of-life, transformation)
- **Seasonal Tracker**: Stay updated with current and upcoming anime seasons
- **AI Recommendations**: Personalized suggestions based on character growth arcs and user preferences
- **Advanced Search**: Filter by genre, theme, year, and coming-of-age elements

### Personal Journey Tracking
- **Watchlist Management**: Save anime to personal watchlist with status tracking (watching, completed, planning)
- **Growth Timeline**: Track watched anime as personal milestones
- **Character Arc Matching**: See how character journeys connect to your own transformation
- **Personal Ratings**: Rate anime and character growth impact

### Community & Connection
- **Discussion Forums**: Share coming-of-age themes and personal stories
- **Community Recommendations**: Get suggestions from other fans
- **Watchlist Sharing**: Share your journey with friends
- **User Profiles**: Showcase your anime taste and personal growth journey

### AI Features (Blue Ocean)
- **AI Character Chat**: Talk to anime characters about growth and transformation
- **Mood-Based Recommendations**: AI suggests anime based on current emotional state
- **Character Growth Analysis**: Deep dive into character arcs and development
- **Personalized Insights**: Get recommendations tailored to your life stage

## 🔐 Authentication & Admin

### Authentication Methods
- **Google OAuth**: Sign in with Google account
- **Apple Sign-In**: Sign in with Apple ID
- **Email/Password**: Traditional email authentication with JWT
- **Admin Auto-Auth**: angelreporters@gmail.com auto-authenticated with full admin access

### Admin Dashboard
- User management and analytics
- Revenue tracking and subscription management
- Token usage analytics
- Content moderation tools
- Payment logs and refund interface

## 💳 Billing & Monetization

### Subscription Tiers
- **Free**: 10 anime/month, basic features, 5 tokens/month
- **Premium**: Unlimited anime, advanced features, $9.99/month, 50 tokens/month
- **Pro**: Premium + AI recommendations, $19.99/month, 200 tokens/month

### Token Economy
- Tokens power AI features (recommendations, character chat, analysis)
- Free users get 5 tokens/month to try features
- Auto-signup to trial on first use
- Auto-charge monthly if not cancelled
- Dunning emails for failed payments with retry logic

### Payment Processing
- Stripe integration (test and live modes)
- Secure checkout flow
- Payment failure handling with grace periods
- Refund request system
- Subscription cancellation flow

## ♿ Accessibility (All 5 Mandatory Modes)

### 1. WCAG AAA Compliance
- Minimum color contrast ratio of 7:1
- Full keyboard navigation
- Screen reader support
- Visible focus indicators
- Semantic HTML

### 2. ECO CODE Mode
- Reduced animations (disabled)
- Minimal color changes
- Solid dark backgrounds
- Low energy consumption
- Optimized for battery life

### 3. NEURO CODE (ADHD-Friendly)
- Reduced visual clutter
- Simplified navigation
- Larger touch targets (48px minimum)
- Clear visual hierarchy
- Focus mode support

### 4. DYSLEXIC MODE
- OpenDyslexic font family
- Increased letter spacing (0.15em)
- Increased line height (1.8)
- Removed italics (replaced with underline)
- High contrast (black text on light background)

### 5. NO BLUE LIGHT Mode
- Warm color filter applied
- Blue wavelengths removed
- Night-safe color palette
- Reduced eye strain
- Sepia-tinted images

**All modes are toggleable in Settings → Accessibility and persist across sessions.**

## 🛠 Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS 4** for styling
- **shadcn/ui** for accessible components
- **Framer Motion** for animations
- **Wouter** for routing
- **React Hook Form** for form management
- **Zod** for schema validation

### Backend
- **Express.js** for API server
- **TypeScript** for type safety
- **JWT** for authentication
- **Stripe API** for payments
- **OpenRouter API** for AI features

### Deployment
- **Vite** static build
- **Docker** support included
- **Environment-based configuration**

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- pnpm 10.4+

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Environment Variables

Create a `.env` file with:

```env
# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Google OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Apple Sign-In
APPLE_TEAM_ID=your-team-id
APPLE_KEY_ID=your-key-id
APPLE_PRIVATE_KEY=your-private-key

# OpenRouter (AI Features)
OPENROUTER_API_KEY=your-api-key

# JWT
JWT_SECRET=your-secret-key

# App
APP_URL=http://localhost:8080
```

## 🚀 Deployment

### Live URL
The app is deployed and accessible at: **[Live URL to be added after deployment]**

### Deployment Steps
1. Build production bundle: `pnpm build`
2. Deploy to hosting provider (Vercel, Netlify, DigitalOcean, etc.)
3. Configure environment variables in hosting dashboard
4. Set up custom domain and SSL certificate
5. Configure Stripe webhooks for production

### GitHub Repository
Repository: [MIDNGHTSAPPHIRE/anime-ascend](https://github.com/MIDNGHTSAPPHIRE/anime-ascend)

### Added to Hub
Anime Ascend is featured on the [meetaudreyevans.com](https://meetaudreyevans.com) hub with:
- App card with icon and description
- Status indicator (live/beta/development)
- Launch button linking to live app

## 📊 Analytics & Monitoring

- **User Engagement Tracking**: Monitor feature usage and user behavior
- **Revenue Dashboard**: Real-time subscription and payment metrics
- **Error Monitoring**: Track and alert on application errors
- **Performance Metrics**: Monitor page load times and API response times

## 🤝 Customer Service

- **Text-Based Support Chat**: In-app support for users
- **FAQ Page**: Common questions and answers
- **Refund Request Form**: Easy refund process
- **Subscription Management**: Cancel or modify subscription anytime
- **Email Support**: Direct support email integration

## 🔄 Future Roadmap

- Mobile app (iOS/Android)
- Advanced recommendation engine
- Anime character collaboration features
- Streaming integration (MyAnimeList, AniList)
- Podcast/blog for coming-of-age anime discussions
- Merchandise integration
- Anime event calendar

## 📄 License

Proprietary — All rights reserved

## 👥 Support

For support, contact: support@anime-ascend.app

---

**Built with ❤️ by Revvel**

Coming-of-Age Anime Discovery Platform | Glassmorphism UI | Full Accessibility | AI-Powered

# Anime Ascend Deployment Guide

## Live Deployment

The app is ready to deploy on the Manus platform.

### 1. Create a Checkpoint

Before deploying, save the current state through the Manus UI.

### 2. Deploy to Live

1. Open the Management UI
2. Click the **Publish** button (top-right)
3. Select your deployment region
4. Configure custom domain (optional)
5. Click **Deploy**

The app will be live at: `anime-ascend.manus.space`

### 3. Configure Environment Variables

In Management UI → Settings → Secrets, add all variables from `.env.example`

### 4. Set Up Services

**Stripe**:
- Create test products (Premium $9.99, Pro $19.99)
- Copy API keys to environment

**Google OAuth**:
- Add redirect URI: `https://anime-ascend.manus.space/api/auth/google/callback`

**Apple Sign-In**:
- Add redirect URI: `https://anime-ascend.manus.space/api/auth/apple/callback`

**SendGrid**:
- Create API key for email service

### 5. Verify Deployment

- Home: https://anime-ascend.manus.space
- Admin: https://anime-ascend.manus.space/admin

### 6. Add Custom Domain (Optional)

Go to Management UI → Settings → Domains to configure custom domain.

## Rollback

If needed, go to Management UI → Dashboard and rollback to a previous checkpoint.

## Monitoring

Check logs in Management UI → Dashboard for errors and performance metrics.

---

**Anime Ascend** — Premium Coming-of-Age Anime Discovery Platform

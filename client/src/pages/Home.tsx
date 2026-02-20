import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Bookmark, Map, Users, Sparkles, MessageCircle } from "lucide-react";

/**
 * Anime Ascend Home Page
 * Design: Neon Shrine — Cyberpunk Torii meets Coming-of-Age Storytelling
 * 
 * Features:
 * - Hero banner with glassmorphism overlay
 * - Featured coming-of-age anime showcase
 * - Core feature cards
 * - Call-to-action for sign-up
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-panel-sm backdrop-blur-xl border-b border-primary/20">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">Anime Ascend</div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-background">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/zCFpZVyTjUJKvOJRbAd4FT/sandbox/xJ7gJNRtEYVv8vwcl1Nfrk-img-1_1771597221000_na1fn_aGVyby1iYW5uZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative container py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Your Coming-of-Age Journey
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              Discover transformative anime stories. Track character growth, find your next favorite series, and connect with a community exploring life's milestones through anime.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background">
                Explore Anime
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Your Journey</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Everything you need to discover, track, and share your coming-of-age anime experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Discover */}
          <Card className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Discover</h3>
            </div>
            <p className="text-foreground/70">
              Browse coming-of-age anime by mood, theme, and season. Find stories that resonate with your personal journey.
            </p>
          </Card>

          {/* Watchlist */}
          <Card className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Bookmark className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Watchlist</h3>
            </div>
            <p className="text-foreground/70">
              Save anime to your personal watchlist. Organize by status and track your progress through each series.
            </p>
          </Card>

          {/* My Journey */}
          <Card className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Map className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">My Journey</h3>
            </div>
            <p className="text-foreground/70">
              Track your personal growth through anime. See how character arcs connect to your own transformation.
            </p>
          </Card>

          {/* Community */}
          <Card className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
            </div>
            <p className="text-foreground/70">
              Join forums and discussions. Share your favorite coming-of-age stories and connect with other fans.
            </p>
          </Card>

          {/* AI Recommendations */}
          <Card className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">AI Recommendations</h3>
            </div>
            <p className="text-foreground/70">
              Get personalized anime suggestions based on your mood, preferences, and character growth interests.
            </p>
          </Card>

          {/* AI Chat */}
          <Card className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">AI Chat</h3>
            </div>
            <p className="text-foreground/70">
              Talk to anime characters about growth and transformation. Get insights from your favorite coming-of-age heroes.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="glass-panel p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of fans discovering transformative anime stories and tracking their personal growth through character arcs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-background">
            Start Free Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-background/50 backdrop-blur">
        <div className="container py-8 text-center text-foreground/60 text-sm">
          <p>&copy; 2026 Anime Ascend. All rights reserved. | Coming-of-Age Anime Discovery Platform</p>
        </div>
      </footer>
    </div>
  );
}

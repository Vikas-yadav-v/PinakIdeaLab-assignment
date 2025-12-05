"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Heart, Zap, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const COMMUNITY_FEATURES = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Connect with Others",
    description: "Join thousands of users and share your experiences",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Ask Questions",
    description: "Get help from the community and our experts",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Share Ideas",
    description: "Contribute to feature requests and suggestions",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Learn & Grow",
    description: "Discover tips, tricks, and best practices",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Earn Recognition",
    description: "Become a valued member of our community",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Stay Updated",
    description: "Get the latest news and announcements first",
  },
]

const COMMUNITY_CHANNELS = [
  {
    title: "General Discussion",
    description: "Talk about anything related to our platform",
    members: "12.5K",
    posts: "45.2K",
  },
  {
    title: "Feature Requests",
    description: "Suggest new features and vote on ideas",
    members: "8.3K",
    posts: "3.1K",
  },
  {
    title: "Integrations",
    description: "Discuss third-party integrations and APIs",
    members: "5.7K",
    posts: "2.8K",
  },
  {
    title: "Showcase",
    description: "Show off your projects and creations",
    members: "9.2K",
    posts: "5.4K",
  },
  {
    title: "Troubleshooting",
    description: "Get help solving technical issues",
    members: "7.1K",
    posts: "8.9K",
  },
  {
    title: "Best Practices",
    description: "Share and learn industry best practices",
    members: "6.4K",
    posts: "1.7K",
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100 mb-8">
              Connect with thousands of users, share ideas, and grow together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <Button size="lg">Join Community</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Join Our Community?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {COMMUNITY_FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Community Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {COMMUNITY_CHANNELS.map((channel, index) => (
              <ChannelCard key={channel.title} channel={channel} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Community Stats</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <StatCard label="Total Members" value="50K+" index={0} />
              <StatCard label="Active Discussions" value="100K+" index={1} />
              <StatCard label="Monthly Posts" value="25K+" index={2} />
              <StatCard label="Help Provided" value="99%" index={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Community Guidelines</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in fostering a respectful, inclusive, and supportive community where everyone feels welcome
            </p>
            <Button size="lg" variant="outline">
              Read Full Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Become part of our thriving community and start connecting with like-minded users
            </p>
            <Link href="/contact">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof COMMUNITY_FEATURES)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <CardHeader>
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

function ChannelCard({ channel, index }: { channel: (typeof COMMUNITY_CHANNELS)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors">{channel.title}</CardTitle>
          <CardDescription>{channel.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Members:</span>
              <span className="font-semibold">{channel.members}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Posts:</span>
              <span className="font-semibold">{channel.posts}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({ label, value, index }: { label: string; value: string; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="text-center hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="text-3xl font-bold mb-2">{value}</div>
          <CardDescription>{label}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

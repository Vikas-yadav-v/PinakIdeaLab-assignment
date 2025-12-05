"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { VALUES, TEAM } from "@/constants/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">About Us</h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-100">
              Building the future through innovation, dedication, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, we set out with a simple mission: to help businesses thrive in the digital age
                  through innovative solutions and exceptional service.
                </p>
                <p>
                  What started as a small team of passionate professionals has grown into a dynamic company serving
                  clients across the globe. Our commitment to excellence and client satisfaction has remained
                  unwavering.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital transformation, helping businesses of all sizes
                  achieve their goals and reach new heights.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {VALUES.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The talented people behind our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {TEAM.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's create something amazing together</p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get In Touch <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ValueCard({ value, index }: { value: (typeof VALUES)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        {value.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
      <p className="text-muted-foreground text-sm">{value.description}</p>
    </div>
  )
}

function TeamCard({ member, index }: { member: (typeof TEAM)[0]; index: number }) {
  const { ref } = useScrollReveal()

  return (
    <div ref={ref} className="group text-center" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative h-64 rounded-lg overflow-hidden mb-4">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-muted-foreground">{member.role}</p>
    </div>
  )
}

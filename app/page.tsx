import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import WhyChoose from "./components/WhyChoose"
import DemoVideo from "./components/DemoVideo"
import Portfolio from "./components/Portfolio"
import TestimonialsCarousel from "./components/TestimonialsCarousel"
import Pricing from "./components/Pricing"
import PricingCalculator from "./components/PricingCalculator"
import BlogResources from "./components/BlogResources"
import FAQ from "./components/FAQ"
import ContactForm from "./components/ContactForm"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <WhyChoose />
      <DemoVideo />
      <Portfolio />
      <TestimonialsCarousel />
      <Pricing />
      <PricingCalculator />
      <BlogResources />
      <FAQ />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  )
}

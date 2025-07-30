"use client"

import { ArrowRight, Sparkles, Star, Zap, CheckCircle, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Start generating AI content in minutes",
    "No setup fees or hidden costs",
    "Cancel anytime with full refund",
    "24/7 expert support included",
  ]

  const floatingElements = [
    { icon: <Sparkles className="h-6 w-6" />, delay: 0, position: "top-10 left-10" },
    { icon: <Star className="h-8 w-8" />, delay: 0.5, position: "top-20 right-20" },
    { icon: <Zap className="h-6 w-6" />, delay: 1, position: "bottom-20 left-20" },
    { icon: <Rocket className="h-8 w-8" />, delay: 1.5, position: "bottom-10 right-10" },
  ]

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: element.delay }}
            className={`absolute ${element.position} text-white/30`}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: element.delay,
              }}
            >
              {element.icon}
            </motion.div>
          </motion.div>
        ))}

        {/* Particle Effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            className="absolute bottom-0 w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mr-2"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
            </motion.div>
            Limited Time Offer - 50% Off First Month
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="ml-2"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-[length:200%_auto]"
            >
              Transform
            </motion.span>{" "}
            Your Marketing?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join 50,000+ businesses already using ADmyBRAND AI Suite to create compelling campaigns, analyze
            performance, and scale their growth with intelligent automation.
          </motion.p>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="flex-shrink-0"
              >
                <CheckCircle className="h-5 w-5 text-green-400" />
              </motion.div>
              <span className="font-medium">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-2xl shadow-purple-500/25 group border-0">
              Start Your Free Trial
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-white/30 hover:border-white text-white hover:text-purple-900 hover:bg-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 bg-white/10 backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {["🚀 TechFlow", "🌱 EcoGreen", "💰 FinanceFlow", "🏥 HealthTech", "📚 EduLearn"].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-white/80 font-medium text-sm cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto"
        >
          <div className="text-white/80 text-sm mb-2">Special offer ends in:</div>
          <div className="flex justify-center space-x-4 text-white font-bold">
            {[
              { value: "23", label: "Hours" },
              { value: "59", label: "Minutes" },
              { value: "45", label: "Seconds" },
            ].map((time, index) => (
              <motion.div
                key={index}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-2xl bg-white/20 rounded-lg px-3 py-2 mb-1">{time.value}</div>
                <div className="text-xs text-white/60">{time.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

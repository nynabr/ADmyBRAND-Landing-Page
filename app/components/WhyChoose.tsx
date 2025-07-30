"use client"

import { Shield, Zap, Users, Trophy, Sparkles, Star, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning-Fast AI Processing",
      description: "Generate high-quality content, analyze data, and optimize campaigns in seconds, not hours.",
      stats: "10x Faster",
      color: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 shadow-2xl">
            {/* Lightning Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              {/* Speed Lines */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, 30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                  className={`absolute top-${2 + i * 2} -right-2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and compliance with GDPR, SOC2, and industry standards.",
      stats: "99.9% Uptime",
      color: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 shadow-2xl">
            {/* Shield Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotateY: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              {/* Security Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                  className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                />
              ))}
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Support Team",
      description: "24/7 dedicated support from AI marketing specialists who understand your business.",
      stats: "< 2min Response",
      color: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 shadow-2xl">
            {/* Team Animation */}
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  className={`w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {String.fromCharCode(65 + i)}
                </motion.div>
              ))}
            </div>
            {/* Chat Bubbles */}
            <motion.div
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute -top-2 -right-2 bg-white rounded-lg p-2 shadow-lg text-xs"
            >
              💬 Here to help!
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Proven Results",
      description: "Join 50,000+ businesses that have increased their ROI by an average of 300%.",
      stats: "300% ROI",
      color: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-2xl">
            {/* Trophy Animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              {/* Success Sparkles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.4,
                  }}
                  className={`absolute ${
                    i === 0
                      ? "-top-2 -left-2"
                      : i === 1
                        ? "-top-2 -right-2"
                        : i === 2
                          ? "-bottom-2 -left-2"
                          : "-bottom-2 -right-2"
                  }`}
                >
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="why-choose"
      className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-medium mb-8 border border-white/30 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mr-2"
            >
              <Sparkles className="w-5 h-5 text-pink-600" />
            </motion.div>
            Why Choose ADmyBRAND AI
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            The Smart Choice for{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 via-indigo-600 to-cyan-600 bg-[length:300%_auto]"
            >
              Modern Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Discover why leading brands trust ADmyBRAND AI Suite to transform their marketing strategy and drive
            unprecedented growth.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className={`bg-gradient-to-br ${reason.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16" />

                <div className="grid md:grid-cols-2 gap-6 items-center relative z-10">
                  {/* Illustration */}
                  <div className="order-2 md:order-1">
                    <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                      {reason.illustration}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2 space-y-4">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${reason.color} text-white shadow-lg`}
                    >
                      {reason.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors"
                    >
                      {reason.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {reason.description}
                    </motion.p>

                    {/* Stats Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      whileHover={{ scale: 1.1 }}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${reason.color} text-white rounded-full text-sm font-bold shadow-lg`}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {reason.stats}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
          >
            Experience the Difference Today
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="ml-2"
            >
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

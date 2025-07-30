"use client"

import { MessageSquare, Palette, Code, Rocket, CheckCircle, Sparkles, Star, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      step: "01",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Discovery & Strategy",
      description:
        "We start with a comprehensive consultation to understand your business goals, target audience, and unique requirements.",
      details: ["Business analysis", "Competitor research", "User persona development", "Goal setting"],
      color: "text-sky-600",
      bgGradient: "from-sky-400 via-blue-500 to-indigo-600",
      cardGradient: "from-sky-50 via-blue-50 to-indigo-50",
      glowColor: "shadow-sky-500/25",
      illustration: (
        <div className="relative">
          {/* 3D Meeting Scene */}
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-8 shadow-2xl border border-white/20">
            {/* Conference Table */}
            <div className="relative mb-6">
              <div className="w-full h-16 bg-gradient-to-r from-sky-300 to-blue-400 rounded-2xl shadow-lg transform perspective-1000 rotateX-12">
                {/* Laptops on table */}
                <div className="absolute top-2 left-4 w-12 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg">
                  <div className="w-10 h-6 bg-gradient-to-b from-sky-400 to-blue-500 rounded-sm m-1"></div>
                </div>
                <div className="absolute top-2 right-4 w-12 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg">
                  <div className="w-10 h-6 bg-gradient-to-b from-sky-400 to-blue-500 rounded-sm m-1"></div>
                </div>
                {/* Documents */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded shadow-sm"></div>
              </div>
            </div>

            {/* Characters */}
            <div className="flex justify-around items-end">
              {/* Character 1 */}
              <motion.div
                animate={{
                  y: [-2, 2, -2],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-16 h-20 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full relative">
                  {/* Head */}
                  <div className="w-12 h-12 bg-gradient-to-b from-pink-300 to-rose-400 rounded-full absolute -top-6 left-2 border-2 border-white shadow-lg">
                    <div className="flex space-x-1 justify-center mt-3">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-3 h-1.5 border-b border-gray-800 rounded-full mx-auto mt-1"></div>
                  </div>
                </div>
              </motion.div>

              {/* Character 2 */}
              <motion.div
                animate={{
                  y: [2, -2, 2],
                  rotate: [1, -1, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-16 h-20 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-full relative">
                  <div className="w-12 h-12 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full absolute -top-6 left-2 border-2 border-white shadow-lg">
                    <div className="flex space-x-1 justify-center mt-3">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-3 h-1.5 border-b border-gray-800 rounded-full mx-auto mt-1"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Ideas */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-sky-500" />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      icon: <Palette className="h-8 w-8" />,
      title: "Design & Wireframing",
      description:
        "Our design team creates stunning mockups and wireframes that align with your brand identity and conversion goals.",
      details: ["Brand analysis", "Wireframe creation", "Visual design", "Prototype development"],
      color: "text-purple-600",
      bgGradient: "from-purple-400 via-pink-500 to-rose-600",
      cardGradient: "from-purple-50 via-pink-50 to-rose-50",
      glowColor: "shadow-purple-500/25",
      illustration: (
        <div className="relative">
          {/* 3D Design Studio */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl border border-white/20">
            {/* Design Canvas */}
            <div className="relative mb-6">
              <div className="w-full h-20 bg-white rounded-2xl shadow-lg p-4">
                {/* Wireframe Elements */}
                <div className="grid grid-cols-3 gap-2 h-full">
                  <div className="space-y-1">
                    <div className="h-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded"></div>
                    <div className="h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded"></div>
                    <div className="h-2 bg-purple-200 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded"></div>
                    <div className="h-3 bg-gradient-to-r from-pink-200 to-rose-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Designer Character */}
            <div className="flex justify-center">
              <motion.div
                animate={{
                  rotate: [-3, 3, -3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-20 h-24 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full relative">
                  {/* Head */}
                  <div className="w-14 h-14 bg-gradient-to-b from-rose-300 to-pink-400 rounded-full absolute -top-7 left-3 border-2 border-white shadow-lg">
                    <div className="flex space-x-1 justify-center mt-4">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-3 h-1.5 border-b border-gray-800 rounded-full mx-auto mt-1"></div>
                  </div>
                  {/* Arm with stylus */}
                  <div className="absolute top-6 -right-8 w-12 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform rotate-12">
                    <div className="absolute -right-2 top-0 w-4 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Color Palette */}
            <div className="flex justify-center space-x-2 mt-4">
              {["bg-purple-400", "bg-pink-400", "bg-rose-400", "bg-sky-400"].map((color, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  className={`w-4 h-4 ${color} rounded-full shadow-lg`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      icon: <Code className="h-8 w-8" />,
      title: "Development & Testing",
      description:
        "We bring designs to life with clean, optimized code and rigorous testing across all devices and browsers.",
      details: ["Responsive coding", "Performance optimization", "Cross-browser testing", "Quality assurance"],
      color: "text-emerald-600",
      bgGradient: "from-emerald-400 via-teal-500 to-cyan-600",
      cardGradient: "from-emerald-50 via-teal-50 to-cyan-50",
      glowColor: "shadow-emerald-500/25",
      illustration: (
        <div className="relative">
          {/* 3D Development Scene */}
          <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-3xl p-8 shadow-2xl border border-white/20">
            {/* Code Editor */}
            <div className="relative mb-6">
              <div className="w-full h-20 bg-gray-900 rounded-2xl shadow-lg p-4">
                {/* Code Lines */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="h-1.5 bg-emerald-300 rounded w-16"></div>
                    <div className="h-1.5 bg-cyan-300 rounded w-12"></div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <div className="h-1.5 bg-teal-300 rounded w-20"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="h-1.5 bg-cyan-300 rounded w-14"></div>
                    <div className="h-1.5 bg-emerald-300 rounded w-8"></div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="h-1.5 bg-emerald-300 rounded w-18"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Character */}
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [-1, 1, -1],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-20 h-24 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full relative">
                  {/* Head */}
                  <div className="w-14 h-14 bg-gradient-to-b from-amber-300 to-yellow-400 rounded-full absolute -top-7 left-3 border-2 border-white shadow-lg">
                    <div className="flex space-x-1 justify-center mt-4">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-3 h-1.5 border-b border-gray-800 rounded-full mx-auto mt-1"></div>
                  </div>
                  {/* Glasses */}
                  <div className="absolute -top-2 left-5 w-8 h-4 border-2 border-gray-600 rounded-lg bg-white/20"></div>
                </div>
              </motion.div>
            </div>

            {/* Floating Code Symbols */}
            <motion.div
              animate={{
                y: [-3, 3, -3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg"
            >
              <Code className="h-3 w-3 text-emerald-500" />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      step: "04",
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch & Optimization",
      description:
        "We deploy your landing page and provide ongoing optimization based on real user data and performance metrics.",
      details: ["Site deployment", "Analytics setup", "Performance monitoring", "Continuous optimization"],
      color: "text-rose-600",
      bgGradient: "from-rose-400 via-pink-500 to-purple-600",
      cardGradient: "from-rose-50 via-pink-50 to-purple-50",
      glowColor: "shadow-rose-500/25",
      illustration: (
        <div className="relative">
          {/* 3D Launch Scene */}
          <div className="bg-gradient-to-br from-rose-100 to-purple-100 rounded-3xl p-8 shadow-2xl border border-white/20">
            {/* Rocket Launch */}
            <div className="relative mb-6 flex justify-center">
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Rocket */}
                <div className="w-8 h-16 bg-gradient-to-b from-rose-400 to-purple-500 rounded-t-full rounded-b-lg relative">
                  {/* Window */}
                  <div className="w-4 h-4 bg-sky-200 rounded-full absolute top-2 left-2 border border-white"></div>
                  {/* Fins */}
                  <div className="absolute bottom-0 -left-1 w-2 h-4 bg-gradient-to-b from-rose-300 to-purple-400 transform -skew-x-12"></div>
                  <div className="absolute bottom-0 -right-1 w-2 h-4 bg-gradient-to-b from-rose-300 to-purple-400 transform skew-x-12"></div>
                </div>

                {/* Exhaust */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full"
                />
              </motion.div>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs font-semibold text-gray-600">Launch Metrics</div>
                <div className="text-xs text-green-600 font-bold">🚀 Live</div>
              </div>
              <div className="flex items-end space-x-1 h-8">
                {[40, 60, 80, 95, 70, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${height}%` } : { height: 0 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-gradient-to-t from-rose-400 to-purple-500 rounded-sm flex-1"
                  />
                ))}
              </div>
            </div>

            {/* Success Indicators */}
            <div className="flex justify-around mt-4">
              {[
                { icon: Users, color: "text-sky-500" },
                { icon: Star, color: "text-yellow-500" },
                { icon: Zap, color: "text-emerald-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                  className={`p-2 bg-white rounded-full shadow-lg ${item.color}`}
                >
                  <item.icon className="h-4 w-4" />
                </motion.div>
              ))}
            </div>
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
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-purple-50 relative overflow-hidden"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full blur-3xl"
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-8 border border-white/30 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mr-2"
            >
              <Sparkles className="w-5 h-5 text-pink-600" />
            </motion.div>
            Our Proven Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Proven{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 via-sky-600 to-cyan-600 bg-[length:300%_auto]"
            >
              Design Process
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            From concept to launch, we follow a systematic approach that ensures exceptional results and client
            satisfaction with cutting-edge design and development.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Illustration */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }} className="relative">
                  {step.illustration}

                  {/* Floating Step Number */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r ${step.bgGradient} rounded-2xl shadow-2xl ${step.glowColor} flex items-center justify-center`}
                  >
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 5, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className={`absolute top-1/4 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/20`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`p-2 rounded-xl bg-gradient-to-r ${step.bgGradient} text-white`}
                    >
                      {step.icon}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                {/* Title & Description */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Details Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 + 0.7 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${step.cardGradient} rounded-2xl shadow-lg border border-white/20 cursor-pointer`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + detailIndex * 0.1 + 0.8 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle className="h-6 w-6 text-emerald-500" />
                      </motion.div>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Progress Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 + 1.2 }}
                        className={`w-3 h-3 rounded-full ${
                          i <= index ? `bg-gradient-to-r ${step.bgGradient}` : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Step {index + 1} of 4</span>
                </motion.div>
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-sky-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Rocket className="h-5 w-5 mr-2" />
            Start Your Project Journey
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="ml-2"
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Play, Pause, Volume2, Maximize, Clock, Users, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function DemoVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      title: "AI Content Creation",
      description: "Watch how our AI generates compelling marketing copy in seconds",
      timestamp: "0:30",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Real-time Analytics",
      description: "See live performance metrics and insights as they happen",
      timestamp: "1:45",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Multi-channel Automation",
      description: "Discover how to automate campaigns across all platforms",
      timestamp: "2:30",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Smart Optimization",
      description: "Learn how AI continuously improves your campaign performance",
      timestamp: "3:15",
      color: "from-green-500 to-emerald-600",
    },
  ]

  const stats = [
    { value: "2.5M+", label: "Views", icon: <Users className="h-5 w-5" /> },
    { value: "4.8/5", label: "Rating", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "5:42", label: "Duration", icon: <Clock className="h-5 w-5" /> },
  ]

  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
            See It In Action
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Watch ADmyBRAND AI{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-[length:300%_auto]"
            >
              Transform Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the power of AI-driven marketing in this comprehensive demo. See how leading brands are achieving
            300% ROI increases with our platform.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-indigo-900">
                <img
                  src="/placeholder.svg?height=600&width=800&text=ADmyBRAND+AI+Demo+Video"
                  alt="Demo Video Thumbnail"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Play Button Overlay */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(236, 72, 153, 0.7)",
                        "0 0 0 20px rgba(236, 72, 153, 0)",
                        "0 0 0 0 rgba(236, 72, 153, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white ml-1" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" />
                    )}
                  </motion.div>
                </motion.div>

                {/* Video Stats Overlay */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm flex items-center space-x-2"
                    >
                      {stat.icon}
                      <span className="font-medium">{stat.value}</span>
                      <span className="text-white/70">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="text-white hover:text-pink-400 transition-colors"
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </motion.button>
                        <Volume2 className="h-5 w-5 text-white" />
                        <span className="text-white text-sm">2:30 / 5:42</span>
                      </div>
                      <Maximize className="h-5 w-5 text-white cursor-pointer hover:text-pink-400 transition-colors" />
                    </div>
                    <div className="mt-2 bg-white/20 rounded-full h-1">
                      <motion.div
                        animate={{ width: isPlaying ? "44%" : "0%" }}
                        transition={{ duration: isPlaying ? 3.12 : 0 }}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>AI-powered content generation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Multi-channel automation</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Smart targeting & personalization</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>ROI optimization strategies</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Integration best practices</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Demo Highlights</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="cursor-pointer p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/10"
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        className={`w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full mt-2 flex-shrink-0`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{feature.title}</h4>
                          <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                            {feature.timestamp}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30"
            >
              <h4 className="text-lg font-bold text-white mb-3">Ready to Get Started?</h4>
              <p className="text-white/80 text-sm mb-4">
                Join thousands of businesses already using ADmyBRAND AI to transform their marketing.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl">
                  Start Free Trial
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

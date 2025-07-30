"use client"

import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-indigo-50 to-cyan-50 relative overflow-hidden pt-16"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={`absolute w-4 h-4 bg-gradient-to-r ${
              i % 3 === 0
                ? "from-pink-400 to-rose-500"
                : i % 3 === 1
                  ? "from-purple-400 to-indigo-500"
                  : "from-cyan-400 to-blue-500"
            } rounded-full opacity-60`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-medium border border-white/30 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mr-2"
              >
                <Sparkles className="w-5 h-5 text-pink-600" />
              </motion.div>
              #1 AI Marketing Platform
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2"
              >
                🚀
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your Marketing with{" "}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 via-indigo-600 to-cyan-600 bg-[length:300%_auto]"
              >
                AI Intelligence
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              ADmyBRAND AI Suite empowers businesses to create compelling campaigns, analyze performance, and scale
              growth with intelligent automation. Join 50,000+ companies already transforming their marketing.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                {
                  value: "300%",
                  label: "ROI Increase",
                  icon: <TrendingUp className="h-5 w-5" />,
                  color: "from-green-500 to-emerald-600",
                },
                {
                  value: "50K+",
                  label: "Happy Clients",
                  icon: <Users className="h-5 w-5" />,
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  value: "10x",
                  label: "Faster Results",
                  icon: <Zap className="h-5 w-5" />,
                  color: "from-purple-500 to-pink-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg cursor-pointer border border-white/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-2`}
                  >
                    {stat.icon}
                  </motion.div>
                  <div
                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-2xl shadow-purple-500/25 group">
                  Start Free Trial
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 bg-white/80 backdrop-blur-sm group"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Mockup */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">ADmyBRAND AI</h3>
                      <p className="text-sm text-gray-500">Marketing Dashboard</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Analytics Charts */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Conversions</span>
                      <span className="text-green-600 font-bold text-sm">+45%</span>
                    </div>
                    <div className="h-16 flex items-end justify-around">
                      {[40, 70, 45, 80, 60, 90, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [`${height * 0.5}%`, `${height}%`, `${height * 0.8}%`] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          className="bg-gradient-to-t from-pink-500 to-rose-600 rounded-sm w-3"
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Revenue</span>
                      <span className="text-green-600 font-bold text-sm">+120%</span>
                    </div>
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-16 h-16 mx-auto"
                      >
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeDasharray="75, 100"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-purple-600">75%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* AI Features */}
                <div className="space-y-3">
                  {[
                    { label: "AI Content Generation", progress: 95, color: "from-pink-500 to-rose-600" },
                    { label: "Smart Analytics", progress: 88, color: "from-purple-500 to-indigo-600" },
                    { label: "Auto Optimization", progress: 92, color: "from-indigo-500 to-cyan-600" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                          <span className="text-sm font-bold text-gray-900">{feature.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${feature.progress}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 1.5 + index * 0.3 }}
                            className={`h-2 bg-gradient-to-r ${feature.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-pink-100"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">+300% ROI</div>
                  <div className="text-xs text-gray-500">This month</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-4 text-white shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <div>
                  <div className="text-sm font-bold">50K+ Users</div>
                  <div className="text-xs opacity-80">Growing daily</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

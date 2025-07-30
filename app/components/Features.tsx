"use client"

import {
  Brain,
  BarChart3,
  Zap,
  Target,
  MessageSquare,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Content Generation",
      description:
        "Create compelling copy, social media posts, and marketing materials in seconds with our advanced AI engine.",
      benefits: ["Blog posts & articles", "Social media content", "Email campaigns", "Ad copy"],
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-6 shadow-2xl">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Brain className="h-5 w-5 text-pink-600" />
                  <span className="font-semibold text-gray-800">AI Writer</span>
                </div>
                <div className="space-y-2">
                  {[
                    "Transform your marketing with...",
                    "Boost engagement by 300%...",
                    "Drive conversions with AI...",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                      className="h-2 bg-gradient-to-r from-pink-200 to-rose-300 rounded"
                      style={{ width: `${80 - i * 15}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your marketing performance with real-time analytics and predictive modeling.",
      benefits: ["Real-time dashboards", "Predictive analytics", "ROI tracking", "Custom reports"],
      color: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-6 shadow-2xl">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-800">Performance</span>
                <span className="text-green-600 font-bold text-sm">+45%</span>
              </div>
              <div className="h-20 flex items-end justify-around space-x-1">
                {[60, 80, 45, 90, 70, 95, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [`${height * 0.6}%`, `${height}%`, `${height * 0.8}%`],
                      backgroundColor: [`#8b5cf6`, `#3b82f6`, `#8b5cf6`],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-4 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Multi-Channel Automation",
      description:
        "Automate your marketing across all channels with intelligent workflows and trigger-based campaigns.",
      benefits: ["Email automation", "Social scheduling", "Lead nurturing", "Cross-platform sync"],
      color: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 shadow-2xl">
            <div className="relative">
              {/* Central Hub */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Zap className="h-8 w-8 text-white" />
              </motion.div>

              {/* Connected Channels */}
              <div className="grid grid-cols-3 gap-2">
                {["📧", "📱", "🌐", "📊", "💬", "🎯"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md text-lg"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Targeting",
      description: "Reach the right audience with AI-powered targeting and personalization that adapts in real-time.",
      benefits: ["Audience segmentation", "Behavioral targeting", "Personalization", "A/B testing"],
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 shadow-2xl">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-20 h-20 mx-auto relative"
              >
                {/* Target Rings */}
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 0.4, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: ring * 0.5,
                    }}
                    className={`absolute inset-0 border-4 border-green-500 rounded-full`}
                    style={{
                      transform: `scale(${1 + ring * 0.3})`,
                      opacity: 0.8 - ring * 0.2,
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
              </motion.div>

              {/* Floating User Icons */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, Math.sin(i) * 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                  className={`absolute w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md text-xs ${
                    i === 0
                      ? "top-2 left-2"
                      : i === 1
                        ? "top-2 right-2"
                        : i === 2
                          ? "bottom-2 left-2"
                          : "bottom-2 right-2"
                  }`}
                >
                  👤
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Chatbot Integration",
      description: "Deploy intelligent chatbots that handle customer inquiries and convert visitors into leads 24/7.",
      benefits: ["24/7 customer support", "Lead qualification", "Multi-language support", "CRM integration"],
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 shadow-2xl">
            <div className="space-y-3">
              {/* Chat Messages */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="bg-white rounded-2xl p-3 shadow-md ml-4"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">AI Assistant</span>
                </div>
                <p className="text-xs text-gray-600">How can I help you today?</p>
              </motion.div>

              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-3 shadow-md mr-4 text-white"
              >
                <p className="text-xs">I need help with pricing</p>
              </motion.div>

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                className="bg-white rounded-2xl p-3 shadow-md ml-4"
              >
                <p className="text-xs text-gray-600">I'd be happy to help! Let me show you our plans...</p>
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
                  className="flex space-x-1 mt-2"
                >
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Boost your search rankings with AI-powered SEO tools that optimize content and track performance.",
      benefits: ["Keyword research", "Content optimization", "Rank tracking", "Competitor analysis"],
      color: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-6 shadow-2xl">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Search className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold text-gray-800">SEO Score</span>
              </div>

              {/* SEO Score Circle */}
              <div className="relative w-16 h-16 mx-auto mb-4">
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <motion.path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#seoGradient)"
                    strokeWidth="3"
                    strokeDasharray="85, 100"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: "85, 100" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="text-lg font-bold text-indigo-600"
                  >
                    85
                  </motion.span>
                </div>
              </div>

              {/* SEO Metrics */}
              <div className="space-y-2">
                {[
                  { label: "Keywords", value: "95%" },
                  { label: "Content", value: "88%" },
                  { label: "Technical", value: "92%" },
                ].map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">{metric.label}</span>
                    <span className="text-xs font-bold text-indigo-600">{metric.value}</span>
                  </div>
                ))}
              </div>
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
      id="features"
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
            Powerful AI Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Everything You Need to{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 via-indigo-600 to-cyan-600 bg-[length:300%_auto]"
            >
              Dominate Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our comprehensive AI-powered marketing suite provides all the tools you need to create, optimize, and scale
            your marketing efforts with unprecedented efficiency.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
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
                className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden h-full`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Illustration */}
                  <div className="mb-6">
                    <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }}>
                      {feature.illustration}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg mb-4`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      className="text-gray-600 leading-relaxed mb-6"
                    >
                      {feature.description}
                    </motion.p>

                    {/* Benefits List */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                      className="space-y-2 mb-6"
                    >
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.7 + benefitIndex * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-purple-600 font-semibold cursor-pointer group-hover:text-purple-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "99.9%",
                label: "Uptime",
                icon: <TrendingUp className="h-6 w-6" />,
                color: "from-green-500 to-emerald-600",
              },
              {
                value: "50K+",
                label: "Active Users",
                icon: <Users className="h-6 w-6" />,
                color: "from-blue-500 to-cyan-600",
              },
              {
                value: "150+",
                label: "Countries",
                icon: <Globe className="h-6 w-6" />,
                color: "from-purple-500 to-pink-600",
              },
              {
                value: "24/7",
                label: "Support",
                icon: <MessageSquare className="h-6 w-6" />,
                color: "from-orange-500 to-red-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-pointer p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3 flex justify-center`}
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

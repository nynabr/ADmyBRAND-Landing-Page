"use client"

import {
  BookOpen,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  Play,
  Download,
  Eye,
  Heart,
  Share2,
  Clock,
  Tag,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function BlogResources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing: 2024 Trends and Predictions",
      excerpt:
        "Discover how artificial intelligence is revolutionizing marketing strategies and what trends to watch for in 2024.",
      category: "AI Trends",
      author: {
        name: "Sarah Chen",
        role: "AI Marketing Strategist",
        avatar: "/placeholder.svg?height=40&width=40&text=SC",
      },
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400&text=AI+Marketing+Trends+2024",
      tags: ["AI", "Marketing", "Trends", "2024"],
      stats: {
        views: "12.5K",
        likes: "342",
        shares: "89",
      },
      featured: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "How to Increase Conversion Rates by 300% with AI-Powered Personalization",
      excerpt:
        "Learn the proven strategies and techniques that top companies use to dramatically boost their conversion rates.",
      category: "Case Studies",
      author: {
        name: "Marcus Rodriguez",
        role: "Growth Marketing Expert",
        avatar: "/placeholder.svg?height=40&width=40&text=MR",
      },
      date: "March 12, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=400&text=Conversion+Rate+Optimization",
      tags: ["Conversion", "Personalization", "Growth", "ROI"],
      stats: {
        views: "8.7K",
        likes: "256",
        shares: "67",
      },
      featured: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Complete Guide to Marketing Automation: From Setup to Success",
      excerpt: "Step-by-step guide to implementing marketing automation that actually works for your business.",
      category: "Guides",
      author: {
        name: "Emily Watson",
        role: "Marketing Automation Specialist",
        avatar: "/placeholder.svg?height=40&width=40&text=EW",
      },
      date: "March 10, 2024",
      readTime: "15 min read",
      image: "/placeholder.svg?height=300&width=400&text=Marketing+Automation+Guide",
      tags: ["Automation", "Guide", "Setup", "Strategy"],
      stats: {
        views: "15.2K",
        likes: "428",
        shares: "156",
      },
      featured: false,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "ROI Analysis: Measuring the True Impact of AI Marketing Tools",
      excerpt:
        "Comprehensive analysis of how to measure and optimize the return on investment for AI marketing solutions.",
      category: "Analytics",
      author: {
        name: "David Park",
        role: "Data Analytics Director",
        avatar: "/placeholder.svg?height=40&width=40&text=DP",
      },
      date: "March 8, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=400&text=ROI+Analytics+Dashboard",
      tags: ["ROI", "Analytics", "Measurement", "KPIs"],
      stats: {
        views: "9.3K",
        likes: "187",
        shares: "43",
      },
      featured: false,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 5,
      title: "Customer Journey Mapping with AI: A Complete Walkthrough",
      excerpt:
        "Learn how to create detailed customer journey maps using AI insights to improve user experience and conversions.",
      category: "Strategy",
      author: {
        name: "Lisa Thompson",
        role: "Customer Experience Lead",
        avatar: "/placeholder.svg?height=40&width=40&text=LT",
      },
      date: "March 5, 2024",
      readTime: "11 min read",
      image: "/placeholder.svg?height=300&width=400&text=Customer+Journey+Map",
      tags: ["Customer Journey", "UX", "Strategy", "Mapping"],
      stats: {
        views: "7.8K",
        likes: "203",
        shares: "52",
      },
      featured: false,
      color: "from-pink-500 to-red-500",
    },
    {
      id: 6,
      title: "Building High-Converting Landing Pages: AI-Driven Design Principles",
      excerpt:
        "Discover the design principles and AI tools that help create landing pages with exceptional conversion rates.",
      category: "Design",
      author: {
        name: "Michael Torres",
        role: "UX/UI Designer",
        avatar: "/placeholder.svg?height=40&width=40&text=MT",
      },
      date: "March 3, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=400&text=Landing+Page+Design",
      tags: ["Landing Pages", "Design", "Conversion", "UX"],
      stats: {
        views: "11.4K",
        likes: "312",
        shares: "78",
      },
      featured: false,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const categories = ["all", "AI Trends", "Case Studies", "Guides", "Analytics", "Strategy", "Design"]

  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="blog"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 270, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 90, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-3xl"
        />

        {/* Floating Knowledge Icons */}
        {[BookOpen, TrendingUp, Users, Eye, Heart].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.2,
            }}
            className={`absolute w-8 h-8 ${
              i % 3 === 0 ? "text-purple-400" : i % 3 === 1 ? "text-pink-400" : "text-indigo-400"
            } opacity-30`}
            style={{
              top: `${15 + i * 18}%`,
              right: `${8 + i * 15}%`,
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
            Knowledge Hub
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="ml-2"
            >
              <TrendingUp className="w-4 h-4 text-pink-600" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Learn & Grow with{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%_auto]"
            >
              AI Marketing
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert insights, proven strategies, and actionable guides for AI-powered
            marketing success.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-purple-500/25"
                  : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-purple-600 hover:bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {filteredPosts
          .filter((post) => post.featured)
          .map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-20"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group border border-purple-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-64 lg:h-full flex items-center justify-center relative"
                    >
                      {/* AI Trend Visualization */}
                      <div className="w-80 h-48 bg-white rounded-lg shadow-xl p-6 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-gray-800">AI Marketing Trends</h4>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
                          </div>
                        </div>

                        {/* Animated Chart */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm text-gray-600 w-20">Personalization</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                              />
                            </div>
                            <div className="text-sm font-bold text-purple-600">85%</div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="text-sm text-gray-600 w-20">Automation</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "92%" }}
                                transition={{ duration: 2, delay: 0.7 }}
                                className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full"
                              />
                            </div>
                            <div className="text-sm font-bold text-indigo-600">92%</div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="text-sm text-gray-600 w-20">Analytics</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "78%" }}
                                transition={{ duration: 2, delay: 0.9 }}
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                              />
                            </div>
                            <div className="text-sm font-bold text-green-600">78%</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="absolute top-6 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Featured Article
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </motion.div>

                    {/* Trending Badge */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center"
                    >
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{post.excerpt}</p>

                    {/* Author */}
                    <div className="flex items-center space-x-4 mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold"
                      >
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </motion.div>
                      <div>
                        <div className="font-semibold text-gray-900">{post.author.name}</div>
                        <div className="text-sm text-gray-600">{post.author.role}</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100"
                      >
                        <div className="flex items-center justify-center mb-1">
                          <Eye className="w-4 h-4 text-indigo-600 mr-1" />
                          <span className="text-lg font-bold text-indigo-600">{post.stats.views}</span>
                        </div>
                        <div className="text-xs text-gray-600">Views</div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border border-pink-100"
                      >
                        <div className="flex items-center justify-center mb-1">
                          <Heart className="w-4 h-4 text-pink-600 mr-1" />
                          <span className="text-lg font-bold text-pink-600">{post.stats.likes}</span>
                        </div>
                        <div className="text-xs text-gray-600">Likes</div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100"
                      >
                        <div className="flex items-center justify-center mb-1">
                          <Share2 className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-lg font-bold text-green-600">{post.stats.shares}</span>
                        </div>
                        <div className="text-xs text-gray-600">Shares</div>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-purple-600 font-semibold text-lg group-hover:text-pink-600 transition-colors"
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      Read Full Article
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50 h-48">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {/* Content-specific visualizations */}
                    {post.category === "Case Studies" && (
                      <div className="w-40 h-24 bg-white rounded-lg shadow-lg p-3">
                        <div className="text-xs font-bold text-gray-800 mb-2">Conversion Rate</div>
                        <div className="flex items-end space-x-1 h-12">
                          <div className="w-3 bg-red-300 rounded-t" style={{ height: "30%" }}></div>
                          <div className="w-3 bg-yellow-400 rounded-t" style={{ height: "50%" }}></div>
                          <div className="w-3 bg-green-500 rounded-t" style={{ height: "100%" }}></div>
                          <div className="w-3 bg-green-600 rounded-t" style={{ height: "80%" }}></div>
                        </div>
                        <div className="text-xs text-green-600 font-bold mt-1">+300% Growth</div>
                      </div>
                    )}

                    {post.category === "Guides" && (
                      <div className="w-40 h-24 bg-white rounded-lg shadow-lg p-3">
                        <div className="text-xs font-bold text-gray-800 mb-2">Setup Progress</div>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <div className="text-xs text-gray-600">Planning ✓</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <div className="text-xs text-gray-600">Setup ✓</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                            <div className="text-xs text-gray-600">Testing...</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {post.category === "Analytics" && (
                      <div className="w-40 h-24 bg-white rounded-lg shadow-lg p-3">
                        <div className="text-xs font-bold text-gray-800 mb-2">ROI Dashboard</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">$2.4M</div>
                            <div className="text-xs text-gray-600">Revenue</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-600">350%</div>
                            <div className="text-xs text-gray-600">ROI</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {(post.category === "Strategy" || post.category === "Design") && (
                      <div className="w-40 h-24 bg-white rounded-lg shadow-lg p-3">
                        <div className="text-xs font-bold text-gray-800 mb-2">{post.category} Flow</div>
                        <div className="flex items-center justify-between">
                          <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-300 mx-1"></div>
                          <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-300 mx-1"></div>
                          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-xs text-center text-gray-600 mt-2">3-Step Process</div>
                      </div>
                    )}
                  </motion.div>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {post.category}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <BookOpen className="h-6 w-6" />
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.stats.views}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-8 h-8 bg-gradient-to-r ${post.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                    >
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </motion.div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{post.author.name}</div>
                      <div className="text-xs text-gray-600">{post.author.role}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <div className="flex items-center space-x-1 text-sm">
                      <Eye className="w-4 h-4 text-indigo-600" />
                      <span className="font-semibold text-indigo-600">{post.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Heart className="w-4 h-4 text-pink-600" />
                      <span className="font-semibold text-pink-600">{post.stats.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Share2 className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-600">{post.stats.shares}</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-purple-600 font-medium text-sm group-hover:text-pink-600 transition-colors"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="relative z-10"
            >
              <h3 className="text-3xl font-bold mb-4">Stay Updated with AI Marketing Insights</h3>
              <p className="text-xl mb-8 opacity-90">
                Get weekly tips, case studies, and industry trends delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="h-5 w-5 ml-2" />
                </motion.button>
              </div>

              <p className="text-sm opacity-75 mt-4">Join 10,000+ marketers already subscribed. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "150+",
                label: "Articles Published",
                icon: <BookOpen className="h-6 w-6" />,
                color: "from-indigo-500 to-purple-500",
              },
              {
                value: "50K+",
                label: "Monthly Readers",
                icon: <Users className="h-6 w-6" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "95%",
                label: "Reader Satisfaction",
                icon: <TrendingUp className="h-6 w-6" />,
                color: "from-pink-500 to-red-500",
              },
              {
                value: "24/7",
                label: "Content Updates",
                icon: <Download className="h-6 w-6" />,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-pointer p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className={`text-white mb-3 flex justify-center p-3 bg-gradient-to-r ${stat.color} rounded-full`}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

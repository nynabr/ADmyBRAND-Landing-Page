"use client"

import { Calendar, Clock, ArrowRight, Sparkles, TrendingUp, Users, Zap, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      id: 1,
      title: "10 SaaS Landing Page Design Trends That Convert in 2024",
      excerpt:
        "Discover the latest design trends that are driving conversions for SaaS businesses. From micro-interactions to AI-powered personalization.",
      author: "Priya Sharma",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Design Trends",
      tags: ["SaaS", "Design", "Conversion"],
      featured: true,
      gradient: "from-pink-500 via-purple-500 to-indigo-600",
      cardGradient: "from-pink-50 via-purple-50 to-indigo-50",
      icon: <TrendingUp className="h-6 w-6" />,
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-xl">
            {/* Trend Chart */}
            <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
              <div className="flex items-end space-x-1 h-16">
                {[40, 60, 45, 80, 65, 90, 75, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${height}%` } : { height: 0 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-gradient-to-t from-pink-400 to-purple-500 rounded-sm flex-1"
                  />
                ))}
              </div>
            </div>
            {/* Design Elements */}
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg"></div>
              <div className="h-8 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-lg"></div>
              <div className="h-8 bg-gradient-to-r from-indigo-300 to-sky-300 rounded-lg"></div>
            </div>
          </div>
          {/* Floating Trend Icon */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-xl"
          >
            <TrendingUp className="h-5 w-5 text-pink-500" />
          </motion.div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Case Study: How We Increased CloudSync's Conversions by 85%",
      excerpt:
        "A detailed breakdown of our design process and optimization strategies that led to remarkable results for a cloud storage platform.",
      author: "Rajesh Kumar",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Case Study",
      tags: ["Case Study", "Optimization", "Results"],
      featured: false,
      gradient: "from-sky-500 via-blue-500 to-indigo-600",
      cardGradient: "from-sky-50 via-blue-50 to-indigo-50",
      icon: <Zap className="h-6 w-6" />,
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-6 shadow-xl">
            {/* Success Metrics */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-600">Conversion Rate</span>
                <span className="text-green-600 font-bold text-lg">+85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="bg-gradient-to-r from-sky-400 to-blue-500 h-3 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It's Critical for SaaS Success",
      excerpt:
        "Learn why mobile-first design is no longer optional for SaaS companies and how to implement it effectively.",
      author: "Anita Patel",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Mobile Design",
      tags: ["Mobile", "UX", "SaaS"],
      featured: false,
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      cardGradient: "from-emerald-50 via-teal-50 to-cyan-50",
      icon: <Users className="h-6 w-6" />,
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 shadow-xl">
            {/* Mobile Devices */}
            <div className="flex justify-center space-x-3">
              <div className="w-12 h-20 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-2xl p-2 shadow-lg">
                <div className="w-full h-full bg-white rounded-lg p-1">
                  <div className="w-full h-3 bg-emerald-200 rounded mb-1"></div>
                  <div className="w-full h-2 bg-emerald-100 rounded mb-1"></div>
                  <div className="w-3/4 h-2 bg-emerald-100 rounded"></div>
                </div>
              </div>
              <div className="w-16 h-24 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-2xl p-2 shadow-lg">
                <div className="w-full h-full bg-white rounded-lg p-1">
                  <div className="w-full h-4 bg-teal-200 rounded mb-1"></div>
                  <div className="w-full h-2 bg-teal-100 rounded mb-1"></div>
                  <div className="w-2/3 h-2 bg-teal-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "The Psychology of Color in SaaS Landing Pages",
      excerpt: "Understanding how color choices impact user behavior and conversion rates in SaaS applications.",
      author: "Vikram Singh",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Psychology",
      tags: ["Psychology", "Color", "Conversion"],
      featured: false,
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      cardGradient: "from-purple-50 via-pink-50 to-rose-50",
      icon: <Heart className="h-6 w-6" />,
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-xl">
            {/* Color Palette */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {["bg-purple-400", "bg-pink-400", "bg-rose-400", "bg-indigo-400"].map((color, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  className={`h-8 ${color} rounded-lg shadow-lg`}
                />
              ))}
            </div>
            {/* Psychology Chart */}
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <div className="text-xs text-gray-600 mb-2">Emotional Impact</div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  <div className="h-1.5 bg-purple-200 rounded flex-1"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                  <div className="h-1.5 bg-pink-200 rounded flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "A/B Testing Your SaaS Landing Page: Complete Guide",
      excerpt: "Step-by-step guide to setting up and running effective A/B tests that drive meaningful improvements.",
      author: "Meera Joshi",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      category: "Testing",
      tags: ["A/B Testing", "Analytics", "Optimization"],
      featured: false,
      gradient: "from-indigo-500 via-purple-500 to-pink-600",
      cardGradient: "from-indigo-50 via-purple-50 to-pink-50",
      icon: <Star className="h-6 w-6" />,
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 shadow-xl">
            {/* A/B Test Visualization */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-600 mb-2">Version A</div>
                <div className="h-4 bg-indigo-200 rounded mb-1"></div>
                <div className="h-2 bg-indigo-100 rounded"></div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-600 mb-2">Version B</div>
                <div className="h-4 bg-purple-200 rounded mb-1"></div>
                <div className="h-2 bg-purple-100 rounded"></div>
              </div>
            </div>
            {/* Results */}
            <div className="mt-3 bg-white rounded-lg p-2 shadow-lg">
              <div className="text-xs text-green-600 font-bold text-center">Winner: +23%</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "SEO Best Practices for SaaS Landing Pages in 2024",
      excerpt:
        "Latest SEO strategies specifically tailored for SaaS businesses to improve organic visibility and traffic.",
      author: "Arjun Mehta",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "SEO",
      tags: ["SEO", "Traffic", "Organic"],
      featured: false,
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      cardGradient: "from-emerald-50 via-green-50 to-teal-50",
      icon: <TrendingUp className="h-6 w-6" />,
      illustration: (
        <div className="relative">
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-6 shadow-xl">
            {/* SEO Metrics */}
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Organic Traffic</span>
                <span className="text-green-600 font-bold text-sm">↗ +156%</span>
              </div>
              <div className="flex items-end space-x-1 h-8">
                {[30, 45, 60, 75, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-emerald-400 to-green-500 rounded-sm flex-1"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-purple-50 relative overflow-hidden"
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
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full blur-3xl"
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
            Design Insights & Tips
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            SaaS Design{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 via-sky-600 to-cyan-600 bg-[length:300%_auto]"
            >
              Insights & Tips
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Stay ahead with the latest SaaS design trends, case studies, and actionable insights from our expert team.
          </motion.p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group border border-white/20">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Illustration */}
                <div className="relative overflow-hidden p-8">
                  <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }} className="relative">
                    {featuredPost.illustration}
                  </motion.div>

                  {/* Featured Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-6 left-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-2xl"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2"
                    >
                      <Star className="h-4 w-4 fill-current" />
                    </motion.div>
                    Featured Article
                  </motion.div>

                  {/* Category Badge */}
                  <div
                    className={`absolute bottom-6 left-6 bg-gradient-to-r ${featuredPost.gradient} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
                  >
                    {featuredPost.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-gradient-to-r ${featuredPost.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}
                    >
                      {featuredPost.icon}
                    </motion.div>
                    <div className="text-sm text-gray-600">
                      <div className="font-medium">{featuredPost.author}</div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 bg-gradient-to-r ${featuredPost.cardGradient} text-purple-700 rounded-full text-sm font-medium border border-white/20 shadow-sm`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${featuredPost.gradient} font-semibold text-lg`}
                  >
                    Read Full Article
                    <ArrowRight className="h-5 w-5 ml-2 text-purple-600" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {regularPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-white/20"
            >
              {/* Post Illustration */}
              <div className="relative overflow-hidden p-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  {post.illustration}
                </motion.div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}
                >
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Author & Meta */}
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 bg-gradient-to-r ${post.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}
                  >
                    {post.icon}
                  </motion.div>
                  <div className="text-xs text-gray-600">
                    <div className="font-medium">{post.author}</div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 bg-gradient-to-r ${post.cardGradient} text-gray-600 rounded-full text-xs border border-white/20`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${post.gradient} font-medium text-sm`}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 text-purple-600" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-pink-600 via-purple-600 to-sky-600 hover:from-pink-700 hover:via-purple-700 hover:to-sky-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-2xl shadow-purple-500/25 group">
              <Sparkles className="h-5 w-5 mr-2" />
              View All Articles
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

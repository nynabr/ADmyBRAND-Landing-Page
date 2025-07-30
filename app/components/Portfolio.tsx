"use client"

import { ExternalLink, Star, TrendingUp, Users, Zap, ArrowRight, Play, Award, Target, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("all")

  const portfolioItems = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "SaaS",
      description: "Complete marketing automation suite that increased lead generation by 400%",
      image: "/placeholder.svg?height=300&width=400&text=TechFlow+Dashboard+Analytics",
      results: {
        metric1: { label: "Lead Increase", value: "400%" },
        metric2: { label: "Conversion Rate", value: "12.5%" },
        metric3: { label: "ROI", value: "350%" },
      },
      tags: ["AI Content", "Analytics", "Automation"],
      featured: true,
      color: "from-blue-500 to-cyan-500",
      client: "Marcus Rodriguez, CEO",
      industry: "B2B SaaS",
      duration: "6 months",
    },
    {
      id: 2,
      title: "EcoGreen Energy",
      category: "E-commerce",
      description: "Sustainable energy marketplace with AI-powered product recommendations",
      image: "/placeholder.svg?height=300&width=400&text=EcoGreen+Marketplace+Dashboard",
      results: {
        metric1: { label: "Sales Growth", value: "280%" },
        metric2: { label: "Customer Retention", value: "89%" },
        metric3: { label: "Revenue", value: "$2.4M" },
      },
      tags: ["E-commerce", "Recommendations", "SEO"],
      featured: false,
      color: "from-green-500 to-emerald-500",
      client: "Sarah Chen, CMO",
      industry: "Clean Energy",
      duration: "8 months",
    },
    {
      id: 3,
      title: "FinanceFlow Pro",
      category: "Fintech",
      description: "AI-driven financial planning platform with personalized investment strategies",
      image: "/placeholder.svg?height=300&width=400&text=FinanceFlow+Investment+Platform",
      results: {
        metric1: { label: "User Growth", value: "500%" },
        metric2: { label: "Engagement", value: "94%" },
        metric3: { label: "AUM", value: "$50M" },
      },
      tags: ["Fintech", "AI Analytics", "Mobile"],
      featured: false,
      color: "from-purple-500 to-pink-500",
      client: "David Park, CTO",
      industry: "Financial Services",
      duration: "12 months",
    },
    {
      id: 4,
      title: "HealthTech Innovations",
      category: "Healthcare",
      description: "Telemedicine platform with AI symptom checker and appointment scheduling",
      image: "/placeholder.svg?height=300&width=400&text=HealthTech+Telemedicine+App",
      results: {
        metric1: { label: "Patient Satisfaction", value: "98%" },
        metric2: { label: "Consultation Time", value: "-40%" },
        metric3: { label: "Cost Savings", value: "$1.2M" },
      },
      tags: ["Healthcare", "AI Diagnostics", "Telemedicine"],
      featured: false,
      color: "from-red-500 to-orange-500",
      client: "Dr. Emily Watson, CMO",
      industry: "Healthcare",
      duration: "10 months",
    },
    {
      id: 5,
      title: "EduLearn Academy",
      category: "Education",
      description: "Personalized learning platform with AI-powered curriculum adaptation",
      image: "/placeholder.svg?height=300&width=400&text=EduLearn+Learning+Platform",
      results: {
        metric1: { label: "Learning Efficiency", value: "65%" },
        metric2: { label: "Student Retention", value: "92%" },
        metric3: { label: "Course Completion", value: "87%" },
      },
      tags: ["Education", "Personalization", "Analytics"],
      featured: false,
      color: "from-indigo-500 to-blue-500",
      client: "Prof. Michael Torres, Dean",
      industry: "Education Technology",
      duration: "9 months",
    },
    {
      id: 6,
      title: "RetailMax Chain",
      category: "Retail",
      description: "Omnichannel retail experience with AI inventory management and customer insights",
      image: "/placeholder.svg?height=300&width=400&text=RetailMax+Inventory+System",
      results: {
        metric1: { label: "Inventory Efficiency", value: "45%" },
        metric2: { label: "Customer Satisfaction", value: "96%" },
        metric3: { label: "Profit Margin", value: "23%" },
      },
      tags: ["Retail", "Inventory AI", "Customer Analytics"],
      featured: false,
      color: "from-yellow-500 to-orange-500",
      client: "Lisa Thompson, VP Marketing",
      industry: "Retail Chain",
      duration: "7 months",
    },
  ]

  const categories = ["all", "SaaS", "E-commerce", "Fintech", "Healthcare", "Education", "Retail"]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

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
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 relative overflow-hidden"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            className={`absolute w-4 h-4 rounded-full ${
              i % 3 === 0 ? "bg-pink-400" : i % 3 === 1 ? "bg-purple-400" : "bg-cyan-400"
            } opacity-60`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <Award className="w-5 h-5 mr-2 text-pink-600" />
            Success Stories
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="ml-2"
            >
              <Star className="w-4 h-4 text-yellow-500" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-[length:200%_auto]"
            >
              Portfolio
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable growth with AI-powered marketing
            solutions that deliver measurable results.
          </p>
        </motion.div>

        {/* Filter Tabs */}
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
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/25"
                  : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-purple-600 hover:bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project */}
        {filteredItems
          .filter((item) => item.featured)
          .map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-20"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group border border-purple-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-64 lg:h-full flex items-center justify-center relative"
                    >
                      {/* Dashboard Mockup */}
                      <div className="w-80 h-48 bg-white rounded-lg shadow-xl p-4 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-3/4"></div>
                          <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded w-1/2"></div>
                          <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded w-2/3"></div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="h-8 bg-gradient-to-t from-purple-200 to-purple-400 rounded"></div>
                          <div className="h-12 bg-gradient-to-t from-pink-200 to-pink-400 rounded"></div>
                          <div className="h-6 bg-gradient-to-t from-indigo-200 to-indigo-400 rounded"></div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Featured Project
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </motion.div>

                    {/* Floating Success Indicators */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                    >
                      +400% Growth
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                      <div className="flex space-x-2">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{item.description}</p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4 mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                        {item.client.split(" ")[0][0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.client}</div>
                        <div className="text-sm text-gray-600">
                          {item.industry} • {item.duration}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.values(item.results).map((result, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                            className={`text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}
                          >
                            {result.value}
                          </motion.div>
                          <div className="text-xs text-gray-600 font-medium">{result.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-purple-600 font-semibold text-lg group-hover:text-pink-600 transition-colors"
                    >
                      <Target className="h-5 w-5 mr-2" />
                      View Full Case Study
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems
            .filter((item) => !item.featured)
            .map((item, index) => (
              <motion.div
                key={item.id}
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
                    {/* Mini Dashboard */}
                    <div className="w-40 h-24 bg-white rounded-lg shadow-lg p-2 transform group-hover:rotate-3 transition-transform duration-300">
                      <div className="flex space-x-1 mb-2">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className={`h-1 bg-gradient-to-r ${item.color} rounded w-3/4`}></div>
                        <div className={`h-1 bg-gradient-to-r ${item.color} rounded w-1/2 opacity-70`}></div>
                        <div className={`h-1 bg-gradient-to-r ${item.color} rounded w-2/3 opacity-50`}></div>
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-1">
                        <div className={`h-3 bg-gradient-to-t ${item.color} rounded opacity-80`}></div>
                        <div className={`h-4 bg-gradient-to-t ${item.color} rounded`}></div>
                        <div className={`h-2 bg-gradient-to-t ${item.color} rounded opacity-60`}></div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {item.category}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </motion.div>

                  {/* Success Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                  >
                    Success
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

                  {/* Client */}
                  <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                    >
                      {item.client.split(" ")[0][0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{item.client}</div>
                      <div className="text-xs text-gray-600">{item.industry}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.values(item.results).map((result, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-2 bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg"
                      >
                        <div
                          className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                        >
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-purple-600 font-medium text-sm group-hover:text-pink-600 transition-colors"
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    View Case Study
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "50+",
                label: "Projects Completed",
                icon: <TrendingUp className="h-6 w-6" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "98%",
                label: "Client Satisfaction",
                icon: <Star className="h-6 w-6" />,
                color: "from-pink-500 to-red-500",
              },
              {
                value: "300%",
                label: "Average ROI Increase",
                icon: <Zap className="h-6 w-6" />,
                color: "from-indigo-500 to-purple-500",
              },
              {
                value: "24/7",
                label: "Support Available",
                icon: <Users className="h-6 w-6" />,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-pointer p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className={`text-purple-600 mb-3 flex justify-center p-3 bg-gradient-to-r ${stat.color} rounded-full text-white`}
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

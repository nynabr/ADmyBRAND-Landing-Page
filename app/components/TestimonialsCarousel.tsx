"use client"

import { Star, Quote, ArrowLeft, ArrowRight, Play, TrendingUp, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function TestimonialsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      title: "CEO",
      company: "TechFlow Solutions",
      avatar: "/placeholder.svg?height=80&width=80&text=MR",
      rating: 5,
      content:
        "ADmyBRAND AI Suite completely transformed our marketing strategy. We saw a 400% increase in lead generation within the first month. The AI content creation is phenomenal - it's like having a team of expert copywriters working 24/7!",
      results: {
        metric1: { label: "Lead Increase", value: "400%" },
        metric2: { label: "ROI", value: "350%" },
        metric3: { label: "Time Saved", value: "15hrs/week" },
      },
      industry: "SaaS",
      companySize: "50-100 employees",
      videoTestimonial: true,
      featured: true,
      color: "from-blue-500 to-cyan-600",
      location: "San Francisco, CA",
      companyLogo: "🚀",
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "EcoGreen Energy",
      avatar: "/placeholder.svg?height=80&width=80&text=SC",
      rating: 5,
      content:
        "The analytics dashboard gives us insights we never had before. Our conversion rates improved by 280% and we're making data-driven decisions every day. The AI recommendations are spot-on and have saved us thousands in ad spend.",
      results: {
        metric1: { label: "Conversions", value: "280%" },
        metric2: { label: "Revenue", value: "$2.4M" },
        metric3: { label: "Ad Efficiency", value: "65%" },
      },
      industry: "E-commerce",
      companySize: "100-500 employees",
      videoTestimonial: false,
      featured: true,
      color: "from-green-500 to-emerald-600",
      location: "Austin, TX",
      companyLogo: "🌱",
    },
    {
      id: 3,
      name: "David Park",
      title: "Founder & CEO",
      company: "FinanceFlow Pro",
      avatar: "/placeholder.svg?height=80&width=80&text=DP",
      rating: 5,
      content:
        "As a fintech startup, we needed marketing that could scale with us. ADmyBRAND AI delivered beyond expectations. Our user acquisition cost dropped by 60% while our user growth exploded by 500%. It's been instrumental to our success.",
      results: {
        metric1: { label: "CAC Reduction", value: "60%" },
        metric2: { label: "User Growth", value: "500%" },
        metric3: { label: "Retention", value: "94%" },
      },
      industry: "Fintech",
      companySize: "10-50 employees",
      videoTestimonial: true,
      featured: false,
      color: "from-purple-500 to-pink-600",
      location: "New York, NY",
      companyLogo: "💰",
    },
    {
      id: 4,
      name: "Dr. Emily Watson",
      title: "Chief Marketing Officer",
      company: "HealthTech Innovations",
      avatar: "/placeholder.svg?height=80&width=80&text=EW",
      rating: 5,
      content:
        "The AI chatbot integration helped us provide 24/7 patient support while reducing our support costs by 40%. It's been a game-changer for our healthcare platform. Patient satisfaction scores have never been higher at 98%.",
      results: {
        metric1: { label: "Support Cost", value: "-40%" },
        metric2: { label: "Patient Satisfaction", value: "98%" },
        metric3: { label: "Response Time", value: "< 30sec" },
      },
      industry: "Healthcare",
      companySize: "200-500 employees",
      videoTestimonial: false,
      featured: false,
      color: "from-red-500 to-orange-600",
      location: "Boston, MA",
      companyLogo: "🏥",
    },
    {
      id: 5,
      name: "James Thompson",
      title: "VP of Marketing",
      company: "EduLearn Academy",
      avatar: "/placeholder.svg?height=80&width=80&text=JT",
      rating: 5,
      content:
        "The multi-channel automation saved us countless hours while improving our course enrollment by 320%. The ROI has been incredible from day one. We're now able to personalize learning paths for thousands of students automatically.",
      results: {
        metric1: { label: "Enrollment", value: "320%" },
        metric2: { label: "Time Saved", value: "25hrs/week" },
        metric3: { label: "ROI", value: "450%" },
      },
      industry: "Education",
      companySize: "50-200 employees",
      videoTestimonial: true,
      featured: false,
      color: "from-indigo-500 to-blue-600",
      location: "Seattle, WA",
      companyLogo: "📚",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2 text-pink-600 fill-current" />
            Customer Success Stories
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-[length:200%_auto]"
            >
              Industry Leaders
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries are achieving remarkable results with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className={`w-16 h-16 bg-gradient-to-r ${currentTestimonial.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Quote className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                    <span className="ml-2 text-gray-600 font-medium">5.0 out of 5</span>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.values(currentTestimonial.results).map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-white/20"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                          className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentTestimonial.color} mb-1`}
                        >
                          {result.value}
                        </motion.div>
                        <div className="text-xs text-gray-600 font-medium">{result.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${currentTestimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {currentTestimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="h-4 w-4 text-white" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-gray-600">
                        {currentTestimonial.title} at {currentTestimonial.company}
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-purple-600 font-medium">{currentTestimonial.industry}</span>
                        <span className="text-sm text-gray-500">{currentTestimonial.companySize}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">{currentTestimonial.location}</span>
                        <span className="text-lg">{currentTestimonial.companyLogo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 p-8 lg:p-12 flex items-center justify-center">
                  {currentTestimonial.videoTestimonial ? (
                    <div className="relative">
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="relative"
                      >
                        {/* Video Thumbnail with Animated Person */}
                        <div className="relative w-80 h-60 bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden">
                          {/* Animated Person Silhouette */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                              className="relative"
                            >
                              {/* Person Avatar */}
                              <div
                                className={`w-24 h-24 bg-gradient-to-r ${currentTestimonial.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl`}
                              >
                                {currentTestimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>

                              {/* Speaking Animation */}
                              <motion.div
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                }}
                                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white/30 rounded-full"
                              />
                            </motion.div>
                          </div>

                          {/* Video UI Elements */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                              <div className="flex items-center justify-between text-white text-sm">
                                <span>2:34 / 3:42</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                  <span>LIVE</span>
                                </div>
                              </div>
                              <div className="mt-1 bg-white/20 rounded-full h-1">
                                <motion.div
                                  animate={{ width: ["0%", "70%"] }}
                                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-full rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Play Button */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
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
                            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          >
                            <Play className="h-8 w-8 text-white ml-1" />
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Success Badge */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                          <span className="font-bold text-green-600">Verified Results</span>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <motion.div
                        animate={{
                          y: [-5, 5, -5],
                          rotate: [0, 2, -2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="relative mb-6"
                      >
                        {/* Animated Person Photo */}
                        <div
                          className={`w-32 h-32 bg-gradient-to-r ${currentTestimonial.color} rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl mx-auto border-4 border-white`}
                        >
                          {currentTestimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        {/* Floating Elements Around Person */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.5, 1, 0.5],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.3,
                            }}
                            className="absolute w-3 h-3 bg-white rounded-full"
                            style={{
                              left: `${20 + i * 60}%`,
                              top: `${30 + Math.sin(i) * 40}%`,
                            }}
                          />
                        ))}

                        {/* Verification Badge */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Award className="h-5 w-5 text-white" />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="bg-white rounded-2xl p-6 shadow-xl"
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-2">
                          <span>{currentTestimonial.companyLogo}</span>
                          <span>{currentTestimonial.company}</span>
                        </h3>
                        <p className="text-gray-600 mb-4">{currentTestimonial.industry} Industry</p>
                        <div className="flex items-center justify-center space-x-2">
                          <Users className="h-5 w-5 text-purple-600" />
                          <span className="text-sm text-gray-700">{currentTestimonial.companySize}</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">{currentTestimonial.location}</div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center space-x-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </motion.button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
          >
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </motion.button>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                index === currentIndex ? "border-purple-300 bg-white/80" : "border-white/20"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <span>{testimonial.industry}</span>
                    <span>•</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "10K+",
                label: "Happy Customers",
                icon: <Users className="h-6 w-6" />,
                color: "from-pink-500 to-rose-600",
              },
              {
                value: "98%",
                label: "Satisfaction Rate",
                icon: <Star className="h-6 w-6" />,
                color: "from-purple-500 to-indigo-600",
              },
              {
                value: "350%",
                label: "Avg. ROI Increase",
                icon: <TrendingUp className="h-6 w-6" />,
                color: "from-blue-500 to-cyan-600",
              },
              {
                value: "24/7",
                label: "AI Support",
                icon: <Award className="h-6 w-6" />,
                color: "from-green-500 to-emerald-600",
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
                  className={`text-purple-600 mb-3 flex justify-center bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl items-center mx-auto text-white`}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg">
              Join Our Success Stories
            </Button>
          </motion.div>
          <p className="text-gray-500 text-sm mt-3">Join 10,000+ businesses already growing with ADmyBRAND AI</p>
        </motion.div>
      </div>
    </section>
  )
}

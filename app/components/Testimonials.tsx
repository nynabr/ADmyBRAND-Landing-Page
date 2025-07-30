"use client"

import { Star, Quote, Heart, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonial = {
    name: "Priya Kapoor",
    role: "CEO, TechFlow Solutions",
    rating: 5,
    quote:
      "SaaSVisage exceeded our expectations in every way. Their team delivered a stunning, responsive landing page that not only looks incredible but also converted 40% better than our previous design. The attention to detail, mobile optimization, and SEO implementation were outstanding. Highly recommend their services!",
    company: "TechFlow Solutions",
    results: "40% increase in conversions",
    avatar: {
      bg: "from-pink-400 to-rose-500",
      initials: "PK",
    },
  }

  const additionalTestimonials = [
    {
      name: "Rajesh Sharma",
      role: "Founder, DataSync Pro",
      rating: 5,
      quote: "Professional team with exceptional design skills. Our new landing page is converting amazingly well!",
      avatar: { bg: "from-blue-400 to-indigo-500", initials: "RS" },
    },
    {
      name: "Anita Patel",
      role: "Marketing Director, CloudTech",
      rating: 5,
      quote: "The mobile optimization and SEO results have been phenomenal. Traffic increased by 60% in just 2 months.",
      avatar: { bg: "from-purple-400 to-pink-500", initials: "AP" },
    },
    {
      name: "Vikram Singh",
      role: "CTO, InnovateLabs",
      rating: 5,
      quote: "SaaSVisage transformed our online presence completely. The design is modern, fast, and user-friendly.",
      avatar: { bg: "from-emerald-400 to-teal-500", initials: "VS" },
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden"
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-medium mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mr-2"
            >
              <Heart className="w-4 h-4 text-pink-600 fill-current" />
            </motion.div>
            Client Love
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-[length:200%_auto]"
            >
              Clients Say
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses who trusted SaaSVisage to transform their online presence.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 transform translate-x-32 -translate-y-32" />

            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-8 right-8 opacity-20"
            >
              <Quote className="h-20 w-20 text-purple-600" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center md:text-left"
              >
                {/* Avatar */}
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }} className="mb-4">
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${testimonial.avatar.bg} rounded-full mx-auto md:mx-0 shadow-2xl flex items-center justify-center text-white font-bold text-2xl`}
                  >
                    {testimonial.avatar.initials}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{testimonial.role}</p>
                <p className="text-sm text-gray-500 mb-4">{testimonial.company}</p>

                {/* Rating */}
                <div className="flex justify-center md:justify-start items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Results Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium shadow-lg"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  {testimonial.results}
                </motion.div>
              </motion.div>

              {/* Testimonial Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="md:col-span-2"
              >
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {additionalTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.avatar.bg} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-lg`}
                >
                  {testimonial.avatar.initials}
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-purple-600">{testimonial.role}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.2 }}>
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm leading-relaxed italic">"{testimonial.quote}"</blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered", color: "from-pink-500 to-rose-600" },
              { value: "98%", label: "Client Satisfaction", color: "from-purple-500 to-indigo-600" },
              { value: "45%", label: "Avg. Conversion Increase", color: "from-indigo-500 to-cyan-600" },
              { value: "24/7", label: "Support Available", color: "from-emerald-500 to-teal-600" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-pointer p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
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

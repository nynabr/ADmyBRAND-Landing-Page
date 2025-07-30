"use client"

import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started with AI marketing",
      features: [
        "AI Content Generation (1K credits/month)",
        "Basic Analytics Dashboard",
        "Email Campaign Automation",
        "Social Media Scheduling",
        "2 Team Members",
        "Email Support",
        "Basic Templates Library",
      ],
      popular: false,
      buttonText: "Start Free Trial",
      buttonStyle:
        "border-2 border-purple-300 hover:border-purple-600 text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600",
      icon: <Zap className="h-6 w-6" />,
      bgGradient: "from-blue-50 to-indigo-50",
      iconBg: "from-blue-400 to-indigo-500",
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Best for growing businesses with advanced AI needs",
      features: [
        "AI Content Generation (10K credits/month)",
        "Advanced Analytics & Insights",
        "Multi-Channel Automation",
        "AI Chatbot Integration",
        "SEO Optimization Engine",
        "10 Team Members",
        "Priority Support",
        "Custom Templates",
        "A/B Testing Suite",
      ],
      popular: true,
      buttonText: "Most Popular",
      buttonStyle:
        "bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white hover:shadow-2xl shadow-purple-500/25",
      icon: <Star className="h-6 w-6" />,
      bgGradient: "from-pink-50 via-purple-50 to-indigo-50",
      iconBg: "from-pink-500 via-purple-500 to-indigo-600",
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with custom requirements",
      features: [
        "Unlimited AI Content Generation",
        "Custom Analytics Dashboard",
        "Advanced Automation Workflows",
        "White-label AI Chatbots",
        "Enterprise SEO Suite",
        "Unlimited Team Members",
        "24/7 Dedicated Support",
        "Custom Integrations",
        "Advanced Security & Compliance",
        "Custom AI Model Training",
        "API Access",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle:
        "border-2 border-purple-300 hover:border-purple-600 text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600",
      icon: <Crown className="h-6 w-6" />,
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "from-purple-500 to-pink-600",
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

  const cardVariants = {
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
      id="pricing"
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
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="mr-2"
            >
              <Rocket className="w-4 h-4 text-pink-600" />
            </motion.div>
            Pricing Plans
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-[length:200%_auto]"
            >
              Perfect Plan
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Start free and scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl shadow-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                plan.popular
                  ? "border-purple-500 ring-4 ring-purple-100 shadow-purple-500/25 shadow-2xl"
                  : "border-white/20 hover:border-purple-300"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-2xl">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2"
                    >
                      {plan.icon}
                    </motion.div>
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

              <div className="relative p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl mb-4 bg-gradient-to-r ${plan.iconBg} text-white shadow-lg`}
                  >
                    {plan.icon}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-2xl font-bold text-gray-900 mb-2"
                  >
                    {plan.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="text-gray-600 mb-4"
                  >
                    {plan.description}
                  </motion.p>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="flex items-center justify-center"
                  >
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </motion.div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 + 0.7 }}
                      className="flex items-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 + 0.8 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="flex-shrink-0"
                      >
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                      </motion.div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Need a custom solution? We{"'"}d love to discuss your requirements.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-lg"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

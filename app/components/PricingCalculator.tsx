"use client"

import { Check, Star, Zap, Crown, Calculator, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function PricingCalculator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [teamSize, setTeamSize] = useState(5)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const basePlans = [
    {
      name: "Starter",
      basePrice: { monthly: 49, annual: 39 },
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
      color: "blue",
    },
    {
      name: "Professional",
      basePrice: { monthly: 149, annual: 119 },
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
      color: "purple",
    },
    {
      name: "Enterprise",
      basePrice: { monthly: 399, annual: 319 },
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
      color: "purple",
    },
  ]

  const addOnFeatures = [
    {
      id: "extra-credits",
      name: "Extra AI Credits",
      description: "Additional 5K AI content generation credits",
      price: { monthly: 29, annual: 23 },
    },
    {
      id: "advanced-analytics",
      name: "Advanced Analytics",
      description: "Custom reports and advanced data visualization",
      price: { monthly: 49, annual: 39 },
    },
    {
      id: "white-label",
      name: "White Label Solution",
      description: "Remove ADmyBRAND branding and use your own",
      price: { monthly: 99, annual: 79 },
    },
    {
      id: "priority-support",
      name: "Priority Support",
      description: "24/7 phone and chat support with 1-hour response",
      price: { monthly: 39, annual: 31 },
    },
  ]

  const calculatePrice = (plan: (typeof basePlans)[0]) => {
    let basePrice = plan.basePrice[billingCycle]

    // Team size multiplier (for Professional and Enterprise)
    if (plan.name === "Professional" && teamSize > 10) {
      basePrice += (teamSize - 10) * (billingCycle === "monthly" ? 15 : 12)
    } else if (plan.name === "Enterprise" && teamSize > 50) {
      basePrice += (teamSize - 50) * (billingCycle === "monthly" ? 10 : 8)
    }

    // Add-on features
    const addOnCost = selectedFeatures.reduce((total, featureId) => {
      const feature = addOnFeatures.find((f) => f.id === featureId)
      return total + (feature ? feature.price[billingCycle] : 0)
    }, 0)

    return basePrice + addOnCost
  }

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  const annualSavings = (plan: (typeof basePlans)[0]) => {
    const monthlyTotal = calculatePrice({ ...plan, basePrice: { ...plan.basePrice, annual: plan.basePrice.monthly } })
    const annualTotal = calculatePrice(plan)
    return Math.round(((monthlyTotal * 12 - annualTotal * 12) / (monthlyTotal * 12)) * 100)
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
            <Calculator className="w-4 h-4 mr-2 text-pink-600" />
            Interactive Pricing Calculator
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find Your{" "}
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
            Customize your plan based on team size and features. See real-time pricing with our interactive calculator.
          </p>
        </motion.div>

        {/* Calculator Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-12 shadow-lg border border-white/20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Billing Cycle Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Billing Cycle</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    billingCycle === "monthly"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    billingCycle === "annual"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            {/* Team Size Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Team Size: <span className="text-purple-600 font-bold">{teamSize} members</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>50</span>
                <span>100+</span>
              </div>
            </div>

            {/* Add-on Features */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Add-on Features</label>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {addOnFeatures.map((feature) => (
                  <label key={feature.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature.id)}
                      onChange={() => toggleFeature(feature.id)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{feature.name}</span>
                    <span className="text-xs text-purple-600 font-medium">
                      +${feature.price[billingCycle]}/{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {basePlans.map((plan, index) => {
            const finalPrice = calculatePrice(plan)
            const savings = billingCycle === "annual" ? annualSavings(plan) : 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      <Sparkles className="h-4 w-4 mr-2" />
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

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>

                    {/* Dynamic Pricing */}
                    <div className="flex items-center justify-center mb-2">
                      <span
                        className={`text-4xl font-bold ${
                          plan.popular
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
                            : "text-gray-900"
                        }`}
                      >
                        ${finalPrice}
                      </span>
                      <span className="text-gray-500 ml-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>

                    {/* Savings Badge */}
                    {billingCycle === "annual" && savings > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        💰 Save {savings}% annually
                      </motion.div>
                    )}
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
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
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
            )
          })}
        </div>

        {/* Calculator Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Pricing Calculator Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Team Size:</span>
                <span className="font-bold text-purple-600 ml-2">{teamSize} members</span>
              </div>
              <div>
                <span className="text-gray-600">Billing:</span>
                <span className="font-bold text-purple-600 ml-2 capitalize">{billingCycle}</span>
              </div>
              <div>
                <span className="text-gray-600">Add-ons:</span>
                <span className="font-bold text-purple-600 ml-2">{selectedFeatures.length} selected</span>
              </div>
              <div>
                <span className="text-gray-600">Best Value:</span>
                <span className="font-bold text-green-600 ml-2">
                  {billingCycle === "annual" ? "Annual saves 20%" : "Try monthly first"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  )
}

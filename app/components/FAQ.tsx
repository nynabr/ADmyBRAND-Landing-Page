"use client"

import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it take to complete a landing page project?",
      answer:
        "Typically, our projects take 2-4 weeks depending on the complexity and plan chosen. Basic plans are completed in 2 weeks, Standard plans in 3 weeks, and Premium plans in 3-4 weeks. We provide regular updates throughout the process and ensure timely delivery without compromising quality.",
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer:
        "Yes! All our plans include post-launch support. Basic plans include 1 month of support, Standard plans include 3 months, and Premium plans include 6 months of premium support. This covers bug fixes, minor updates, and technical assistance to ensure your landing page performs optimally.",
    },
    {
      question: "Can you help improve our existing website's conversion rates?",
      answer:
        "We specialize in conversion rate optimization (CRO). We can audit your existing website, identify improvement opportunities, implement A/B testing, and redesign elements to boost conversions. Our clients typically see 30-50% improvement in conversion rates after our optimization.",
    },
    {
      question: "What makes SaaSVisage different from other design agencies?",
      answer:
        "We specialize exclusively in SaaS businesses, understanding the unique challenges and requirements of the industry. Our team combines design expertise with technical knowledge of SaaS metrics, user behavior, and conversion optimization. We also provide comprehensive SEO and mobile optimization as standard, not as add-ons.",
    },
    {
      question: "Do you offer custom integrations with our existing tools and platforms?",
      answer:
        "Yes, we can integrate your landing page with various tools including CRM systems, email marketing platforms, analytics tools, chatbots, and payment gateways. Our Premium plan includes advanced integrations, while Standard and Basic plans cover essential integrations like contact forms and basic analytics.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and what makes SaaSVisage the right choice for
            your business.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "#fafafa" }}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-purple-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-purple-600" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions? We{"'"}re here to help!</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:shadow-lg"
          >
            Contact Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

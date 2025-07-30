"use client"

import { Palette, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const footerLinks = {
    services: [
      { name: "Landing Page Design", href: "#" },
      { name: "Mobile Optimization", href: "#" },
      { name: "SEO Services", href: "#" },
      { name: "Chatbot Integration", href: "#" },
      { name: "A/B Testing", href: "#" },
    ],
    company: [
      { name: "About SaaSVisage", href: "#" },
      { name: "Our Process", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Live Chat", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-6 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-6 cursor-pointer">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg"
              >
                <Palette className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SaaSVisage
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              Specializing in stunning, responsive, animated landing pages for SaaS businesses. We help companies
              streamline customer interaction and drive conversions through visually engaging interfaces.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { icon: <Mail className="h-5 w-5 mr-3" />, text: "hello@saasvisage.com" },
                { icon: <Phone className="h-5 w-5 mr-3" />, text: "+91 98765 43210" },
                { icon: <MapPin className="h-5 w-5 mr-3" />, text: "Mumbai, India" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-400 cursor-pointer hover:text-purple-400 transition-colors"
                >
                  {contact.icon}
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.4 }}
                className="font-semibold text-lg mb-4 capitalize text-white"
              >
                {category}
              </motion.h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + linkIndex * 0.05 + 0.5 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#a855f7" }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} SaaSVisage. All rights reserved. Made with ❤️ in India.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

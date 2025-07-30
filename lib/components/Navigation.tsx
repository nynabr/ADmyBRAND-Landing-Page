"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface NavigationItem {
  label: string
  href?: string
  onClick?: () => void
  children?: NavigationItem[]
  icon?: React.ReactNode
  badge?: string
}

export interface NavigationProps {
  items: NavigationItem[]
  logo?: React.ReactNode
  actions?: React.ReactNode
  variant?: "horizontal" | "vertical"
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({ items, logo, actions, variant = "horizontal", className }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  if (variant === "vertical") {
    return (
      <nav className={cn("w-64 bg-white border-r border-gray-200 h-full", className)}>
        {logo && <div className="p-6 border-b border-gray-200">{logo}</div>}

        <div className="p-4">
          {items.map((item, index) => (
            <NavigationItem key={index} item={item} vertical />
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav className={cn("bg-white border-b border-gray-200", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {logo && <div className="flex-shrink-0">{logo}</div>}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item, index) => (
              <NavigationItem key={index} item={item} />
            ))}
          </div>

          {/* Actions */}
          {actions && <div className="hidden md:flex items-center space-x-4">{actions}</div>}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {items.map((item, index) => (
                <NavigationItem key={index} item={item} mobile onClick={() => setMobileOpen(false)} />
              ))}
              {actions && <div className="pt-4 border-t border-gray-200">{actions}</div>}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

const NavigationItem: React.FC<{
  item: NavigationItem
  vertical?: boolean
  mobile?: boolean
  onClick?: () => void
}> = ({ item, vertical, mobile, onClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  const handleClick = () => {
    if (item.onClick) {
      item.onClick()
    }
    if (onClick) {
      onClick()
    }
    if (hasChildren) {
      setIsOpen(!isOpen)
    }
  }

  const baseClasses =
    vertical || mobile
      ? "w-full flex items-center px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
      : "flex items-center text-gray-600 hover:text-purple-600 transition-colors font-medium"

  return (
    <div className={vertical ? "w-full" : "relative"}>
      <motion.button whileHover={{ scale: 1.02 }} onClick={handleClick} className={cn(baseClasses, "cursor-pointer")}>
        {item.icon && <span className="mr-2">{item.icon}</span>}
        <span>{item.label}</span>
        {item.badge && (
          <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">{item.badge}</span>
        )}
        {hasChildren && <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isOpen && "rotate-180")} />}
      </motion.button>

      {hasChildren && isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            vertical || mobile
              ? "ml-4 mt-2 space-y-1"
              : "absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50",
          )}
        >
          {item.children?.map((child, index) => (
            <NavigationItem key={index} item={child} vertical={vertical || mobile} onClick={onClick} />
          ))}
        </motion.div>
      )}
    </div>
  )
}

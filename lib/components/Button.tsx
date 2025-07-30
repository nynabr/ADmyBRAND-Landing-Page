"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg" | "xl"
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  gradient?: boolean
  pulse?: boolean
}

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300",
  outline:
    "border-2 border-purple-300 hover:border-purple-600 text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 bg-white/80 backdrop-blur-sm",
  ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
  destructive: "bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl",
}

const sizeVariants = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  gradient = false,
  pulse = false,
  className,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses =
    gradient && variant === "primary"
      ? "bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-2xl"
      : buttonVariants[variant]

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      animate={pulse ? { scale: [1, 1.05, 1] } : {}}
      transition={pulse ? { duration: 2, repeat: Number.POSITIVE_INFINITY } : { duration: 0.2 }}
      className={cn(baseClasses, variantClasses, sizeVariants[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {icon && iconPosition === "left" && !loading && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && !loading && <span className="ml-2">{icon}</span>}
    </motion.button>
  )
}

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info" | "purple"
  size?: "sm" | "md" | "lg"
  pulse?: boolean
  gradient?: boolean
  children: React.ReactNode
}

const variantClasses = {
  default: "bg-gray-100 text-gray-800 border-gray-200",
  success: "bg-green-100 text-green-800 border-green-200",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
  error: "bg-red-100 text-red-800 border-red-200",
  info: "bg-blue-100 text-blue-800 border-blue-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
}

const sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-2 text-base",
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  pulse = false,
  gradient = false,
  className,
  ...props
}) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full border transition-all duration-200"

  const variantClasses_final =
    gradient && variant === "purple"
      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
      : variantClasses[variant]

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...(pulse && { scale: [1, 1.05, 1] }),
      }}
      transition={{
        duration: 0.3,
        ...(pulse && { repeat: Number.POSITIVE_INFINITY, duration: 2 }),
      }}
      whileHover={{ scale: 1.05 }}
      className={cn(baseClasses, variantClasses_final, sizeClasses[size], className)}
      {...props}
    >
      {children}
    </motion.span>
  )
}

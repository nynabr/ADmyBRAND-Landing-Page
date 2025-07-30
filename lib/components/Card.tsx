"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "glass"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  hover?: boolean
  gradient?: boolean
  children: React.ReactNode
}

const cardVariants = {
  default: "bg-white shadow-lg border border-gray-200",
  elevated: "bg-white shadow-2xl border border-gray-100",
  outlined: "bg-white border-2 border-gray-300 shadow-sm",
  glass: "bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl",
}

const paddingVariants = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
}

const roundedVariants = {
  none: "rounded-none",
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  full: "rounded-full",
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  rounded = "lg",
  hover = false,
  gradient = false,
  className,
  ...props
}) => {
  const baseClasses = "transition-all duration-300"

  const variantClasses = gradient
    ? "bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 border border-white/20 shadow-xl"
    : cardVariants[variant]

  const hoverClasses = hover ? "hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer" : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        baseClasses,
        variantClasses,
        paddingVariants[padding],
        roundedVariants[rounded],
        hoverClasses,
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
)

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => (
  <h3 className={cn("text-xl font-bold text-gray-900", className)} {...props}>
    {children}
  </h3>
)

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={cn("text-gray-600", className)} {...props}>
    {children}
  </div>
)

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={cn("mt-4 pt-4 border-t border-gray-200", className)} {...props}>
    {children}
  </div>
)

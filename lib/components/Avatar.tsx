"use client"

import type React from "react"

import { motion } from "framer-motion"
import { User } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  fallback?: string
  status?: "online" | "offline" | "away" | "busy"
  gradient?: boolean
  border?: boolean
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-16 h-16 text-lg",
  xl: "w-20 h-20 text-xl",
  "2xl": "w-24 h-24 text-2xl",
}

const statusClasses = {
  online: "bg-green-400 border-white",
  offline: "bg-gray-400 border-white",
  away: "bg-yellow-400 border-white",
  busy: "bg-red-400 border-white",
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  fallback,
  status,
  gradient = false,
  border = false,
  className,
  ...props
}) => {
  const [imageError, setImageError] = useState(false)

  const showImage = src && !imageError
  const showFallback = fallback && !showImage
  const showIcon = !showImage && !showFallback

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden",
        sizeClasses[size],
        gradient && "bg-gradient-to-r from-purple-400 to-pink-400",
        !gradient && !showImage && "bg-gray-200",
        border && "ring-2 ring-white shadow-lg",
        className,
      )}
      {...props}
    >
      {showImage && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt || "Avatar"}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      )}

      {showFallback && <span className="font-medium text-gray-700">{fallback}</span>}

      {showIcon && <User className="w-1/2 h-1/2 text-gray-400" />}

      {status && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={cn("absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-2", statusClasses[status])}
        />
      )}
    </motion.div>
  )
}

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: "default" | "filled" | "outlined"
  inputSize?: "sm" | "md" | "lg"
}

const variantClasses = {
  default: "border-2 border-gray-200 focus:border-purple-500 bg-white",
  filled: "border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-500",
  outlined: "border-2 border-purple-200 focus:border-purple-500 bg-transparent",
}

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = "default",
      inputSize = "md",
      type = "text",
      className,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const isPassword = type === "password"
    const inputType = isPassword && showPassword ? "text" : type

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {label && (
          <motion.label
            animate={{
              color: isFocused ? "#8b5cf6" : "#374151",
              scale: isFocused ? 1.02 : 1,
            }}
            className="block text-sm font-medium mb-2 transition-colors"
          >
            {label}
          </motion.label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{leftIcon}</div>
          )}

          <motion.input
            ref={ref}
            type={inputType}
            whileFocus={{ scale: 1.01 }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1",
              variantClasses[variant],
              sizeClasses[inputSize],
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-10",
              error && "border-red-300 focus:border-red-500 focus:ring-red-500",
              className,
            )}
            {...props}
          />

          {isPassword && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </motion.button>
          )}

          {rightIcon && !isPassword && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">{rightIcon}</div>
          )}
        </div>

        {(error || helperText) && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-2">
            {error && <p className="text-sm text-red-600">{error}</p>}
            {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
          </motion.div>
        )}
      </motion.div>
    )
  },
)

Input.displayName = "Input"

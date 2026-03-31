"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Sparkle = {
  id: string
  x: string
  y: string
  size: number
  delay: number
  color: string
}

interface Props {
  text: string
  className?: string
  sparklesCount?: number
}

export default function SparklesText({
  text,
  className = "",
  sparklesCount = 8,
}: Props) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkle = (): Sparkle => ({
      id: Math.random().toString(),
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 4,
      delay: Math.random() * 2,
      color: Math.random() > 0.5 ? "#A855F7" : "#EC4899", // purple / pink
    })

    const createSparkles = () => {
      setSparkles(Array.from({ length: sparklesCount }, generateSparkle))
    }

    createSparkles()

    const interval = setInterval(createSparkles, 1500)
    return () => clearInterval(interval)
  }, [sparklesCount])

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            borderRadius: "50%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 0.8,
            delay: sparkle.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Text */}
      <span className="relative z-10 font-semibold">{text}</span>
    </span>
  )
}
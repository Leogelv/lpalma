import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const textRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout | null = null
    
    const handleMouseOver = () => {
      interval = setInterval(() => {
        if (textRef.current) {
          textRef.current.innerText = text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')

          if (iteration >= text.length) {
            if (interval) clearInterval(interval)
          }
          iteration += 1/3
        }
      }, 30)
    }

    const element = textRef.current
    element?.addEventListener('mouseover', handleMouseOver)

    return () => {
      element?.removeEventListener('mouseover', handleMouseOver)
      if (interval) clearInterval(interval)
    }
  }, [text])

  return (
    <motion.h1
      ref={textRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h1>
  )
} 
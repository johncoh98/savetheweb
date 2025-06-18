"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

// Hook pour détecter la section visible
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}

// Composant pour l'indicateur de section
const SectionIndicator = () => {
  const activeSection = useActiveSection()
  const sections = [
    { id: 'hero', label: 'Accueil', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '✨' },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨' },
    { id: 'contact', label: 'Contact', icon: '📬' }
  ]

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-accent text-white shadow-lg scale-110'
                : 'bg-white/80 text-primary hover:bg-accent hover:text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{section.icon}</span>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-3 py-1 bg-primary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-primary"></div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

// Composant pour les animations de texte
export const AnimatedText = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

// Composant pour les animations de cartes
export const AnimatedCard = ({ 
  children, 
  className = "",
  delay = 0,
  direction = "up"
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "down": return { y: -30 }
      case "left": return { x: 30 }
      case "right": return { x: -30 }
      default: return { y: 30 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  )
}

// Composant pour l'effet de parallaxe sur les images
export const ParallaxImage = ({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string
  alt: string
  className?: string 
}) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div className={`overflow-hidden ${className}`} style={{ y }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  )
}

export default function ScrollAnimations() {
  return <SectionIndicator />
}
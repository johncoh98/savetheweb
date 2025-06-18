"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Composant pour les particules flottantes
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-rose-200/30 to-accent/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Composant pour les éléments décoratifs qui suivent le scroll
const ScrollDecorations = () => {
  const { scrollYProgress } = useScroll()
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cercle décoratif principal */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-accent/10 blur-xl"
        style={{ y: y1, rotate, scale }}
      />
      
      {/* Forme géométrique flottante */}
      <motion.div
        className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-tr from-rose/30 to-secondary/20 transform rotate-45 blur-sm"
        style={{ y: y2 }}
      />
      
      {/* Petit cercle d'accent */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-accent/40 to-rose/30"
        style={{ y: y3, scale }}
      />
      
      {/* Ligne décorative animée */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
        style={{ y: y1 }}
        animate={{ scaleY: [1, 1.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

// Composant pour l'effet de révélation progressive
const ProgressiveReveal = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose via-accent to-secondary z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

// Composant pour les coeurs flottants
const FloatingHearts = () => {
  const hearts = ['💕', '💖', '💗', '💝', '💞']
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + index * 10}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            rotate: [-10, 10, -10],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8 + index * 2,
            delay: index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {heart}
        </motion.div>
      ))}
    </div>
  )
}

// Composant pour l'effet de lueur magique
const MagicalGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(215,184,160,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(198,170,131,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

// Composant principal qui combine toutes les animations
export default function PageAnimations() {
  return (
    <>
      <ProgressiveReveal />
      <MagicalGlow />
      <ScrollDecorations />
      <FloatingParticles />
      <FloatingHearts />
    </>
  )
}
"use client"

import { motion } from 'framer-motion'
import { AnimatedText } from './ScrollAnimations'

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div 
      className="absolute -bottom-40 -left-40 w-64 h-64 bg-accent/10 rounded-full blur-2xl"
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
    <motion.div 
      className="absolute top-1/2 right-1/4 w-32 h-32 bg-rose/20 rounded-full blur-xl"
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  </div>
)

// Composant pour les étoiles scintillantes
const TwinklingStars = () => {
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-accent rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero relative">
      <FloatingElements />
      <TwinklingStars />
      
      <div className="hero-content">
        <AnimatedText delay={0.2}>
          <h1 className="hero-title">
            Créez votre site de{' '}
            <span className="highlight">mariage unique</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p className="hero-subtitle">
            Des designs élégants et personnalisés pour immortaliser votre grand jour. 
            Créez une expérience web unique qui reflète votre amour.
          </p>
        </AnimatedText>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="#portfolio" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos modèles
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer mon projet
          </motion.a>
        </motion.div>

        <AnimatedText delay={0.8}>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm">
              <motion.span 
                className="text-accent mr-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ★
              </motion.span>
              <p className="text-sm text-text-light">
                Plus de 500+ couples nous font confiance
              </p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
    <div className="absolute -bottom-40 -left-40 w-64 h-64 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
    <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-rose/20 rounded-full animate-float" style={{ animationDelay: '-4s' }} />
  </div>
)

export default function Hero() {
  return (
    <section className="hero">
      <FloatingElements />
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Créez votre site de{' '}
          <span className="highlight">mariage unique</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Des designs élégants et personnalisés pour immortaliser votre grand jour. 
          Créez une expérience web unique qui reflète votre amour.
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#portfolio" className="btn btn-primary">
            Découvrir nos modèles
          </a>
          <a href="#contact" className="btn btn-secondary">
            Commencer mon projet
          </a>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm">
            <span className="text-accent mr-2">★</span>
            <p className="text-sm text-text-light">
              Plus de 500+ couples nous font confiance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
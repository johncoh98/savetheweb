"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroContent = () => (
  <div className="min-h-[90vh] flex flex-col items-center justify-center relative z-10">
    <motion.div 
      className="max-w-4xl mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Titre principal avec gradient animé */}
      <motion.h1 
        className="text-7xl md:text-8xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 animate-gradient">
          Créez votre site
        </span>
        <span className="block mt-2 text-5xl md:text-6xl text-gray-800 dark:text-gray-100">
          de mariage unique
        </span>
      </motion.h1>

      {/* Sous-titre avec animation délayée */}
      <motion.p 
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Un site web personnalisé pour immortaliser votre grand jour
      </motion.p>

      {/* Conteneur des boutons avec animation stagger */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link 
          href="/templates" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium
                   bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white rounded-full
                   transform transition-all duration-300 ease-out
                   hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]"
        >
          <span className="relative z-10">Découvrir nos templates</span>
          <motion.span 
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </Link>

        <Link 
          href="/examples" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium
                   border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full
                   transform transition-all duration-300 ease-out
                   hover:scale-105 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
        >
          <span>Voir les exemples</span>
          <motion.span 
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Badge de confiance */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800">
          <span className="text-amber-500 mr-2">★</span>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Plus de 1000+ couples nous font confiance
          </p>
        </div>
      </motion.div>
    </motion.div>
  </div>
)

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Effet de grain subtil */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      
      {/* Cercle décoratif */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-rose-100 to-fuchsia-100 dark:from-rose-900/20 dark:to-fuchsia-900/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 blur-3xl" />
      
      <HeroContent />
    </section>
  )
}
"use client"

import { motion } from 'framer-motion'
import { AnimatedText, AnimatedCard } from './ScrollAnimations'

const templates = [
  {
    id: 1,
    name: "Élégance Classique",
    description: "Un design intemporel avec une touche moderne",
    features: ["RSVP en ligne", "Liste de cadeaux", "Galerie photos"],
    color: "from-rose-100 to-rose-200",
    icon: "👑"
  },
  {
    id: 2,
    name: "Bohème Chic",
    description: "Un style romantique et naturel",
    features: ["Timeline interactive", "Plan d'accès", "Menu personnalisé"],
    color: "from-amber-100 to-orange-200",
    icon: "🌸"
  },
  {
    id: 3,
    name: "Minimaliste",
    description: "L'élégance dans la simplicité",
    features: ["Compte à rebours", "Formulaire de contact", "Album photos"],
    color: "from-gray-100 to-gray-200",
    icon: "✨"
  },
  {
    id: 4,
    name: "Romantique",
    description: "Pour célébrer votre amour",
    features: ["Livre d'or", "Playlist collaborative", "Stories Instagram"],
    color: "from-pink-100 to-red-200",
    icon: "💕"
  },
  {
    id: 5,
    name: "Modern Luxe",
    description: "Un design sophistiqué et contemporain",
    features: ["Animations élégantes", "Section invités", "Blog mariage"],
    color: "from-purple-100 to-indigo-200",
    icon: "💎"
  },
  {
    id: 6,
    name: "Champêtre",
    description: "Un style naturel et authentique",
    features: ["Carte interactive", "Météo", "Programme détaillé"],
    color: "from-green-100 to-emerald-200",
    icon: "🌿"
  }
]

export default function Portfolio() {
  return (
    <section className="section relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-40 h-40 bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-32 h-32 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-2xl"
          animate={{
            x: [20, -20, 20],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
        <AnimatedText>
          <h2>Nos Modèles</h2>
          <p className="text-center text-text-light max-w-2xl mx-auto mb-8">
            Découvrez nos modèles de sites de mariage personnalisables, 
            conçus pour créer une expérience unique pour votre grand jour.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <AnimatedCard 
              key={template.name}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
              className="group"
            >
              <div className="card overflow-hidden">
                <div className={`relative aspect-video mb-4 overflow-hidden rounded-lg bg-gradient-to-br ${template.color} group-hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-2xl">{template.icon}</span>
                      </motion.div>
                      <p className="text-gray-600 font-medium">{template.name}</p>
                    </div>
                  </div>
                  
                  {/* Effet de brillance au survol */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="card-title">{template.name}</h3>
                  <p className="card-description">{template.description}</p>
                  <ul className="space-y-2 mb-6">
                    {template.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + featureIndex * 0.1 + 0.2 
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.span 
                          className="text-accent mr-2"
                          whileHover={{ scale: 1.2 }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button 
                    className="btn btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voir la démo
                  </motion.button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
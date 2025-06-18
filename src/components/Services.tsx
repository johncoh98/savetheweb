"use client"

import { motion } from 'framer-motion'
import { AnimatedText, AnimatedCard } from './ScrollAnimations'

export default function Services() {
  const services = [
    {
      icon: '✨',
      title: 'Design Personnalisé',
      description: 'Un site unique qui reflète votre personnalité et votre style de mariage',
      features: [
        'Design sur mesure',
        'Choix des couleurs',
        'Typographie personnalisée'
      ],
      color: 'from-rose-100 to-pink-100'
    },
    {
      icon: '📱',
      title: 'Responsive & Moderne',
      description: 'Une expérience parfaite sur tous les appareils pour tous vos invités',
      features: [
        'Mobile-first',
        'Performance optimisée',
        'Navigation intuitive'
      ],
      color: 'from-blue-100 to-indigo-100'
    },
    {
      icon: '🛠',
      title: 'Support Complet',
      description: 'Une assistance technique et des mises à jour pendant toute la durée de votre projet',
      features: [
        'Support réactif',
        'Mises à jour régulières',
        'Guide d\'utilisation'
      ],
      color: 'from-green-100 to-emerald-100'
    }
  ]

  return (
    <section className="section relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative z-10">
        <AnimatedText>
          <h2>Nos Services</h2>
          <p className="text-center text-text-light max-w-2xl mx-auto mb-8">
            Des solutions complètes pour créer le site de mariage de vos rêves, 
            avec un design unique et une expérience utilisateur exceptionnelle.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.title}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "up" : "down"}
              className="relative"
            >
              <div className="card group">
                {/* Fond dégradé animé */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4 inline-block"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + featureIndex * 0.1 + 0.3 
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.span 
                          className="text-accent mr-2"
                          whileHover={{ scale: 1.3 }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from 'framer-motion'

const templates = [
  {
    id: 1,
    name: "Élégance Classique",
    description: "Un design intemporel avec une touche moderne",
    features: ["RSVP en ligne", "Liste de cadeaux", "Galerie photos"],
    color: "from-rose-100 to-rose-200"
  },
  {
    id: 2,
    name: "Bohème Chic",
    description: "Un style romantique et naturel",
    features: ["Timeline interactive", "Plan d'accès", "Menu personnalisé"],
    color: "from-amber-100 to-orange-200"
  },
  {
    id: 3,
    name: "Minimaliste",
    description: "L'élégance dans la simplicité",
    features: ["Compte à rebours", "Formulaire de contact", "Album photos"],
    color: "from-gray-100 to-gray-200"
  },
  {
    id: 4,
    name: "Romantique",
    description: "Pour célébrer votre amour",
    features: ["Livre d'or", "Playlist collaborative", "Stories Instagram"],
    color: "from-pink-100 to-red-200"
  },
  {
    id: 5,
    name: "Modern Luxe",
    description: "Un design sophistiqué et contemporain",
    features: ["Animations élégantes", "Section invités", "Blog mariage"],
    color: "from-purple-100 to-indigo-200"
  },
  {
    id: 6,
    name: "Champêtre",
    description: "Un style naturel et authentique",
    features: ["Carte interactive", "Météo", "Programme détaillé"],
    color: "from-green-100 to-emerald-200"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Nos Modèles</h2>
          <p className="text-center text-text-light max-w-2xl mx-auto mb-8">
            Découvrez nos modèles de sites de mariage personnalisables, 
            conçus pour créer une expérience unique pour votre grand jour.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <motion.div 
              key={template.name}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative aspect-video mb-4 overflow-hidden rounded-lg bg-gradient-to-br ${template.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">💍</span>
                    </div>
                    <p className="text-gray-600 font-medium">{template.name}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="card-title">{template.name}</h3>
                <p className="card-description">{template.description}</p>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-full">
                  Voir la démo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
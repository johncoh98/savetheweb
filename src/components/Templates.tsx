"use client"

import { useEffect } from 'react'
import TemplatePlaceholder from './TemplatePlaceholder'

const templates = [
  {
    id: 'classic',
    title: 'Classique',
    description: 'Un design intemporel aux lignes élégantes, parfait pour un mariage traditionnel.',
    style: 'classic' as const
  },
  {
    id: 'minimal',
    title: 'Minimaliste',
    description: 'Une mise en page épurée et moderne, pour un mariage contemporain.',
    style: 'minimal' as const
  },
  {
    id: 'boheme',
    title: 'Bohème',
    description: 'Des motifs organiques et des couleurs douces, idéal pour un mariage champêtre.',
    style: 'boheme' as const
  },
  {
    id: 'rustic',
    title: 'Rustique',
    description: 'Des textures naturelles et chaleureuses, parfait pour un mariage authentique.',
    style: 'rustic' as const
  }
]

export default function Templates() {
  useEffect(() => {
    // Création des cœurs flottants
    const createHeart = () => {
      const heart = document.createElement('div')
      heart.className = 'heart'
      heart.style.left = Math.random() * 100 + '%'
      heart.style.animationDuration = Math.random() * 10 + 15 + 's'
      heart.style.opacity = (Math.random() * 0.1).toString()
      document.querySelector('.floating-hearts')?.appendChild(heart)

      // Suppression après l'animation
      heart.addEventListener('animationend', () => {
        heart.remove()
      })
    }

    // Création initiale des cœurs
    const interval = setInterval(() => {
      createHeart()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="templates-section">
      <div className="floating-hearts" />
      <div className="container">
        <h2 className="text-center fade-up">
          Découvrez Nos Templates
        </h2>
        <p className="text-center text-text-light mb-8 fade-up delay-1">
          Des designs uniques pour célébrer votre amour
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 templates-grid">
          {templates.map((template, index) => (
            <div 
              key={template.id} 
              className={`card fade-up delay-${index + 1}`}
            >
              <div>
                <div className="card-image">
                  <TemplatePlaceholder
                    title={template.title}
                    style={template.style}
                  />
                </div>
                <h3 className="card-title">{template.title}</h3>
                <p className="card-description">{template.description}</p>
              </div>
              <button className="btn btn-primary w-full">
                Voir le template
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
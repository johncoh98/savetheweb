"use client"

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simuler un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', phone: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2>Contactez-nous</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Prêt à créer le site de mariage de vos rêves ? Nous sommes là pour vous accompagner 
            dans chaque étape de votre projet.
          </p>
        </motion.div>

        <motion.div 
          className="card max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="Jean Dupont"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                  placeholder="+33 6 12 34 56 78"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                placeholder="vous@example.com"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input"
                placeholder="Décrivez votre projet..."
                disabled={isSubmitting}
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                Une erreur est survenue. Veuillez réessayer plus tard.
              </div>
            )}

            <div className="flex gap-4">
              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
              <a
                href="https://wa.me/votre_numero"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <span className="mr-2">📱</span>
                WhatsApp
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
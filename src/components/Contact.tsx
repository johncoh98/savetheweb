"use client"

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { AnimatedText, AnimatedCard } from './ScrollAnimations'

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
    <section className="section relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-secondary/10 to-transparent rounded-full blur-3xl"
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
        
        {/* Coeurs flottants */}
        {['💕', '💖', '💗'].map((heart, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${20 + index * 30}%`,
              top: `${20 + index * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + index * 2,
              delay: index * 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {heart}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <AnimatedText className="text-center mb-8">
          <h2>Contactez-nous</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Prêt à créer le site de mariage de vos rêves ? Nous sommes là pour vous accompagner 
            dans chaque étape de votre projet.
          </p>
        </AnimatedText>

        <AnimatedCard 
          className="max-w-2xl mx-auto"
          delay={0.2}
        >
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
              </div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              {submitStatus === 'success' && (
                <motion.div 
                  className="p-4 bg-green-50 text-green-700 rounded-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="p-4 bg-red-50 text-red-700 rounded-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Une erreur est survenue. Veuillez réessayer plus tard.
                </motion.div>
              )}

              <div className="flex gap-4">
                <motion.button 
                  type="submit" 
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </motion.button>
                
                <motion.a
                  href="https://wa.me/votre_numero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">📱</span>
                  WhatsApp
                </motion.a>
              </div>
            </form>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
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
      ]
    },
    {
      icon: '📱',
      title: 'Responsive & Moderne',
      description: 'Une expérience parfaite sur tous les appareils pour tous vos invités',
      features: [
        'Mobile-first',
        'Performance optimisée',
        'Navigation intuitive'
      ]
    },
    {
      icon: '🛠',
      title: 'Support Complet',
      description: 'Une assistance technique et des mises à jour pendant toute la durée de votre projet',
      features: [
        'Support réactif',
        'Mises à jour régulières',
        'Guide d\'utilisation'
      ]
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Nos Services</h2>
        <p className="text-center text-text-light max-w-2xl mx-auto mb-8">
          Des solutions complètes pour créer le site de mariage de vos rêves, 
          avec un design unique et une expérience utilisateur exceptionnelle.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-light mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
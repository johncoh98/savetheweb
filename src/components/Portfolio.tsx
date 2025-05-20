import Image from 'next/image'

const templates = [
  {
    id: 1,
    name: "Élégance Classique",
    description: "Un design intemporel avec une touche moderne",
    features: ["RSVP en ligne", "Liste de cadeaux", "Galerie photos"],
    image: "/templates/classic.jpg" // À remplacer par vos images
  },
  {
    id: 2,
    name: "Bohème Chic",
    description: "Un style romantique et naturel",
    features: ["Timeline interactive", "Plan d'accès", "Menu personnalisé"],
    image: "/templates/boheme.jpg"
  },
  {
    id: 3,
    name: "Minimaliste",
    description: "L'élégance dans la simplicité",
    features: ["Compte à rebours", "Formulaire de contact", "Album photos"],
    image: "/templates/minimal.jpg"
  },
  {
    id: 4,
    name: "Romantique",
    description: "Pour célébrer votre amour",
    features: ["Livre d'or", "Playlist collaborative", "Stories Instagram"],
    image: "/templates/romantic.jpg"
  },
  {
    id: 5,
    name: "Modern Luxe",
    description: "Un design sophistiqué et contemporain",
    features: ["Animations élégantes", "Section invités", "Blog mariage"],
    image: "/templates/luxury.jpg"
  },
  {
    id: 6,
    name: "Champêtre",
    description: "Un style naturel et authentique",
    features: ["Carte interactive", "Météo", "Programme détaillé"],
    image: "/templates/rustic.jpg"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>Nos Modèles</h2>
        <p className="text-center text-text-light max-w-2xl mx-auto mb-8">
          Découvrez nos modèles de sites de mariage personnalisables, 
          conçus pour créer une expérience unique pour votre grand jour.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <div 
              key={template.name}
              className="card overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative aspect-video mb-4 overflow-hidden">
                <div 
                  className="w-full h-full bg-surface flex items-center justify-center text-text-light"
                  style={{
                    backgroundImage: `url(${template.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  Image à venir
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                <p className="text-text-light mb-4">{template.description}</p>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-full">
                  Voir la démo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
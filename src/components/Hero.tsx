import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Créez le Site de Mariage <br />
          de vos Rêves
        </h1>
        <p className="hero-description">
          Des sites web élégants et personnalisés pour partager votre histoire d'amour avec vos proches. 
          Une expérience unique qui reflète votre personnalité.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="#contact"
            className="btn btn-primary"
          >
            Commencer Votre Projet
          </Link>
          <Link 
            href="#portfolio"
            className="btn btn-outline"
          >
            Voir nos Créations
          </Link>
        </div>
      </div>
    </section>
  )
} 
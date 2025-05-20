import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import CreativeEffects from '@/components/CreativeEffects'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

export const metadata = {
  title: 'Save The Web - Sites de Mariage Sur Mesure',
  description: 'Créez votre site de mariage unique et personnalisé avec Save The Web. Des designs élégants et modernes pour votre grand jour.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="grain">
        <CreativeEffects />
        {children}
      </body>
    </html>
  )
}

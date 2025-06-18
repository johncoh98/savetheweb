import './globals.css'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import { Metadata } from 'next'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Save The Web - Sites de Mariage Sur Mesure',
  description: 'Créez votre site de mariage unique et personnalisé avec Save The Web. Des designs élégants et modernes pour votre grand jour.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Save The Web - Sites de Mariage Sur Mesure',
    description: 'Créez votre site de mariage unique et personnalisé',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="fr" 
      className={`${montserrat.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#F7F4EF" />
      </head>
      <body className="font-sans antialiased bg-background text-text grain">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
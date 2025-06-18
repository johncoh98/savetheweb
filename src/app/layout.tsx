import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'

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
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 grain">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
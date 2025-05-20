"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Détection de la section active
      const sections = ['services', 'portfolio', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: "#services", label: "Services", icon: "✨" },
    { href: "#portfolio", label: "Portfolio", icon: "🎨" },
    { href: "#contact", label: "Contact", icon: "📬" }
  ]

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-text">Save The Web</span>
          <span className="logo-dot"></span>
        </Link>

        {/* Desktop menu */}
        <div className="nav-menu">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'nav-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleMenuClick(item.href)
              }}
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span className="nav-link-text">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className={`menu-button ${isMenuOpen ? 'menu-button-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="menu-button-inner">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu-active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="mobile-menu-container" onClick={e => e.stopPropagation()}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-menu-link ${activeSection === item.href.slice(1) ? 'mobile-menu-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleMenuClick(item.href)
              }}
            >
              <span className="mobile-menu-icon">{item.icon}</span>
              <span className="mobile-menu-text">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
} 
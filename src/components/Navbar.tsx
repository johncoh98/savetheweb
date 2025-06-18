"use client"

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

// Types
interface MenuItem {
  href: string
  label: string
  icon: string
}

// Constants
const MENU_ITEMS: MenuItem[] = [
  { href: "#services", label: "Services", icon: "✨" },
  { href: "#portfolio", label: "Portfolio", icon: "🎨" },
  { href: "#contact", label: "Contact", icon: "📬" }
]

const SCROLL_THRESHOLD = 50
const SECTION_OFFSET = 100

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Handle scroll detection
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD)

    const sections = MENU_ITEMS.map(item => item.href.slice(1))
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (!element) return false
      const rect = element.getBoundingClientRect()
      return rect.top <= 150 && rect.bottom >= 150
    })
    
    setActiveSection(currentSection || '')
  }, [])

  // Handle menu item click
  const handleMenuClick = useCallback((href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - SECTION_OFFSET,
        behavior: 'smooth'
      })
    }
  }, [])

  // Scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  // Render menu items
  const renderMenuItem = (item: MenuItem, isMobile = false) => {
    const baseClass = isMobile ? 'mobile-menu-link' : 'nav-link'
    const activeClass = isMobile ? 'mobile-menu-link-active' : 'nav-link-active'
    const iconClass = isMobile ? 'mobile-menu-icon' : 'nav-link-icon'
    const textClass = isMobile ? 'mobile-menu-text' : 'nav-link-text'

    return (
      <a
        key={item.href}
        href={item.href}
        className={`${baseClass} ${activeSection === item.href.slice(1) ? activeClass : ''}`}
        onClick={(e) => {
          e.preventDefault()
          handleMenuClick(item.href)
        }}
      >
        <span className={iconClass}>{item.icon}</span>
        <span className={textClass}>{item.label}</span>
      </a>
    )
  }

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <span className="logo-text">Save The Web</span>
          <span className="logo-dot"></span>
        </Link>

        {/* Desktop menu */}
        <div className="nav-menu">
          {MENU_ITEMS.map(item => renderMenuItem(item))}
        </div>

        {/* Mobile menu button */}
        <button
          className={`menu-button ${isMenuOpen ? 'menu-button-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="menu-button-inner">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-simple"
          role="dialog"
          aria-label="Navigation menu"
        >
          {MENU_ITEMS.map(item => renderMenuItem(item, true))}
        </div>
      )}
    </nav>
  )
}
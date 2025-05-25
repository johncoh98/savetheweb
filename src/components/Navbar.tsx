"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  return (
    <nav className={`nav${isScrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-text">Save The Web</span>
          <span className="logo-dot" />
        </Link>
        <div className="nav-menu">
          <Link href="#templates" className="nav-link">Templates</Link>
          <Link href="#portfolio" className="nav-link">Portfolio</Link>
          <Link href="#pricing" className="nav-link">Tarifs</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </div>
        <button 
          className={`menu-button${isMenuOpen ? ' menu-button-active' : ''}`}
          onClick={() => setIsMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <div className="menu-button-inner">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu-simple">
          <Link href="#templates" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Templates</Link>
          <Link href="#portfolio" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link href="#pricing" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Tarifs</Link>
          <Link href="#contact" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
} 
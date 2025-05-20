"use client"

import { useEffect, useRef } from 'react'

export default function CreativeEffects() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Gestion du parallaxe
    let rafId: number
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const parallaxElements = document.querySelectorAll('.parallax, .parallax-bg')
        const currentScrollY = window.scrollY

        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          parallaxElements.forEach((el) => {
            const rect = el.getBoundingClientRect()
            const viewportHeight = window.innerHeight
            const elementVisible = rect.top < viewportHeight && rect.bottom > 0

            if (elementVisible) {
              const speed = el.getAttribute('data-speed') || '0.1'
              const centerY = rect.top + rect.height / 2
              const fromViewportCenter = centerY - viewportHeight / 2
              const parallaxY = fromViewportCenter * -Number(speed)
              
              el.style.setProperty('--parallax-y', `${parallaxY}px`)
            }
          })

          lastScrollY = currentScrollY
        }
      })
    }

    // Animation au défilement
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    document.querySelectorAll('.fade-up, .fade-in, .slide-in').forEach((el) => {
      observerRef.current?.observe(el)
    })

    // Effet de suivi de la souris
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.mouse-follow').forEach((el) => {
          const { left, top, width, height } = el.getBoundingClientRect()
          const centerX = left + width / 2
          const centerY = top + height / 2
          const deltaX = (e.clientX - centerX) * 0.1
          const deltaY = (e.clientY - centerY) * 0.1

          el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
        })
      })
    }

    // Optimisation des événements
    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          scrollTimeout = null
          handleScroll()
        }, 16)
      }
    }

    // Event listeners
    window.addEventListener('scroll', throttledScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Appel initial
    handleScroll()

    // Nettoyage
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      observerRef.current?.disconnect()
    }
  }, [])

  return null
} 
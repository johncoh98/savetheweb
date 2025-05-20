"use client"

import { useEffect, useRef } from 'react'

interface TemplatePlaceholderProps {
  title: string
  style: 'classic' | 'minimal' | 'boheme' | 'rustic'
}

const styleConfigs = {
  classic: {
    bgColor: '#F7F4EF',
    accentColor: '#C6AA83',
    pattern: 'floral'
  },
  minimal: {
    bgColor: '#FFFFFF',
    accentColor: '#2E2D2B',
    pattern: 'geometric'
  },
  boheme: {
    bgColor: '#F4D0D0',
    accentColor: '#D7B8A0',
    pattern: 'organic'
  },
  rustic: {
    bgColor: '#E5CCBA',
    accentColor: '#2E2D2B',
    pattern: 'natural'
  }
}

export default function TemplatePlaceholder({ title, style }: TemplatePlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const config = styleConfigs[style]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 225

    // Draw background
    ctx.fillStyle = config.bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw pattern based on style
    ctx.strokeStyle = config.accentColor
    ctx.lineWidth = 1

    switch (config.pattern) {
      case 'floral':
        drawFloralPattern(ctx, canvas.width, canvas.height)
        break
      case 'geometric':
        drawGeometricPattern(ctx, canvas.width, canvas.height)
        break
      case 'organic':
        drawOrganicPattern(ctx, canvas.width, canvas.height)
        break
      case 'natural':
        drawNaturalPattern(ctx, canvas.width, canvas.height)
        break
    }

    // Draw title
    ctx.fillStyle = config.accentColor
    ctx.font = "300 24px 'Cormorant Garamond'"
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(title, canvas.width / 2, canvas.height / 2)
  }, [title, style, config])

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full object-cover"
      style={{ 
        imageRendering: 'crisp-edges',
        background: config.bgColor 
      }}
    />
  )
}

function drawFloralPattern(ctx: CanvasRenderingContext2D, width: number, height: number) {
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const size = Math.random() * 20 + 10

    ctx.beginPath()
    for (let j = 0; j < 5; j++) {
      const angle = (j / 5) * Math.PI * 2
      const px = x + Math.cos(angle) * size
      const py = y + Math.sin(angle) * size
      if (j === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.stroke()
  }
}

function drawGeometricPattern(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const size = 40
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      if ((x + y) % (size * 2) === 0) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + size, y + size)
        ctx.stroke()
      }
    }
  }
}

function drawOrganicPattern(ctx: CanvasRenderingContext2D, width: number, height: number) {
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.moveTo(0, Math.random() * height)
    
    for (let x = 0; x < width; x += 50) {
      const y = Math.random() * height
      ctx.quadraticCurveTo(
        x + 25,
        y,
        x + 50,
        Math.random() * height
      )
    }
    
    ctx.stroke()
  }
}

function drawNaturalPattern(ctx: CanvasRenderingContext2D, width: number, height: number) {
  for (let i = 0; i < 15; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const radius = Math.random() * 15 + 5

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.stroke()

    // Add small dots around
    for (let j = 0; j < 3; j++) {
      const angle = Math.random() * Math.PI * 2
      const distance = radius + Math.random() * 10
      ctx.beginPath()
      ctx.arc(
        x + Math.cos(angle) * distance,
        y + Math.sin(angle) * distance,
        1,
        0,
        Math.PI * 2
      )
      ctx.fill()
    }
  }
} 
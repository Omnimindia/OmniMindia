import { useEffect, useRef } from 'react'

/**
 * Animated network web visualization showing AI connections
 * Creates connected nodes that form a living network
 */
export default function NetworkWeb() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes = []
    const nodeCount = 80 // MORE nodes
    const connectionDistance = 200 // Longer connections
    let pulsePhase = 0

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 3 // Faster movement
        this.vy = (Math.random() - 0.5) * 3
        this.radius = Math.random() * 6 + 4 // MUCH BIGGER nodes
        this.hue = Math.random() * 360 // FULL COLOR SPECTRUM
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)` // BRIGHTER
        ctx.shadowBlur = 30 // BIGGER glow
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node())
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)' // Less clearing for more trails
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update pulse phase for animated lines
      pulsePhase += 0.05

      // Update and draw nodes
      nodes.forEach(node => {
        node.update()
        node.draw()
      })

      // Draw connections with BRIGHT PULSING lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            const pulse = Math.sin(pulsePhase + i * 0.1) * 0.3 + 0.7 // Pulsing animation

            // Use average hue of connected nodes for rainbow effect
            const avgHue = (nodes[i].hue + nodes[j].hue) / 2

            ctx.strokeStyle = `hsla(${avgHue}, 100%, 60%, ${opacity * pulse * 0.8})` // MUCH BRIGHTER
            ctx.lineWidth = opacity * 4 // THICKER lines
            ctx.shadowBlur = 20 // GLOWING lines
            ctx.shadowColor = `hsl(${avgHue}, 100%, 60%)`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-90"
    />
  )
}

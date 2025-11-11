import { useEffect, useRef } from 'react'

/**
 * Cosmic background with DRAMATIC nebula bursts, particles, and explosions
 * Creates an animated space/big bang theme with VISIBLE moving elements
 */
export default function CosmicBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system for stars
    const particles = []
    const particleCount = 300 // Increased for more visibility

    // Nebula clouds
    const nebulaClouds = []
    const cloudCount = 15

    // Burst particles
    const burstParticles = []
    let burstTimer = 0

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1 // Larger stars
        this.speedX = (Math.random() - 0.5) * 1.5 // Faster movement
        this.speedY = (Math.random() - 0.5) * 1.5
        this.opacity = Math.random()
        this.fadeSpeed = (Math.random() - 0.5) * 0.03 // Faster twinkling
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.opacity += this.fadeSpeed

        if (this.opacity <= 0 || this.opacity >= 1) {
          this.fadeSpeed *= -1
        }

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.shadowBlur = 10
        ctx.shadowColor = 'white'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    class NebulaCloud {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 200 + 100
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.hue = Math.random() * 360
        this.opacity = Math.random() * 0.3 + 0.1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseDirection = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulsing effect
        this.opacity += this.pulseSpeed * this.pulseDirection
        if (this.opacity >= 0.4 || this.opacity <= 0.1) {
          this.pulseDirection *= -1
        }

        // Wrap around
        if (this.x < -this.radius) this.x = canvas.width + this.radius
        if (this.x > canvas.width + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = canvas.height + this.radius
        if (this.y > canvas.height + this.radius) this.y = -this.radius
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        )
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 50%, ${this.opacity})`)
        gradient.addColorStop(0.5, `hsla(${this.hue + 30}, 100%, 50%, ${this.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(
          this.x - this.radius,
          this.y - this.radius,
          this.radius * 2,
          this.radius * 2
        )
      }
    }

    class BurstParticle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 5 + 2
        this.size = Math.random() * 4 + 2
        this.life = 1
        this.decay = Math.random() * 0.02 + 0.01
        this.hue = Math.random() * 60 + 180 // Blue to purple range
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.speed *= 0.98
        this.life -= this.decay
      }

      draw() {
        if (this.life <= 0) return

        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.life})`
        ctx.shadowBlur = 20
        ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Initialize nebula clouds
    for (let i = 0; i < cloudCount; i++) {
      nebulaClouds.push(new NebulaCloud())
    }

    // Create burst effect
    function createBurst(x, y) {
      for (let i = 0; i < 50; i++) {
        burstParticles.push(new BurstParticle(x, y))
      }
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebula clouds
      nebulaClouds.forEach(cloud => {
        cloud.update()
        cloud.draw()
      })

      // Draw stars
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw burst particles
      burstParticles.forEach((particle, index) => {
        particle.update()
        particle.draw()
        if (particle.life <= 0) {
          burstParticles.splice(index, 1)
        }
      })

      // Create periodic bursts
      burstTimer++
      if (burstTimer > 120) { // Every ~2 seconds
        createBurst(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
        burstTimer = 0
      }

      requestAnimationFrame(animate)
    }

    // Initial burst at center
    createBurst(canvas.width / 2, canvas.height / 2)

    animate()

    // Handle window resize
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
    <div className="absolute inset-0 overflow-hidden">
      {/* Larger animated nebula gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-cyan-600/30 animate-pulse-slow"></div>

      {/* Larger radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omni-dark/30 to-omni-dark/80"></div>
    </div>
  )
}

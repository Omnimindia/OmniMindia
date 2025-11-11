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
    const particleCount = 500 // MUCH more stars

    // Nebula clouds
    const nebulaClouds = []
    const cloudCount = 25 // MORE nebulas

    // Burst particles
    const burstParticles = []
    let burstTimer = 0

    // BIG BANG central explosion
    const bigBangParticles = []
    let bigBangActive = true

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 2 // MUCH BIGGER stars
        this.speedX = (Math.random() - 0.5) * 2 // Even faster movement
        this.speedY = (Math.random() - 0.5) * 2
        this.opacity = Math.random() * 0.5 + 0.5 // Brighter (0.5-1.0)
        this.fadeSpeed = (Math.random() - 0.5) * 0.05 // More dramatic twinkling
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
        ctx.shadowBlur = 30 // MASSIVE glow
        ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity})`
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
        this.radius = Math.random() * 400 + 200 // HUGE nebulas
        this.speedX = (Math.random() - 0.5) * 1 // Faster movement
        this.speedY = (Math.random() - 0.5) * 1
        this.hue = Math.random() * 360
        this.opacity = Math.random() * 0.5 + 0.4 // MUCH BRIGHTER (0.4-0.9)
        this.pulseSpeed = Math.random() * 0.03 + 0.02
        this.pulseDirection = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulsing effect
        this.opacity += this.pulseSpeed * this.pulseDirection
        if (this.opacity >= 0.9 || this.opacity <= 0.4) {
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
      constructor(x, y, isBigBang = false) {
        this.x = x
        this.y = y
        this.angle = Math.random() * Math.PI * 2
        this.speed = isBigBang ? Math.random() * 10 + 5 : Math.random() * 8 + 3 // MUCH faster
        this.size = isBigBang ? Math.random() * 10 + 5 : Math.random() * 8 + 3 // HUGE particles
        this.life = 1
        this.decay = Math.random() * 0.01 + 0.005 // Longer life
        this.hue = Math.random() * 360 // ALL colors for big bang!
        this.isBigBang = isBigBang
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.speed *= 0.98
        this.life -= this.decay
      }

      draw() {
        if (this.life <= 0) return

        const glowSize = this.isBigBang ? 50 : 30 // Bigger glow for big bang
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.life})`
        ctx.shadowBlur = glowSize
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // BIG BANG class - continuous explosion
    class BigBangParticle {
      constructor(centerX, centerY) {
        this.centerX = centerX
        this.centerY = centerY
        this.reset()
      }

      reset() {
        this.x = this.centerX
        this.y = this.centerY
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 15 + 5
        this.size = Math.random() * 12 + 6
        this.life = 1
        this.decay = Math.random() * 0.008 + 0.004
        this.hue = Math.random() * 360
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.speed *= 0.99
        this.life -= this.decay

        if (this.life <= 0) {
          this.reset()
        }
      }

      draw() {
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.life * 0.8})`
        ctx.shadowBlur = 60
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`
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

    // Initialize BIG BANG continuous explosion at center
    for (let i = 0; i < 150; i++) { // HUGE central explosion
      bigBangParticles.push(new BigBangParticle(canvas.width / 2, canvas.height / 2))
    }

    // Create burst effect
    function createBurst(x, y, isBigBang = false) {
      const count = isBigBang ? 100 : 70 // More particles
      for (let i = 0; i < count; i++) {
        burstParticles.push(new BurstParticle(x, y, isBigBang))
      }
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)' // Less clearing for more trails
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebula clouds
      nebulaClouds.forEach(cloud => {
        cloud.update()
        cloud.draw()
      })

      // Draw BIG BANG continuous explosion - ALWAYS VISIBLE
      bigBangParticles.forEach(particle => {
        particle.update()
        particle.draw()
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

      // Create periodic bursts MORE FREQUENTLY
      burstTimer++
      if (burstTimer > 60) { // Every second!
        createBurst(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() > 0.7 // 30% chance of big bang burst
        )
        burstTimer = 0
      }

      requestAnimationFrame(animate)
    }

    // Initial MASSIVE burst at center
    createBurst(canvas.width / 2, canvas.height / 2, true)

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
      {/* DRAMATIC animated nebula gradients - MUCH BRIGHTER */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/60 via-blue-600/60 to-cyan-600/60 animate-pulse-slow"></div>

      {/* MASSIVE radial glow effects - HIGHLY VISIBLE */}
      <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-purple-500/50 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-blue-500/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-cyan-500/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-orange-500/40 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Lighter overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omni-dark/20 to-omni-dark/60"></div>
    </div>
  )
}

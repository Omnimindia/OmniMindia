import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useNucleusAnimation } from '../hooks/useNucleusAnimation'

/**
 * Orbiting particle node component
 */
function OrbitingNode({ radius, speed, offset, color }) {
  const ref = useRef()
  
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() * speed + offset
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.y = Math.sin(t * 0.5) * radius * 0.3
    ref.current.position.z = Math.sin(t) * radius
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

/**
 * Main nucleus core with wireframe shell
 */
function NucleusCore({ nucleusRef, isQuerying }) {
  const wireframeRef = useRef()
  const coreRef = useRef()
  
  useFrame((state) => {
    if (!wireframeRef.current || !coreRef.current) return
    
    // Idle rotation (6s per revolution)
    if (!isQuerying) {
      wireframeRef.current.rotation.y += 0.001
      wireframeRef.current.rotation.x += 0.0005
    }
    
    // Emissive pulsate
    const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.5 + 0.5
    if (coreRef.current.material) {
      coreRef.current.material.emissiveIntensity = 0.3 + pulse * 0.4
    }
    
    // Gentle bob
    const bob = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1
    wireframeRef.current.position.y = bob
    coreRef.current.position.y = bob
  })

  useEffect(() => {
    if (nucleusRef) {
      nucleusRef.current = wireframeRef.current
    }
  }, [nucleusRef])

  return (
    <group>
      {/* Wireframe shell */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial 
          color="#FF6A00" 
          wireframe 
          transparent 
          opacity={0.6}
        />
      </mesh>
      
      {/* Emissive core */}
      <mesh ref={coreRef}>
        <Sphere args={[1.5, 32, 32]}>
          <MeshDistortMaterial
            color="#FFA733"
            emissive="#FF6A00"
            emissiveIntensity={0.5}
            distort={0.2}
            speed={2}
            roughness={0.4}
          />
        </Sphere>
      </mesh>
    </group>
  )
}

/**
 * Particle explosion system for big-bang animation
 */
function ParticleExplosion({ active, onComplete }) {
  const particlesRef = useRef()
  const particleCount = 800
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = []
    
    for (let i = 0; i < particleCount; i++) {
      // Start at center
      positions[i * 3] = 0
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = 0
      
      // Random velocity
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const speed = 2 + Math.random() * 3
      
      velocities.push({
        x: Math.sin(phi) * Math.cos(theta) * speed,
        y: Math.sin(phi) * Math.sin(theta) * speed,
        z: Math.cos(phi) * speed,
      })
    }
    
    return { positions, velocities }
  }, [])

  useFrame(() => {
    if (!active || !particlesRef.current) return
    
    const positions = particlesRef.current.geometry.attributes.position.array
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += particles.velocities[i].x * 0.05
      positions[i * 3 + 1] += particles.velocities[i].y * 0.05
      positions[i * 3 + 2] += particles.velocities[i].z * 0.05
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        onComplete?.()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [active, onComplete])

  if (!active) return null

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#FF6A00" 
        transparent 
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

/**
 * Main HeroNucleus component
 * Displays interactive 3D nucleus with query animations
 * Falls back to SVG for reduced motion preference
 */
export default function HeroNucleus({ onQueryComplete }) {
  const nucleusRef = useRef()
  const [isQuerying, setIsQuerying] = useState(false)
  const [showExplosion, setShowExplosion] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  const { startQuery, reset } = useNucleusAnimation()

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const handleStartQuery = () => {
    setIsQuerying(true)
    const timeline = startQuery(nucleusRef)
    
    if (timeline) {
      timeline.eventCallback('onComplete', () => {
        setShowExplosion(true)
      })
    }
  }

  const handleExplosionComplete = () => {
    setShowExplosion(false)
    setIsQuerying(false)
    reset(nucleusRef)
    onQueryComplete?.()
  }

  // Reduced motion fallback: static SVG + progress bar
  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto mb-4">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#FF6A00" strokeWidth="2" opacity="0.6" />
            <circle cx="100" cy="100" r="60" fill="#FFA733" opacity="0.8" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x = 100 + Math.cos(rad) * 90
              const y = 100 + Math.sin(rad) * 90
              return <circle key={i} cx={x} cy={y} r="6" fill="#002B5C" />
            })}
          </svg>
          {isQuerying && (
            <div className="w-48 h-2 bg-omni-gray-100 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-omni-orange to-omni-orange-light animate-pulse" 
                   style={{ width: '70%' }} />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full" style={{ minHeight: '500px' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#002B5C" />
        
        <NucleusCore nucleusRef={nucleusRef} isQuerying={isQuerying} />
        
        {/* Orbiting nodes */}
        <OrbitingNode radius={3} speed={0.5} offset={0} color="#FF6A00" />
        <OrbitingNode radius={3.2} speed={0.4} offset={Math.PI / 2} color="#FFA733" />
        <OrbitingNode radius={2.8} speed={0.6} offset={Math.PI} color="#002B5C" />
        <OrbitingNode radius={3.5} speed={0.35} offset={Math.PI * 1.5} color="#FF6A00" />
        
        <ParticleExplosion active={showExplosion} onComplete={handleExplosionComplete} />
      </Canvas>
      
      {/* Expose trigger for external use */}
      <button
        onClick={handleStartQuery}
        disabled={isQuerying}
        className="sr-only"
        aria-label="Trigger nucleus query animation"
        ref={(el) => {
          if (el) el.dataset.triggerQuery = 'true'
        }}
      />
    </div>
  )
}

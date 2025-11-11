import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Orbiting electron particle
 */
function Electron({ radius, speed, color, offset = 0 }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.y = Math.sin(t * 0.5) * radius * 0.3
    ref.current.position.z = Math.sin(t) * radius
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        toneMapped={false}
      />
    </mesh>
  )
}

/**
 * Central nucleus core
 */
function Nucleus({ isHovered }) {
  const groupRef = useRef()
  const coreRef = useRef()

  useFrame(({ clock }) => {
    // Slow elegant rotation
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.2

    // Pulsing effect on hover
    const scale = isHovered ? 1.1 : 1.0
    coreRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
  })

  return (
    <group ref={groupRef}>
      {/* Central core with glow */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#FF6A00"
          emissive="#FF6A00"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
          toneMapped={false}
        />
      </mesh>

      {/* Inner glow sphere */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial
          color="#FF6A00"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer glow sphere */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#FFA733"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Orbiting electrons - 6 electrons in different orbits */}
      <Electron radius={2} speed={isHovered ? 1.5 : 0.8} color="#22d3ee" offset={0} />
      <Electron radius={2.3} speed={isHovered ? 1.3 : 0.7} color="#a855f7" offset={Math.PI / 3} />
      <Electron radius={2.6} speed={isHovered ? 1.6 : 0.9} color="#10b981" offset={Math.PI / 2} />
      <Electron radius={2.2} speed={isHovered ? 1.4 : 0.75} color="#f97316" offset={Math.PI} />
      <Electron radius={2.5} speed={isHovered ? 1.7 : 0.85} color="#eab308" offset={Math.PI * 1.5} />
      <Electron radius={2.4} speed={isHovered ? 1.5 : 0.8} color="#6366f1" offset={Math.PI / 4} />

      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[2.6, 0.01, 16, 100]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

/**
 * Three.js 3D Nucleus component
 * Elegant rotating nucleus with orbiting electrons
 * Hover interaction accelerates orbit speed
 * Ready for future query → big-bang animation
 */
export default function ThreeNucleus() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

        {/* Nucleus */}
        <Nucleus isHovered={isHovered} />

        {/* Optional: Uncomment for user control */}
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>

      {/* Placeholder indicator for future big-bang animation */}
      <div className="absolute bottom-4 right-4 text-xs text-omni-gray-600 opacity-0 hover:opacity-100 transition-opacity">
        Ready for query → big-bang
      </div>
    </div>
  )
}

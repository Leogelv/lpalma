import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField() {
  const count = 2000
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      temp[i3] = (Math.random() - 0.5) * 25
      temp[i3 + 1] = (Math.random() - 0.5) * 25
      temp[i3 + 2] = (Math.random() - 0.5) * 25
    }
    return temp
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.05
      mesh.current.rotation.y = time * 0.03
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#6366F1"
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
} 
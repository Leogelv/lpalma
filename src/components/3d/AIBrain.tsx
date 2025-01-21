import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Environment, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'

export default function AIBrain() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Более плавное и медленное вращение
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.1
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
      
      // Нежная пульсация
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.3) * 0.03
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <spotLight position={[-5, 5, -5]} intensity={0.5} />

      <TorusKnot ref={meshRef} args={[1, 0.3, 256, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366F1"
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          distort={0.3}
          speed={1.5}
          envMapIntensity={1.5}
        />
      </TorusKnot>

      {/* Внутренняя атмосфера */}
      <Sphere args={[1.8, 64, 64]}>
        <meshBasicMaterial
          color="#EC4899"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Внешняя атмосфера */}
      <Sphere args={[2.2, 64, 64]}>
        <meshBasicMaterial
          color="#6366F1"
          transparent
          opacity={0.01}
          side={THREE.BackSide}
        />
      </Sphere>
    </>
  )
} 
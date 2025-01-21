import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Preload } from '@react-three/drei'
import AIBrain from './3d/AIBrain'
import { ParticleField } from './effects/ParticleField'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white text-gray-900"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
          <Preload all />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80" />

      {/* Основной контент */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Левая колонка */}
          <motion.div className="w-full lg:w-[40%] space-y-8" style={{ y }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-500/5 border border-primary-500/10 shadow-sharp"
            >
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium">
                Будущее уже здесь
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight"
            >
              Получи AI-стратегию за 5 минут
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Наш сервис анализирует данные вашей компании и подсказывает, какие задачи можно автоматизировать с помощью AI уже сейчас.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-6 pt-4">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-lg font-medium 
                         text-white hover:shadow-glow-lg transition-all relative overflow-hidden group whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Провести диагностику</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.div 
                className="text-sm text-gray-500 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Бесплатно • Без регистрации
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Правая колонка с 3D */}
          <div className="w-full lg:w-[55%] aspect-square">
            <motion.div 
              className="w-full h-full scale-125"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.25, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Float
                  speed={4} 
                  rotationIntensity={1} 
                  floatIntensity={2}
                >
                  <AIBrain />
                </Float>
                <OrbitControls enableZoom={false} />
                <Preload all />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 
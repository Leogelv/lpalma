import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const stats = [
  {
    id: 1,
    highlight: '50%',
    description: 'К 2027 году каждая вторая GenAI-модель будет отраслевой',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    highlight: '$4.4T',
    description: 'Вклад AI в мировую экономику к 2030 году составит $2.6-4.4 трлн ежегодно',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    highlight: '6x',
    description: 'Рост инвестиций в AI вырос в 6 раз за 2024 год',
    gradient: 'from-teal-500 to-emerald-500'
  }
]

function AnimatedValue({ value }: { value: string }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true)
    }
  }, [inView, isAnimated])

  return (
    <span ref={ref} className="relative inline-block">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    </span>
  )
}

export function MarketData() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary-500/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                     border border-primary-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-medium">
              Рыночные данные
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8
                     tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI: время действовать
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="relative p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                           hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full group">
                {/* Градиентный фон при наведении */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 
                             transition-opacity duration-300" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

                {/* Цифры */}
                <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.gradient} 
                             bg-clip-text text-transparent mb-4 tracking-tight`}>
                  <AnimatedValue value={stat.highlight} />
                </div>

                {/* Описание */}
                <p className="text-gray-600 font-light leading-relaxed">
                  {stat.description}
                </p>

                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-900/[0.01] to-gray-900/[0.05] rounded-bl-[100px]" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-900/[0.01] to-gray-900/[0.05] rounded-tr-[80px]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-lg font-medium 
                         text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 
                         transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 mx-auto">
            <span className="relative z-10 whitespace-nowrap">Начать внедрение</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 
                       transition-opacity duration-300 group-hover:opacity-100"
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 
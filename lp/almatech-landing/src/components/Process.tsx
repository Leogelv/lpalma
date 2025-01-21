import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Экспресс-стратегия',
    description: 'Получите рейтинг AI-готовности и список зон автоматизации',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Демонстрация',
    description: 'Изучите каталог готовых ассистентов и примеры их работы',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Тендерный модуль',
    description: 'Сформируйте ТЗ и выберите подходящего разработчика',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export function Process() {
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
              Как это работает
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
            Процесс работы
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Линия соединяющая шаги */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 
                       hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {/* Номер шага */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg 
                           flex items-center justify-center text-sm font-medium text-gray-900 border border-gray-100">
                {step.id}
              </div>

              <div className="pt-8 p-6 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                           hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 
                             flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 font-light">
                  {step.description}
                </p>
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
                         transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Начать внедрение
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
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
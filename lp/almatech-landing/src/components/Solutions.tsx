import { motion } from 'framer-motion'

const solutions = [
  {
    id: 1,
    title: 'Закупочный ассистент',
    features: ['Анализ предложений', 'Автоматизация переписки', 'Мониторинг цен'],
    gradient: 'from-blue-500 to-indigo-500',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'HR-ассистент',
    features: ['Сортировка резюме', 'Чат-бот для сотрудников', 'Аналитика текучки'],
    gradient: 'from-purple-500 to-pink-500',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Ассистент контроля',
    features: ['Анализ записей', 'Выявление отклонений', 'Контроль качества'],
    gradient: 'from-teal-500 to-emerald-500',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Диспетчерский ассистент',
    features: ['Работа с заявками', 'Распределение задач', 'Контроль исполнения'],
    gradient: 'from-orange-500 to-red-500',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export function Solutions() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
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
              Готовые решения
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
            AI-ассистенты для бизнеса
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="relative p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 
                           hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full
                           flex flex-col">
                {/* Градиентный фон при наведении */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 
                             transition-opacity duration-300" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                             '--tw-gradient-from': `var(--tw-${solution.gradient.split(' ')[0]})`,
                             '--tw-gradient-to': `var(--tw-${solution.gradient.split(' ')[1]})` }} />

                {/* Иконка */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} 
                             flex items-center justify-center text-white mb-6 
                             group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>

                {/* Контент */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>

                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 font-light">
                        <svg className="w-5 h-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Кнопка тестирования */}
                <button 
                  className={`w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r ${solution.gradient} 
                           text-white font-medium relative overflow-hidden group/btn whitespace-nowrap
                           flex items-center justify-center gap-2`}
                >
                  <span className="relative z-10">Протестировать</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${solution.gradient.includes('blue') ? '#6366F1' : 
                                                            solution.gradient.includes('purple') ? '#EC4899' :
                                                            solution.gradient.includes('teal') ? '#10B981' : 
                                                            '#F97316'}, transparent)`
                    }}
                  />
                </button>

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
            <span className="relative z-10 whitespace-nowrap">Подобрать решение</span>
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
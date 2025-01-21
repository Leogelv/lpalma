import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Как быстро можно начать использовать AI в бизнесе?',
    answer: 'Внедрение AI начинается с экспресс-аудита, который занимает 2-3 дня. После этого вы получаете готовый план действий и можете начать пилотный проект уже через неделю.'
  },
  {
    id: 2,
    question: 'Какой бюджет нужен для старта?',
    answer: 'Мы предлагаем гибкие условия сотрудничества. Начать можно с бесплатного тестирования готовых решений. Пилотные проекты стартуют от 300 тыс. рублей.'
  },
  {
    id: 3,
    question: 'Нужно ли обучать сотрудников?',
    answer: 'Мы создаем интуитивно понятные решения, которые не требуют специальных навыков. При необходимости проводим краткие обучающие сессии для команды.'
  },
  {
    id: 4,
    question: 'Как защищены данные компании?',
    answer: 'Мы используем современные методы шифрования, локальное размещение данных и подписываем NDA. Каждое решение проходит аудит безопасности.'
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[#1E1E1E]">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6 text-[#B47D3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white"
      >
        <p className="pb-6 text-[#4A4A4A] font-light leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  )
}

export function FAQ() {
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
              FAQ
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
            Часто задаваемые вопросы
          </motion.h2>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 
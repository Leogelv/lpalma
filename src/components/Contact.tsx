import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section className="relative py-32 overflow-hidden" id="contact">
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
              Контакты
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
            Свяжитесь с нами
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Форма */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white focus:ring-2 focus:ring-[#B47D3C] 
                         focus:border-[#B47D3C] transition-colors duration-200"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white focus:ring-2 focus:ring-[#B47D3C] 
                         focus:border-[#B47D3C] transition-colors duration-200"
                  placeholder="ivan@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white focus:ring-2 focus:ring-[#B47D3C] 
                         focus:border-[#B47D3C] transition-colors duration-200"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#B47D3C] text-white font-medium rounded-xl hover:bg-[#A06B2C] 
                       transition-all duration-300"
              >
                Отправить сообщение
              </button>
            </form>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            className="lg:pl-12 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Адрес</h3>
              <p className="text-gray-600 font-light">
                г. Москва, ул. Тверская, 1
                <br />
                Бизнес-центр "Премиум"
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Контакты</h3>
              <div className="space-y-3">
                <p className="text-gray-600 font-light flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@almatech.ai
                </p>
                <p className="text-gray-600 font-light flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Время работы</h3>
              <p className="text-gray-600 font-light">
                Пн-Пт: 9:00 - 18:00
                <br />
                Сб-Вс: Выходной
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
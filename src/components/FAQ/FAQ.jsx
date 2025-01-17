import { useState, useRef, useLayoutEffect } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import styles from './FAQ.module.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const sectionRef = useRef(null)
  const shapeRef = useRef(null)

  const questions = [
    {
      question: 'Можно ли подключить нашу существующую CRM?',
      answer: 'Да, наша платформа поддерживает интеграцию с большинством популярных CRM-систем. Мы обеспечиваем бесшовную интеграцию и сохранение всех важных данных.'
    },
    {
      question: 'Безопасно ли загружать данные?',
      answer: 'Мы используем современные методы шифрования и соответствуем всем стандартам безопасности. Ваши данные хранятся в зашифрованном виде и доступны только авторизованным пользователям.'
    },
    {
      question: 'Сколько времени занимает пилотный проект?',
      answer: 'Пилотный проект обычно занимает от 2 до 4 недель в зависимости от сложности. Мы предоставляем полную поддержку на всех этапах внедрения.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы гарантируем возврат средств в течение первых 30 дней использования, если результаты не соответствуют заявленным показателям эффективности.'
    },
    {
      question: 'Проводите ли вы обучение сотрудников?',
      answer: 'Да, мы предоставляем полный курс обучения для ваших сотрудников, включая онлайн-тренинги и документацию. Также доступна техническая поддержка 24/7.'
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация появления вопросов
      gsap.from(`.${styles.faqItem}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        }
      })

      // Анимация плавающей формы
      gsap.to(shapeRef.current, {
        y: 50,
        rotation: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Частые <span className={styles.gradientText}>вопросы</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.faqList}>
            {questions.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <div className={styles.questionWrapper}>
                  <h3 className={styles.question}>{item.question}</h3>
                  <Icon 
                    icon="carbon:chevron-down" 
                    className={styles.icon}
                  />
                </div>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>

          {/*<div className={styles.shapeWrapper}>
            <div ref={shapeRef} className={styles.abstractShape}>
              <div className={styles.shapeGlow}></div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default FAQ 
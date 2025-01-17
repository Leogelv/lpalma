import { Icon } from '@iconify/react'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Solutions.module.css'

const Solutions = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.solutionCard}`, {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const assistants = [
    {
      icon: 'carbon:purchase',
      title: 'Закупочный ассистент',
      features: [
        'Анализ предложений',
        'Автоматизация переписки',
        'Мониторинг цен'
      ]
    },
    {
      icon: 'carbon:user-profile-alt',
      title: 'HR-ассистент',
      features: [
        'Сортировка резюме',
        'Чат-бот для сотрудников',
        'Аналитика текучки'
      ]
    },
    {
      icon: 'carbon:task-complete',
      title: 'Ассистент контроля',
      features: [
        'Анализ записей',
        'Выявление отклонений',
        'Контроль качества'
      ]
    },
    {
      icon: 'carbon:task-view',
      title: 'Диспетчерский ассистент',
      features: [
        'Работа с заявками',
        'Распределение задач',
        'Контроль исполнения'
      ]
    }
  ]

  return (
    <section ref={sectionRef} className={styles.solutions} id="solutions">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Посмотрите, как могут работать <span className={styles.gradientText}>AI-ассистенты</span> в разных департаментах
          </h2>
          <p className={styles.sectionSubtitle}>
            Готовые решения для автоматизации рутинных задач в вашей компании
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {assistants.map((assistant, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.cardIcon}>
                <Icon icon={assistant.icon} />
              </div>
              <h3 className={styles.cardTitle}>{assistant.title}</h3>
              <ul className={styles.featuresList}>
                {assistant.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <Icon icon="carbon:checkmark" className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.demoButton}>
                <span className={styles.buttonText}>Открыть демо</span>
                <div className={styles.buttonGlow}></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions 
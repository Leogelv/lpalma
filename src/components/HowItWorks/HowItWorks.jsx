import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './HowItWorks.module.css'

const HowItWorks = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.stepCard}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Экспресс-стратегия',
      description: 'Получите рейтинг AI-готовности и список зон автоматизации'
    },
    {
      number: '02',
      title: 'Демонстрация',
      description: 'Изучите каталог готовых ассистентов и примеры их работы'
    },
    {
      number: '03',
      title: 'Тендерный модуль',
      description: 'Сформируйте ТЗ и выберите подходящего разработчика'
    }
  ]

  return (
    <section ref={sectionRef} className={styles.howItWorks} id={"how-it-works"}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Как это <span className={styles.gradientText}>работает</span>?
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumberWrapper}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepLine}></div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 
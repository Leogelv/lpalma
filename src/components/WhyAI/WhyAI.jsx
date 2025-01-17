import { Icon } from '@iconify/react'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './WhyAI.module.css'

const WhyAI = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.whyAiCard}`, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          end: 'bottom center',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: 'carbon:partnership',
      title: 'Сложность в поиске подрядчиков и интеграторов',
      description: 'В сфере искусственного интеллекта много шума и завышенных ожиданий. Мы помогаем сосредоточиться на реальных бизнес-задачах, отделяя подлинную ценность от хайпа, и используем data-driven подход'
    },
    {
      icon: 'carbon:analytics',
      title: 'Сложно определить, с чего начать трансформацию',
      description: 'Наша методика опирается на анализ должностей и типовых обязанностей: более 12 000 профессий и 150 000 задач. Это позволяет быстро определить, какие именно процессы в компании принесут максимальный эффект при внедрении'
    },
    {
      icon: 'carbon:roadmap',
      title: 'Нет чёткого плана по внедрению AI',
      description: 'Мы создаем пошаговую стратегию внедрения искусственного интеллекта, учитывающую особенности вашего бизнеса, существующие процессы и доступные ресурсы'
    }
  ]

  return (
    <section ref={sectionRef} className={styles.whyAi} id={"why-ai"}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Почему вам нужна <span className={styles.gradientText}>AI-стратегия</span>?
          </h2>
          <p className={styles.sectionSubtitle}>
            Структурированный подход к внедрению искусственного интеллекта в ваш бизнес
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.whyAiCard}>
              <div className={styles.cardIcon}>
                <Icon icon={feature.icon} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <div className={styles.cardGradient}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAI 
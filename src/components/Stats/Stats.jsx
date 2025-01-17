import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Stats.module.css'

const Stats = () => {
  const sectionRef = useRef(null)
  const numbersRef = useRef(null)

  const stats = [
    {
      number: 40,
      label: 'Ускорение обработки заявок',
      suffix: '%'
    },
    {
      number: 15,
      label: 'Сокращение расходов',
      suffix: '%'
    },
    {
      number: 60,
      label: 'Автоматизация рутинных задач',
      suffix: '%'
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация появления карточек
      gsap.from(`.${styles.statCard}`, {
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

      // Анимация чисел
      const numbers = numbersRef.current.querySelectorAll(`.${styles.number}`)
      numbers.forEach(number => {
        const targetNumber = parseInt(number.getAttribute('data-value'))
        gsap.to(number, {
          innerHTML: targetNumber,
          duration: 2,
          ease: "power1.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: number,
            start: "top center+=100",
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Нам <span className={styles.gradientText}>доверяют</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Компании, которые уже используют наши решения
          </p>
        </div>

        <div ref={numbersRef} className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.numberWrapper}>
                <span 
                  className={styles.number}
                  data-value={stat.number}
                >
                  0
                </span>
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 
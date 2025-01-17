import { useLayoutEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import styles from './Benefits.module.css'

const Benefits = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация чисел
      const numbers = statsRef.current.querySelectorAll(`.${styles.statNumber}`)
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

      // Анимация карточек
      gsap.from(`.${styles.benefitCard}`, {
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

  return (
    <section ref={sectionRef} className={styles.benefits}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.mainCard}>
            <h2 className={styles.title}>
              Отделяем реальную пользу <span className={styles.gradientText}>от хайпа</span>
            </h2>
            <p className={styles.description}>
              В сфере искусственного интеллекта много шума и завышенных ожиданий. 
              Мы помогаем сосредоточиться на реальных бизнес-задачах, отделяя подлинную 
              ценность от хайпа, и используем data-driven подход
            </p>

            <div className={styles.methodology}>
              <p className={styles.methodologyText}>
                Наша методика опирается на анализ должностей и типовых обязанностей: 
                более 12 000 профессий и 150 000 задач. Это позволяет быстро определить, 
                какие именно процессы в компании принесут максимальный эффект при внедрении
              </p>
            </div>
          </div>

          <div ref={statsRef} className={styles.statsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.statIcon}>
                <Icon icon="carbon:user-profile" />
              </div>
              <div className={styles.statNumber} data-value="12000">0</div>
              <div className={styles.statLabel}>профессий в базе</div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.statIcon}>
                <Icon icon="carbon:task" />
              </div>
              <div className={styles.statNumber} data-value="150000">0</div>
              <div className={styles.statLabel}>типовых задач</div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.statIcon}>
                <Icon icon="carbon:growth" />
              </div>
              <div className={styles.statNumber} data-value="300">0</div>
              <div className={styles.statLabel}>% средний рост эффективности</div>
            </div>
          </div>
        </div>

        <div className={styles.visualElements}>
          <div className={styles.dataFlow}></div>
          <div className={styles.glowOrbs}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.orb} style={{ animationDelay: `${i * 0.5}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits 
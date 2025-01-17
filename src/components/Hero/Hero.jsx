import { useLayoutEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import styles from './Hero.module.css'

const Hero = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Начальная timeline для анимации появления
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1
        }
      })

      // Анимация заголовка
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })
      
      // Анимация подзаголовка
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, "-=0.5")
      
      // Анимация описания
      .from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, "-=0.5")

      // Анимация кнопки
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, "-=0.5")

      // Анимация фоновых элементов
      gsap.to(`.${styles.gradientBlob}`, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={`${styles.gradientBlob} ${styles.blob1}`}></div>
        <div className={`${styles.gradientBlob} ${styles.blob2}`}></div>
        <div className={`${styles.gradientBlob} ${styles.blob3}`}></div>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.mainCard}>
            <h1 ref={titleRef} className={styles.title}>
              Получи <span className={styles.gradientText}>AI-стратегию</span>
              <br/>
              за 5 минут
            </h1>
            <p ref={subtitleRef} className={styles.subtitle}>
              Ускорьте трансформацию вашей компании
            </p>
          </div>

          <div className={styles.descriptionCard}>
            <p ref={descriptionRef} className={styles.description}>
              Наш сервис анализирует данные вашей компании и подсказывает, 
              какие задачи можно автоматизировать с помощью AI уже сейчас.
            </p>
          </div>

          <div className={styles.ctaCard}>
            <button 
              ref={buttonRef} 
              className={styles.button}
              onClick={scrollToForm}
            >
              <div className={styles.buttonBg}></div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonText}>
                  Провести диагностику
                </span>
                <Icon 
                  icon="carbon:arrow-right" 
                  className={styles.buttonIcon}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
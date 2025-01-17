import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Stats.module.css'
import gartnerLogo from '/Gartner Logo.svg'
import mcKinseyLogo from '/McKinsey Script Mark 2019.svg'
import menloLogo from '/Menlo Ventures Logo.svg'

const Stats = () => {
  const sectionRef = useRef(null)

  const stats = [
    {
      source: 'Gartner',
      text: 'К 2027 году каждая вторая GenAI-модель будет отраслевой',
      logo: gartnerLogo
    },
    {
      source: 'McKinsey',
      text: 'Вклад AI в мировую экономику к 2030 году составит $2.6-4.4 трлн ежегодно',
      logo: mcKinseyLogo
    },
    {
      source: 'Menlo Ventures',
      text: 'Рост инвестиций в AI вырос в 6 раз за 2024 год',
      logo: menloLogo
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.statCard}`,
        { 
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out'
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            AI: <span className={styles.gradientText}>время действовать</span>
          </h2>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              
              <img src={stat.logo} alt={stat.source} className={styles.logo} />
              <div className={styles.text}>{stat.text}</div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 
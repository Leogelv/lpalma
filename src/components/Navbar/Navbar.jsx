import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '/logo.svg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbarContent}`}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Alma-Tech"/>
        </a>
        <div className={styles.navLinks}>
          <a href="#why-ai" className={styles.navLink}>Почему AI</a>
          <a href="#how-it-works" className={styles.navLink}>Как это работает</a>
          <a href="#solutions" className={styles.navLink}>Решения</a>
        </div>


        <div className={styles.navLinks}>
          <button className={styles.contactButton}>Связаться с нами</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
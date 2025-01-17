import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaPhoneAlt } from 'react-icons/fa'
import logo from '/logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
      <div className="nav-section nav-logo">
          <a href="/public" className="logo">
            <img className={styles.logo} src={logo} alt="Alma-Tech Logo" />
          </a>
        </div>
        {/* Левая часть - навигация */}
        <div className="nav-section nav-links">
          <a href="#why-ai" className="nav-link">Почему AI</a>
          <a href="#how-it-works" className="nav-link">Как это работает</a>
          <a href="#solutions" className="nav-link">Решения</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        {/* Центральная часть - логотип */}
        

        {/* Правая часть - контакты */}
        <div className="nav-section nav-contacts">
          {/*<a href="tel:+77718999999" className="contact-phone">
            <FaPhoneAlt />
            <span>+7 771 899 99 99</span>
          </a>*/}
          <a href={"#form"}>
            <button className="contact-btn">Связаться с нами</button>
          </a>
        </div>

        {/* Мобильное меню */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Мобильная навигация */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#why-ai">Почему AI</a>
            <a href="#how-it-works">Как это работает</a>
            <a href="#solutions">Решения</a>
            <a href="#faq">FAQ</a>
            <a href="tel:+77718999999" className="contact-phone">
              <FaPhoneAlt />
              <span>+7 771 899 99 99</span>
            </a>
            <button className="contact-btn">Связаться с нами</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
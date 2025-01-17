import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={styles.iconWrapper}>
        <Icon 
          icon={theme === 'dark' ? 'carbon:moon' : 'carbon:sun'} 
          className={styles.icon}
        />
      </div>
      <div className={styles.toggleGlow}></div>
    </button>
  )
}

export default ThemeToggle 
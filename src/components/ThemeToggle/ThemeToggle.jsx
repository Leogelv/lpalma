import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
    
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Icon 
        icon={theme === 'light' ? 'carbon:moon' : 'carbon:sun'} 
        className={styles.icon}
      />
      <div className={styles.toggleGlow}></div>
    </button>
  )
}

export default ThemeToggle 
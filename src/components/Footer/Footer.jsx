import { Icon } from '@iconify/react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowSpots}>
        <div className={styles.glowSpot} style={{ '--x': '20%', '--y': '30%' }}></div>
        <div className={styles.glowSpot} style={{ '--x': '80%', '--y': '60%' }}></div>
        <div className={styles.glowSpot} style={{ '--x': '50%', '--y': '70%' }}></div>
      </div>

      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandTitle}>
              <span className={styles.gradientText}>Alma</span>-Tech
            </h3>
            <p className={styles.brandDescription}>
              Ваш надёжный партнер в AI-трансформации бизнеса
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Компания</h4>
            <ul className={styles.linksList}>
              <li><a href="#about">О нас</a></li>
              <li><a href="#blog">Блог</a></li>
              <li><a href="#career">Карьера</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Правовая информация</h4>
            <ul className={styles.linksList}>
              <li><a href="#privacy">Политика конфиденциальности</a></li>
              <li><a href="#terms">Пользовательское соглашение</a></li>
              <li><a href="#usage">Условия использования</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Контакты</h4>
            <ul className={styles.contactsList}>
              <li>
                <Icon icon="carbon:email"/>
                <span>info@alma-tech.kz</span>
              </li>
              <li>
                <Icon icon="carbon:phone"/>
                <span>+7 771 899 9999</span>
              </li>
              <li>
                <Icon icon="carbon:location"/>
                <span>Алматы, ул. Маркова, 44</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2024 Alma-Tech.kz | ЧК Hybrain Ltd. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
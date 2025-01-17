import {useLayoutEffect, useRef, useState} from 'react'
import styles from './Request.module.css'

const Request = ({title, titleSpan}) => {
    const [domain, setDomain] = useState('')
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const particlesRef = useRef([])
    const animationRef = useRef(null)

    const dataPoints = [
        {text: 'AI Score: 89%', size: 'xl', depth: 1},
        {text: 'ROI 250%', size: 'xl', depth: 1},
        {text: 'Efficiency +300%', size: 'xl', depth: 1},

        {text: '12,000+ Tasks', size: 'lg', depth: 1},
        {text: 'Data Analysis', size: 'lg', depth: 1},
        {text: 'AI Strategy', size: 'lg', depth: 1},
        {text: 'Process Mining', size: 'lg', depth: 1},

        {text: 'ML Models', size: 'md', depth: 2},
        {text: 'Deep Learning', size: 'md', depth: 2},
        {text: 'Neural Networks', size: 'md', depth: 2},
        {text: 'Data Science', size: 'md', depth: 2},
        {text: 'Automation', size: 'md', depth: 2},
        {text: 'Smart Analytics', size: 'md', depth: 2},

        {text: 'Optimization', size: 'sm', depth: 3},
        {text: 'AI Integration', size: 'sm', depth: 3},
        {text: 'Machine Learning', size: 'sm', depth: 3},
        {text: 'Big Data', size: 'sm', depth: 3},
        {text: 'NLP', size: 'sm', depth: 3},
        {text: 'Computer Vision', size: 'sm', depth: 3},
        {text: 'Predictive Analytics', size: 'sm', depth: 3},
        {text: 'AI Solutions', size: 'sm', depth: 3},

        {text: 'Data Mining', size: 'xs', depth: 4},
        {text: 'AI Models', size: 'xs', depth: 4},
        {text: 'Algorithms', size: 'xs', depth: 4},
        {text: 'Smart Data', size: 'xs', depth: 4},
        {text: 'ML Ops', size: 'xs', depth: 4},
        {text: 'AI Metrics', size: 'xs', depth: 4}
    ]

    useLayoutEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let particles = []

        const initCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        class Particle {
            constructor(x, y) {
                this.x = x
                this.y = y
                this.size = Math.random() * 2 + 1
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 2 - 1
                this.color = `rgba(153, 98, 0, ${Math.random() * 0.5 + 0.2})`
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.size > 0.2) this.size -= 0.01
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            handleParticles()

            animationRef.current = requestAnimationFrame(animate)
        }

        const handleParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()

                if (particles[i].size <= 0.2) {
                    particles.splice(i, 1)
                    i--
                }
            }
        }

        const createParticles = (e) => {
            const rect = canvas.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            for (let i = 0; i < 5; i++) {
                particles.push(new Particle(x, y))
            }
        }

        initCanvas()
        animate()

        canvas.addEventListener('mousemove', createParticles)
        window.addEventListener('resize', initCanvas)

        return () => {
            canvas.removeEventListener('mousemove', createParticles)
            window.removeEventListener('resize', initCanvas)
            cancelAnimationFrame(animationRef.current)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = 'https://almatech-olive.vercel.app/dashboard'
    }

    return (
        <section id={"form"} ref={containerRef} className={styles.request}>
            <canvas ref={canvasRef} className={styles.particlesCanvas}></canvas>

            <div className={styles.floatingData}>
                {dataPoints.map((point, index) => (
                    <div
                        key={index}
                        className={`${styles.dataPoint} ${styles[point.size]} ${styles[`depth${point.depth}`]}`}
                        style={{
                            '--float-duration': `${Math.random() * 4 + 6}s`,
                            '--float-delay': `${Math.random() * 2}s`,
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`
                        }}
                    >
                        {point.text}
                    </div>
                ))}
            </div>

            <div className={styles.content}>
                <div className={styles.formCard}>
                    <h2 className={styles.title}>
                        {title} <span className={styles.gradientText}>{titleSpan}</span>
                    </h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <p>Введите адрес сайта</p>
                            <input
                                placeholder={'example.com'}
                                type="text"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                className={styles.input}
                            />
                            <div className={styles.inputGlow}></div>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <span className={styles.buttonText}>Провести диагностику</span>
                            <div className={styles.buttonGlow}></div>
                        </button>
                    </form>

                    <div className={styles.aiAnimation}>
                        <div className={styles.pulse}></div>
                        <div className={styles.neurons}>
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className={styles.neuron}
                                    style={{
                                        '--delay': `${Math.random() * 2}s`,
                                        '--duration': `${Math.random() * 2 + 2}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Request 
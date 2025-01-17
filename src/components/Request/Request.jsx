import {useLayoutEffect, useRef} from 'react'
import styles from './Request.module.css'

const Request = ({title, titleSpan}) => {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const animationRef = useRef(null)

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

            <div className={styles.content}>
                <div className={styles.formCard}>
                    <h2 className={styles.title}>
                        {title} <span className={styles.gradientText}>{titleSpan}</span>
                    </h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <p>Введите адрес сайта</p>
                            <input
                                value="kaspi.kz"
                                readOnly
                                className={styles.input}
                            />
                            <div className={styles.inputGlow}></div>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <span className={styles.buttonText}>Провести диагностику</span>
                            <div className={styles.buttonGlow}></div>
                        </button>
                    </form>

                   {/* <div className={styles.aiAnimation}>
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
                    </div>*/}
                </div>
            </div>
        </section>
    )
}

export default Request 
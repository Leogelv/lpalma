import 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import WhyAI from './components/WhyAI/WhyAI.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Solutions from './components/Solutions/Solutions.jsx'
import Stats from './components/Stats/Stats.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Footer from './components/Footer/Footer.jsx'
import Benefits from "./components/Benefits/Benefits.jsx";
import Request from "./components/Request/Request.jsx";
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {
    return (
        <div className="app">
            <Navbar/>
            <Hero/>
            <WhyAI/>
            <Benefits/>
            <HowItWorks/>
            <Request title={"Получить"} titleSpan={"экспресс-отчет"}/>
            <Solutions/>
            <Stats/>
            <FAQ/>
            <Request title={"Начните путь к "} titleSpan={"AI-трансформации"}/>
            <Footer/>
            <ThemeToggle />
        </div>
    )
}

export default App 
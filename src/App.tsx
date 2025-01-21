import Hero from './components/Hero'
import { Challenges } from './components/Challenges'
import { Advantages } from './components/Advantages'
import { Process } from './components/Process'
import { Solutions } from './components/Solutions'
import { MarketData } from './components/MarketData'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'

function App() {
  return (
    <main className="w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <Challenges />
      <Advantages />
      <Process />
      <Solutions />
      <MarketData />
      <FAQ />
      <Contact />
    </main>
  )
}

export default App

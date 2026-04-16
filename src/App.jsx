import Nav from './components/Nav.jsx'
import BitcoinRain from './components/BitcoinRain.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import SplitSats from './components/SplitSats.jsx'
import SatsPacket from './components/SatsPacket.jsx'
import Stats from './components/Stats.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <BitcoinRain />
      <Nav />
      <main>
        <Hero />
        <Features />
        <SplitSats />
        <SatsPacket />
        <Stats />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

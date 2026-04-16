import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import BitcoinRain from './components/BitcoinRain.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import SplitSats from './components/SplitSats.jsx'
import SatsPacket from './components/SatsPacket.jsx'
import Stats from './components/Stats.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import Terms from './components/Terms.jsx'

function getPage() {
  const hash = window.location.hash
  if (hash === '#privacy-policy') return 'privacy'
  if (hash === '#terms') return 'terms'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onChange = () => {
      setPage(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return (
    <>
      <BitcoinRain />
      <Nav />
      {page === 'privacy' ? (
        <main>
          <PrivacyPolicy />
        </main>
      ) : page === 'terms' ? (
        <main>
          <Terms />
        </main>
      ) : (
        <main>
          <Hero />
          <Features />
          <SplitSats />
          <SatsPacket />
          <Stats />
          <CtaBanner />
        </main>
      )}
      <Footer />
    </>
  )
}

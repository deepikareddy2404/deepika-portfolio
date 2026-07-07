import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import SectionDots from './components/layout/SectionDots.jsx'
import { ScrollProgress, ScrollToTop, LoadingScreen } from './components/layout/ScrollChrome.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar />
      <SectionDots />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
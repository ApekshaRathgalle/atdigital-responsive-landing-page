import Header from './components/header'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
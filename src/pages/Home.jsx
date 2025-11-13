import Header from '../components/Header'
import Hero from '../components/Hero'
import ParallaxSection from '../components/ParallaxSection'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <ParallaxSection />
      <Projects />
      <Experience />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home


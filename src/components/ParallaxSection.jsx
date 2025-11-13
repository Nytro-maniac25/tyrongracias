import { useEffect, useRef, useState } from 'react'
import './ParallaxSection.css'

const ParallaxSection = () => {
  const sectionRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight && rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="parallax-section">
      <div className="parallax-container">
        <div className="curved-transition"></div>
        <div className="parallax-content">
          <div 
            className="parallax-text"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <p>I DESIGN INTERACTIVE EXPERIENCES</p>
            <p>THAT BREAK AWAY FROM STERILE PATTERNS,</p>
            <p>REINTRODUCING DELIGHT AND GENUINE</p>
            <p>ENGAGEMENT INTO EVERYDAY TECHNOLOGY</p>
          </div>
        </div>
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="pixel-shape"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection


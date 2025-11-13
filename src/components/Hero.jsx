import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: false,
      alpha: true
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(2)
    
    sceneRef.current = { scene, camera, renderer }

    // Create pixelated particles
    const particles = []
    const particleCount = 500
    
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
      const material = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5)
      })
      const particle = new THREE.Mesh(geometry, material)
      
      particle.position.x = (Math.random() - 0.5) * 20
      particle.position.y = (Math.random() - 0.5) * 20
      particle.position.z = (Math.random() - 0.5) * 20
      
      particle.userData = {
        speed: Math.random() * 0.02 + 0.01,
        rotationSpeed: Math.random() * 0.02
      }
      
      scene.add(particle)
      particles.push(particle)
    }

    camera.position.z = 5

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1
      
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      
      particles.forEach(particle => {
        particle.rotation.x += particle.userData.rotationSpeed
        particle.rotation.y += particle.userData.rotationSpeed
        particle.position.y += particle.userData.speed
        if (particle.position.y > 10) {
          particle.position.y = -10
        }
      })
      
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      particles.forEach(particle => {
        particle.geometry.dispose()
        particle.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="pixel-character">
          <div className="character-body">
            <div className="character-head">
              <div className="glasses"></div>
            </div>
            <div className="speech-bubble">
              <span>OPEN TO WORK!</span>
            </div>
          </div>
        </div>
        <div className="hero-name">
          <span className="name-part">TYRON</span>
          <span className="name-part">GRACIAS</span>
        </div>
      </div>
      <div className="hero-footer">
        <p>Digital Product Designer</p>
        <p>Dubai, UAE</p>
      </div>
    </section>
  )
}

export default Hero


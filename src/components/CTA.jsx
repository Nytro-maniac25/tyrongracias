import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './CTA.css'

const CTA = () => {
  const canvasRef = useRef(null)
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

    // Create animated fish-like particles
    const fishes = []
    const fishCount = 100
    
    for (let i = 0; i < fishCount; i++) {
      const geometry = new THREE.BoxGeometry(0.2, 0.1, 0.1)
      const material = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5)
      })
      const fish = new THREE.Mesh(geometry, material)
      
      fish.position.x = (Math.random() - 0.5) * 30
      fish.position.y = (Math.random() - 0.5) * 30
      fish.position.z = (Math.random() - 0.5) * 30
      
      fish.userData = {
        speed: Math.random() * 0.05 + 0.02,
        direction: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize()
      }
      
      scene.add(fish)
      fishes.push(fish)
    }

    camera.position.z = 5

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      
      fishes.forEach(fish => {
        fish.position.add(fish.userData.direction.clone().multiplyScalar(fish.userData.speed))
        
        // Boundary check
        if (Math.abs(fish.position.x) > 15) fish.userData.direction.x *= -1
        if (Math.abs(fish.position.y) > 15) fish.userData.direction.y *= -1
        if (Math.abs(fish.position.z) > 15) fish.userData.direction.z *= -1
        
        fish.rotation.y = Math.atan2(fish.userData.direction.x, fish.userData.direction.z)
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
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      fishes.forEach(fish => {
        fish.geometry.dispose()
        fish.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <section className="cta-section">
      <canvas ref={canvasRef} className="cta-canvas" />
      <div className="cta-content">
        <h2 className="cta-title">LET'S BUILD TOGETHER</h2>
        <div className="cta-buttons">
          <Link to="/start-a-project" className="cta-button primary">
            START A PROJECT
          </Link>
          <a href="mailto:tyron@example.com" className="cta-button secondary">
            SAY HI
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA


import { useEffect, useState } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const checkHover = (e) => {
      const target = e.target
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.cta-button') ||
        target.closest('.tab') ||
        target.closest('.project-card') ||
        target.closest('.contact-link')
      
      setIsHovering(isClickable)
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mousemove', checkHover)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mousemove', checkHover)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isHovering ? 'cursor-glove' : 'cursor-arrow'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CustomCursor


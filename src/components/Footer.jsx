import { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    // Set last updated date
    const buildDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setLastUpdated(buildDate)

    // Update time for Dubai, UAE
    const updateTime = () => {
      const dubaiTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      })
      setCurrentTime(dubaiTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-location">DUBAI, UAE</p>
        <p className="footer-time">{currentTime}</p>
        <p className="footer-updated">Last updated: {lastUpdated}</p>
      </div>
    </footer>
  )
}

export default Footer


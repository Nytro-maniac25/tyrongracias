import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ProjectForm.css'

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    needs: [],
    timeframe: '',
    additional: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        needs: checked
          ? [...prev.needs, value]
          : prev.needs.filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! Your project request has been submitted.')
  }

  return (
    <div className="project-form-page">
      <Header />
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">START A PROJECT</h1>
          <p className="form-tagline">Share your vision — I'll take it from there</p>
        </div>
        
        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-section">
            <h2 className="section-title">YOUR INFO</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">YOUR BUSINESS</h2>
            <div className="form-group">
              <label htmlFor="business">What do you do?</label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">WHAT NEEDS TO BE DONE?</h2>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="needs"
                  value="User Experience"
                  checked={formData.needs.includes('User Experience')}
                  onChange={handleChange}
                />
                <span>(User Experience)</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="needs"
                  value="Brand / Identity"
                  checked={formData.needs.includes('Brand / Identity')}
                  onChange={handleChange}
                />
                <span>(Brand / Identity)</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="needs"
                  value="Motion / Interaction"
                  checked={formData.needs.includes('Motion / Interaction')}
                  onChange={handleChange}
                />
                <span>(Motion / Interaction)</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="needs"
                  value="Other"
                  checked={formData.needs.includes('Other')}
                  onChange={handleChange}
                />
                <span>(Other)</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">IDEAL TIMEFRAME</h2>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="timeframe"
                  value="ASAP"
                  checked={formData.timeframe === 'ASAP'}
                  onChange={handleChange}
                />
                <span>(ASAP)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="timeframe"
                  value="2 - 4 weeks"
                  checked={formData.timeframe === '2 - 4 weeks'}
                  onChange={handleChange}
                />
                <span>(2 - 4 weeks)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="timeframe"
                  value="1–2 months"
                  checked={formData.timeframe === '1–2 months'}
                  onChange={handleChange}
                />
                <span>(1–2 months)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="timeframe"
                  value="Just exploring"
                  checked={formData.timeframe === 'Just exploring'}
                  onChange={handleChange}
                />
                <span>(Just exploring)</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">ANYTHING ELSE I NEED TO KNOW?</h2>
            <div className="form-group">
              <textarea
                id="additional"
                name="additional"
                value={formData.additional}
                onChange={handleChange}
                placeholder="Type here"
                rows="6"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectForm


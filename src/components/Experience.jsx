import './Experience.css'

const Experience = () => {
  const skills = [
    'UX / UI',
    'MOBILE DESIGN',
    'WEB DESIGN',
    'VISUAL DESIGN',
    'MOTION DESIGN',
    'PRODUCT MINDSET',
    'DESIGN SYSTEMS',
    'USER RESEARCH',
    'ACCESSIBILITY',
    'PROTOTYPING',
    'NO-CODE'
  ]

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">4 YEARS IN DESIGN</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
        <div className="floating-elements">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`floating-element ${i % 3 === 0 ? 'mario-block' : 'stamp'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


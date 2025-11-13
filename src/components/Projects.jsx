import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('UX/UI')

  const tabs = ['UX/UI', 'WEB', 'MOTION', 'VISUAL', 'EXPERIMENTAL']
  
  const projects = {
    'UX/UI': [
      { id: 1, title: 'Project One', category: 'UX/UI' },
      { id: 2, title: 'Project Two', category: 'UX/UI' },
    ],
    'WEB': [
      { id: 3, title: 'Web Project One', category: 'WEB' },
      { id: 4, title: 'Web Project Two', category: 'WEB' },
    ],
    'MOTION': [
      { id: 5, title: 'Motion Project One', category: 'MOTION' },
    ],
    'VISUAL': [
      { id: 6, title: 'Visual Project One', category: 'VISUAL' },
    ],
    'EXPERIMENTAL': [
      { id: 7, title: 'Experimental Project', category: 'EXPERIMENTAL' },
    ],
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">SELECTED WORK</h2>
        <div className="projects-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {projects[activeTab]?.map(project => (
            <div key={project.id} className="project-card">
              <div className="card-background">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="pixel-art"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.3
                    }}
                  />
                ))}
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectForm from './pages/ProjectForm'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-a-project" element={<ProjectForm />} />
      </Routes>
    </Router>
  )
}

export default App


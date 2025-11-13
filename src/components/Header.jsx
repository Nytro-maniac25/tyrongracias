import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-contact">
        <a href="mailto:tyron@example.com" className="contact-link">EMAIL</a>
        <span className="separator">·</span>
        <a href="https://linkedin.com/in/tyron" target="_blank" rel="noopener noreferrer" className="contact-link">LINKEDIN</a>
      </div>
    </header>
  )
}

export default Header


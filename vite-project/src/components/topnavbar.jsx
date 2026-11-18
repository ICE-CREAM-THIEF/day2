import { Link } from 'react-router-dom'
import './topnavbar.css'

function TopNavbar() {
  return (
    <nav className="navbar">
        <ul>
            <li><Link className="bl" to="/">Home</Link></li>
            <li><Link to="/me">me</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resources">Resources</Link></li>
        </ul>
    </nav>
  )
}

export default TopNavbar
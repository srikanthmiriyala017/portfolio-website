import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <h1 className="name">Madelyn Torff</h1>
    <ul>
      <li>
        <Link to="/">
          <p className="nav">About</p>
        </Link>
      </li>
      <li>
        <Link className="navb" to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="nav" to="/">
          Contacts
        </Link>
      </li>
    </ul>
  </div>
)

export default Header

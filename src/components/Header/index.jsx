import { Link } from 'react-router'
import Dlogo from '../../assets/Dlogo.png'

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={Dlogo} />
      </Link>
      <Link to="/">Accueil</Link>
      <Link to="/AboutUs">A Propos</Link>
    </nav>
  )
}

export default Header

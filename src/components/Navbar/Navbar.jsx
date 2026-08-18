import './Navbar.css';
import Button from '../button/Button';
import Logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="page-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={Logo} alt="Pokko Edits Logo" />
          </div>
          <div className="nav-name">POKKO EDITS</div>
        </div>

        {/* Lado Direito */}
        <div className="nav-right">
          <Button variant="primary">Discord</Button>
          <Button variant="secundary">WhatsApp</Button>
        </div>
      </div>
    </nav>
  );
}
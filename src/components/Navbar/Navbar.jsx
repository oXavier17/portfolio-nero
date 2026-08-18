import './Navbar.css';
import Button from '../button/Button';
import Logo from '../../assets/logo.png'
import { SITE_CONFIG } from '../../data/siteConfig';

export default function Navbar() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl('');

  return (
    <nav className="navbar">
      <div className="page-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={Logo} alt="Pokko Edits Logo" />
          </div>
          <div className="nav-name">POKKO EDITS</div>
        </div>

        <div className="nav-right">
          <Button variant="primary" href="https://discord.com/users/616111535957344427"> Discord </Button>
          <Button variant="secundary" href={whatsappUrl}> WhatsApp </Button>
        </div>
      </div>
    </nav>
  );
}
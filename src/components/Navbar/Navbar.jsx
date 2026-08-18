import './Navbar.css';
import Button from '../button/Button';
import Logo from '../../assets/logo.png'

export default function Navbar() {
  const numWhatsapp = '556492216099';
  const msgWhatsapp = encodeURIComponent('Olá! Preciso de ajuda.');

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
          <Button variant="primary" href="https://discord.gg/SEU_CONVITE"> Discord </Button>
          <Button variant="secundary" href={`https://wa.me/${numWhatsapp}?text=${msgWhatsapp}`}> WhatsApp </Button>
        </div>
      </div>
    </nav>
  );
}
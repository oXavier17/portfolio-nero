import './Footer.css';
import Button from '../button/Button';
import { SITE_CONFIG } from '../../data/siteConfig';

export default function Footer() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl('');

  return (
    <footer>
      <div className="page-middle">
        <div className="footer-header">
          VAMOS TRABALHAR JUNTOS
        </div>
        
        <div className="footer-title">
          Seu próximo vídeo pode ser o que viraliza.
        </div>
        
        {/* Container exclusivo para os botões */}
        <div className="footer-buttons">
          <Button variant="secundary" href={whatsappUrl}> WhatsApp </Button>
          <Button variant="primary" href="https://discord.com/users/616111535957344427"> Discord </Button>
        </div>
        
        <div className="footer-foot">
          POKKO EDITS © 2026 — EDIÇÃO VERTICAL PARA CRIADORES
        </div>
      </div>
    </footer>
  );
}
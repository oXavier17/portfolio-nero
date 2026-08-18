import './Footer.css';
import Button from '../button/Button';

export default function Footer() {
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
          <Button variant="primary">Chamar no WhatsApp</Button>
          <Button variant="secundary">Chamar no Discord</Button>
        </div>
        
        <div className="footer-foot">
          POKKO EDITS © 2026 — EDIÇÃO VERTICAL PARA CRIADORES
        </div>
      </div>
    </footer>
  );
}
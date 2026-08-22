import './Footer.css';
import Button from '../button/Button';
import { SITE_CONFIG } from '../../data/siteConfig';

export default function Footer() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl('Olá! Gostaria de fazer um orçamento para edições.');

  return (
    <footer>
      <div className="page-container">
        
        <div className="footer-header">
          PRONTO PARA VIRALIZAR?
        </div>

        <h2 className="footer-title">
          Bora transformar seus vídeos num motor de atração.
        </h2>

        <div className="footer-buttons">
          <Button 
            variant="primary" 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="large"
          >
            Chamar no WhatsApp
          </Button>

          <Button 
            variant="secundary" 
            href="https://discord.com/users/616111535957344427"
            target="_blank"
            rel="noopener noreferrer"
            className="large"
          >
            Discord
          </Button>
        </div>

        <div className="footer-foot">
          © {new Date().getFullYear()} Feito por oXavier. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
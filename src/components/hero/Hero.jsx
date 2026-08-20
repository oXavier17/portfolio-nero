import './Hero.css';
import Button from '../button/Button';
import { SITE_CONFIG } from '../../data/siteConfig';

// Importando os GIFs da pasta assets
import gifPhone1 from '../../assets/gif1.gif';
import gifPhone2 from '../../assets/gif2.gif';
import gifPhone3 from '../../assets/gif3.gif';

export default function Hero() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl('');

  return (
    <header className="hero">
      <div className="page-container">
        <div className="hero-grid">
          {/* Lado Esquerdo: Conteúdo */}
          <div className="hero-content">
            <div className="eyebrow">
              POKKO EDITS — EDIÇÃO VERTICAL PARA CRIADORES
            </div>
            <h1>
              Transformo gravação bruta em <em>conteúdo que viraliza</em>.
            </h1>
            <p className="sub">
              Edição de vídeos verticais para criadores, marcas e profissionais que querem parar de rolar despercebidos no feed.
            </p>
            <div className="hero-ctas">
              <Button variant="secundary" href={whatsappUrl}> WhatsApp </Button>
            </div>
          </div>

          {/* Lado Direito: Pilha de Celulares */}
          <div className="phone-stack">
            <div className="phone p1">
              <img src={gifPhone1} alt="Preview de vídeo editado 1" className="phone-media" />
            </div>
            <div className="phone p2">
              <img src={gifPhone2} alt="Preview de vídeo editado 2" className="phone-media" />
            </div>
            <div className="phone p3">
              <img src={gifPhone3} alt="Preview de vídeo editado 3" className="phone-media" />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
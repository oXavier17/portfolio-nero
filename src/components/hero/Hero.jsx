import './Hero.css';
import Button from '../button/Button';

export default function Hero() {
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
              <Button variant="secundary" large>Falar no WhatsApp</Button>
              <Button variant="primary">Ver portfólio</Button>
            </div>
          </div>

          {/* Lado Direito: Pilha de Celulares */}
          <div className="phone-stack">
            <div className="phone p1">
              <div className="label">vídeo do fulano<br />#reels</div>
            </div>
            <div className="phone p2">
              <div className="label">vídeo de tal coisa<br />#viral</div>
            </div>
            <div className="phone p3">
              <div className="label">vídeo do fulano<br />#shorts</div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
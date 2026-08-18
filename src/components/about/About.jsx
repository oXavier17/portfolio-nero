import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="page-container">
        <div className="about-grid">
          
          {/* Coluna da Esquerda: Eyebrow + Título + Bio */}
          <div className="about-left">
            <div className="eyebrow">
              <span className="dot"></span>
              <span>SOBRE</span>
            </div>

            <h1>Edição pensada pra retenção, não só pra estética.</h1>

            <p className="about-bio">
              Sou o Gerson, editor por trás da Pokko Edits. Trabalho com ritmo, corte 
              e legenda pra transformar gravação bruta em vídeo que segura 
              audiência até o fim — pra criadores, marcas e profissionais que vivem 
              de atenção.
            </p>
          </div>

          {/* Coluna da Direita: Contador / Destaque com Borda */}
          <div className="about-right">
            <h3>+30</h3>
            <p className="mono">
              PROJETOS ENTREGUES ENTRE CRIADORES, MARCAS E NICHOS DIFERENTES
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
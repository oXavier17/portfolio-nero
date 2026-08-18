import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="page-container">
        
        {/* Cabeçalho da Seção */}
        <div className="eyebrow">
          <h2>Sobre</h2>
        </div>

        <div className='about-header'>
          <h1>Edição pensada pra retenção, não só pra estética.</h1>
        </div>

        {/* Conteúdo Principal */}
        <div className="about-content">
          
          {/* Coluna da Esquerda: Bio e Métricas */}
          <div className="about-text">
            <p className="about-bio">
              Sou o Gerson, editor por trás da Pokko Edits. Trabalho com ritmo, corte e 
              legenda pra transformar gravação bruta em vídeo que segura audiência até o 
              fim — pra criadores, marcas e profissionais que vivem de atenção.
            </p>
          </div>

          {/* Coluna da Direita: Card Visual / Destaque */}
          <div className="about-right">
            <h3>+30</h3>
            <p>
              PROJETOS ENTREGUES ENTRE CRIADORES, MARCAS E NICHOS DIFERENTES
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
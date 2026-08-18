import './Package.css';
import Button from '../button/Button';
import { packagesData } from '../../data/packagesData';

export default function Package() {
  return (
    <section className="package">
      <div className="page-container">
        
        {/* Cabeçalho Ajustado (sem page-middle e com nova classe) */}
        <div className="pkg-header">
          <h2>Pacotes</h2>
          <p className="mono">ESTRUTURA SUGERIDA — VALORES E FORMATOS SOB CONSULTA</p>
        </div>

        {/* Grid de Cards */}
        <div className="pkg-grid">
          {packagesData.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pkg-card ${pkg.featured ? 'featured' : ''}`}
            >
              <div className="pkg-name">{pkg.name}</div>
              <div className="pkg-card-title">{pkg.title}</div>
              <div className="pkg-desc">{pkg.desc}</div>
              
              <Button variant={pkg.btnVariant}>
                {pkg.btnText}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
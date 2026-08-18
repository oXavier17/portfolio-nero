import './Package.css';
import Button from '../button/Button';
import { packagesData } from '../../data/packagesData';
import { SITE_CONFIG } from '../../data/siteConfig';

export default function Package() {
  return (
    <section className="package">
      <div className="page-container">
        
        {/* Cabeçalho */}
        <div className="pkg-header">
          <h2>Pacotes</h2>
        </div>

        {/* Grid de Cards */}
        <div className="pkg-grid">
          {packagesData.map((pkg) => {
            // Gera a URL do WhatsApp dinamicamente para cada pacote
            const whatsappUrl = SITE_CONFIG.getWhatsappUrl(pkg.whatsappMessage);

            return (
              <div 
                key={pkg.id} 
                className={`pkg-card ${pkg.featured ? 'featured' : ''}`}
              >
                <div className="pkg-name">{pkg.name}</div>
                <div className="pkg-card-title">{pkg.title}</div>
                <div className="pkg-desc">{pkg.desc}</div>
                
                <Button 
                  variant={pkg.btnVariant}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pkg.btnText}
                </Button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
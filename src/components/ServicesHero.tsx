
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gold/5 to-white"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            🚀 NOS SERVICES DIGITAUX
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Services Web Rouen : Développement et Référencement SEO
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Notre agence web à Rouen accompagne les PME et startups de Normandie dans leur transformation digitale. Création de sites internet sur mesure, applications web PWA, référencement SEO et formation développement web pour propulser votre entreprise vers le succès.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 rounded-full text-base font-medium animate-fade-down opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

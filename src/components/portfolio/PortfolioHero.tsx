
import React from "react";

const PortfolioHero = () => {
  return (
    <section className="pt-32 pb-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gold/5 to-white"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            NOTRE PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Nos réalisations
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Découvrez une sélection de projets que nous avons réalisés pour nos clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;

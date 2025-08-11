
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About = () => {
  const strengths = [
    "Design sur mesure et responsive",
    "Optimisation pour les moteurs de recherche",
    "Accompagnement personnalisé",
    "Équipe de professionnels passionnés"
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              À PROPOS DE NOUS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Agence Web Rouen : Expertise en Développement Web Sur Mesure
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              EASE GROWTH est votre agence web à Rouen spécialisée dans la création de sites internet sur mesure, le référencement SEO et la formation en développement web. Notre équipe de professionnels passionnés accompagne les entreprises locales dans leur transformation digitale.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Nous croyons qu'un site web performant doit être à la fois esthétique et fonctionnel, tout en reflétant l'identité unique de votre entreprise. C'est pourquoi nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et créer des solutions sur mesure.
            </p>

            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5 bg-gold/10 rounded-full p-1">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-gray-700">{strength}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-black text-white hover:bg-gold hover:text-black transition-colors duration-300 rounded-full animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              En savoir plus sur nous
            </Link>
          </div>

          <div className="relative order-1 lg:order-2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="relative overflow-hidden rounded-2xl bg-black/5 aspect-[4/3]">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-gold/10 to-transparent"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full filter blur-xl"></div>
              
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Équipe EASE GROWTH en réunion"
                className="relative z-10 rounded-2xl object-cover w-full h-full"
              />

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 sm:bottom-5 sm:left-5 glass-card p-4 rounded-xl max-w-[80%] sm:max-w-[60%] z-20 shadow-xl border border-white/30">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium">En ligne depuis 2024</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xl font-bold">+5</div>
                    <div className="text-xs text-gray-500">Projets</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">+5</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Footer top with CTA */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre projet avec EASE GROWTH ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour transformer votre vision en réalité.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gold text-black hover:bg-white transition-colors duration-300 rounded-full text-base font-medium"
          >
            Démarrer un projet
          </Link>
        </div>

        {/* Footer main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold">
                EASE<span className="text-gold">GROWTH</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Agence de création de sites web et formation, nous accompagnons les entreprises dans leur transformation digitale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {["Création de site web", "Design UI/UX", "Formation web", "Marketing digital"].map((item, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Liens utiles</h3>
            <ul className="space-y-4">
              {[
                { name: "Portfolio", path: "/portfolio" },
                { name: "À propos", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>contact@easegrowth.fr</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container mx-auto px-6 py-6 border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EASE GROWTH. Tous droits réservés.
          </div>

          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 p-3 bg-gold/20 hover:bg-gold/30 text-gold rounded-full transition-colors z-20"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;

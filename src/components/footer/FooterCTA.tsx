
import { Link } from "react-router-dom";

const FooterCTA = () => {
  return (
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
  );
};

export default FooterCTA;

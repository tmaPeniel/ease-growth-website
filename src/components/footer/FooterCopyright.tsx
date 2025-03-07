
import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
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
  );
};

export default FooterCopyright;

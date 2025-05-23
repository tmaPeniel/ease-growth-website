
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSocials = () => {
  return (
    <div>
      <Link to="/" className="inline-block mb-6">
        <img 
          src="/lovable-uploads/d931a4c5-2978-4a6a-9429-18ed20c55960.png" 
          alt="EASE GROWTH Logo" 
          className="h-10"
        />
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
  );
};

export default FooterSocials;

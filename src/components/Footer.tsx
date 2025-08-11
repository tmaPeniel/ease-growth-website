
import { Link } from "react-router-dom";
import FooterCTA from "./footer/FooterCTA";
import FooterSocials from "./footer/FooterSocials";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";
import BackToTop from "./footer/BackToTop";
import FooterCopyright from "./footer/FooterCopyright";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Services links data
  const servicesLinks = [
    { name: "Création de site web", path: "/services" },
    { name: "Formation web", path: "/services" },
    { name: "Web marketing (SEO et SEA)", path: "/services" }
  ];

  // Utility links data
  const utilityLinks = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "À propos", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Plan du site", path: "/sitemap" }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Footer top with CTA */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <FooterCTA />

        {/* Footer main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          <FooterSocials />
          <FooterLinks title="Services" links={servicesLinks} />
          <FooterLinks title="Liens utiles" links={utilityLinks} />
          <FooterContact />
        </div>
      </div>

      {/* Footer bottom */}
      <FooterCopyright />

      {/* Back to top button */}
      <BackToTop onClick={scrollToTop} />

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;

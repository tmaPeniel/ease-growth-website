import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ExternalLink, FileText, Home, Info, Mail, PenTool, Settings } from "lucide-react";

const SiteMapPage = () => {
  const siteStructure = [
    {
      title: "Pages principales",
      icon: <Home className="w-5 h-5" />,
      pages: [
        { name: "Accueil", path: "/", description: "Page d'accueil - Présentation d'EASE GROWTH" },
        { name: "Services", path: "/services", description: "Nos services web et formations digitales" },
        { name: "Portfolio", path: "/portfolio", description: "Nos réalisations et projets clients" },
        { name: "À propos", path: "/about", description: "Qui sommes-nous, notre mission et valeurs" },
        { name: "Contact", path: "/contact", description: "Nous contacter pour vos projets" }
      ]
    },
    {
      title: "Blog & Actualités",
      icon: <PenTool className="w-5 h-5" />,
      pages: [
        { name: "Blog", path: "/blog", description: "Articles sur le développement web et la formation" },
        { name: "Articles récents", path: "/blog", description: "Derniers articles publiés" }
      ]
    },
    {
      title: "Services détaillés",
      icon: <Settings className="w-5 h-5" />,
      pages: [
        { name: "Création de sites web", path: "/services#web-creation", description: "Développement de sites internet sur mesure" },
        { name: "Applications web", path: "/services#web-apps", description: "Développement d'applications web complexes" },
        { name: "Formations digitales", path: "/services#formations", description: "Formations en développement et marketing digital" },
        { name: "Refonte de sites", path: "/services#refonte", description: "Modernisation de sites existants" },
        { name: "Hébergement web", path: "/services#hosting", description: "Solutions d'hébergement performantes" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Plan du Site
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explorez toutes les pages et services d'EASE GROWTH. 
              Trouvez rapidement l'information que vous recherchez.
            </p>
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:gap-16">
            {siteStructure.map((section, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="group">
                      <Link 
                        to={page.path}
                        className="block p-6 bg-gray-50 hover:bg-gold/5 rounded-lg transition-all duration-300 border border-transparent hover:border-gold/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gold transition-colors">
                            {page.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {page.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Links */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Liens utiles
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">
                  Demander un devis
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/blog" className="text-gray-600 hover:text-gold transition-colors">
                  Actualités
                </Link>
                <span className="text-gray-300">•</span>
                <a href="/sitemap.xml" className="text-gray-600 hover:text-gold transition-colors">
                  Sitemap XML
                </a>
                <span className="text-gray-300">•</span>
                <a href="/robots.txt" className="text-gray-600 hover:text-gold transition-colors">
                  Robots.txt
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SiteMapPage;
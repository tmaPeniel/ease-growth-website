import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbLabel = (pathname: string): string => {
    const labels: { [key: string]: string } = {
      services: "Services Web",
      portfolio: "Portfolio",
      about: "À Propos",
      contact: "Contact",
      blog: "Blog"
    };
    return labels[pathname] || pathname;
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Accueil", path: "/" },
    ...pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      return {
        label: getBreadcrumbLabel(name),
        path: index === pathnames.length - 1 ? undefined : path
      };
    })
  ];

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="py-4 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {item.path ? (
                <Link 
                  to={item.path} 
                  className="text-gray-600 hover:text-gold transition-colors flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
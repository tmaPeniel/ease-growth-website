import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  
  const getPageName = (path: string): string => {
    const pageNames: { [key: string]: string } = {
      '/': 'Accueil',
      '/services': 'Services',
      '/portfolio': 'Portfolio',
      '/blog': 'Blog',
      '/about': 'À propos',
      '/contact': 'Contact'
    };
    
    // Handle blog articles
    if (path.startsWith('/blog/')) {
      return 'Article';
    }
    
    return pageNames[path] || 'Page';
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Accueil', path: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      if (!isLast || pathSegments.length === 1) {
        breadcrumbs.push({
          label: getPageName(currentPath),
          path: currentPath
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumb on homepage
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <nav aria-label="Fil d'Ariane" className="bg-gray-50 py-4">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === 0 && (
                <Home className="w-4 h-4 mr-2 text-gray-500" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="text-gray-600 hover:text-gold transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
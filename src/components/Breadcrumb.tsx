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
  if (location.pathname === '/') {
    return null;
  }

  return (
   
  );
};

export default Breadcrumb;
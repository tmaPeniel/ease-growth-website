import { Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type BlogArticle } from "@/data/blog";

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard = ({ article }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${article.slug}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-gold/90 text-white">
              {article.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(article.publishDate)}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 2).map((tag, index) => (
                <div key={index} className="flex items-center text-xs text-gray-500">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
            
            <span className="text-gold font-medium text-sm group-hover:underline">
              Lire la suite →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
import { type BlogArticle } from "@/data/blog";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  articles: BlogArticle[];
}

const BlogGrid = ({ articles }: BlogGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default BlogGrid;
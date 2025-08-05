import blogData from './blog.json';

export interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogArticles: BlogArticle[] = blogData;

export const getBlogArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getBlogArticlesByCategory = (category: string): BlogArticle[] => {
  return blogArticles.filter(article => article.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(blogArticles.map(article => article.category)));
};
const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Notre <span className="text-gold">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Découvrez nos insights, conseils et dernières actualités sur le développement web, 
            le design et les stratégies digitales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
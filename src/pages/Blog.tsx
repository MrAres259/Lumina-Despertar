import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogData";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useCanonical } from "@/hooks/useCanonical";

const Blog = () => {
  useCanonical("/blog");
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4 tracking-tight">
              Un Espacio para Conocer Cómo Podemos Ayudarte
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Descubre nuestros servicios y aprende las mejores formas en que podemos
              acompañarte en tu camino hacia el bienestar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="block">
                <Card
                  className="group overflow-hidden border-border/30 bg-background/80 backdrop-blur-sm
                    hover:shadow-gold-glow hover:-translate-y-1.5 transition-all duration-500 ease-out
                    animate-fade-in-up cursor-pointer h-full"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Imagen del artículo</span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-medium border border-accent/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-primary transition-colors duration-300">
                      Leer más{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;

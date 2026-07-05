import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/lib/blogData";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useCanonical } from "@/hooks/useCanonical";

const BlogPost = () => {
  const { id } = useParams();
  useCanonical(`/blog/${id}`);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-serif font-semibold text-foreground">
            Artículo no encontrado
          </h1>
          <Link to="/blog" className="text-accent hover:underline mt-4 inline-block">
            Volver al blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 tracking-tight"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
            {items.map((item, j) => (
              <li key={j}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d\./)) {
        const items = block.split("\n").filter((l) => l.match(/^\d\./));
        return (
          <ol key={i} className="list-decimal pl-6 space-y-2 text-foreground/80 mb-4">
            {items.map((item, j) => {
              const text = item.replace(/^\d+\.\s*/, "");
              // Handle bold
              const parts = text.split(/\*\*(.*?)\*\*/);
              return (
                <li key={j}>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                  )}
                </li>
              );
            })}
          </ol>
        );
      }
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-40 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300 mb-8 text-sm group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />{" "}
            Volver al blog
          </Link>

          <div className="animate-fade-in-up">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium border border-accent/20">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-5 mb-4 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            {/* Blog image */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video rounded-2xl object-cover mb-12 shadow-lg"
              />
            )}

            <div className="prose-warm">{renderContent(post.content)}</div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;

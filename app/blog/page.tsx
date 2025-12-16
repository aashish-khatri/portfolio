import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BlogList from "@/components/blog/BlogList";
import { getBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 container mx-auto px-6">
        <div className="text-center mb-16">
            <div className="font-mono text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
                Technical Writing
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Engineering Insights
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Deep dives into system design, backend development, and modern software engineering practices. Sharing real-world experiences building scalable distributed systems.
            </p>
        </div>
        <BlogList posts={posts} />
      </section>
      <Footer />
    </main>
  );
}

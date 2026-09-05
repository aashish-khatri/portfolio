import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import Approach from "@/components/home/Approach";
import Writing from "@/components/home/Writing";
import Contact from "@/components/home/Contact";
import Footer from "@/components/shared/Footer";
import { getBlogPosts } from "@/lib/blog";

export default function Home() {
  const posts = getBlogPosts().slice(0, 5);
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <Work />
      <Approach />
      <Writing posts={posts} />
      <Contact />
      <Footer />
    </main>
  );
}

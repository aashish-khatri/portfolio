import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import TechTag from "@/components/shared/TechTag";
import { format } from 'date-fns';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  const formattedDate = () => {
      try {
          return format(new Date(post.date), 'MMMM d, yyyy');
      } catch {
          return post.date;
      }
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <article className="pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16 pb-12 border-b border-border-primary">
                <div className="flex justify-center items-center gap-4 mb-6 font-mono text-sm text-text-muted">
                    <span>{formattedDate()}</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
                    {post.title}
                </h1>
                <div className="flex justify-center flex-wrap gap-2">
                    {post.tags.map(tag => <TechTag key={tag}>{tag}</TechTag>)}
                </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-body 
                prose-headings:font-display prose-headings:font-bold prose-headings:text-text-primary
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-code:text-primary prose-code:bg-bg-tertiary prose-code:px-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-bg-secondary prose-pre:border prose-pre:border-border-primary prose-pre:text-text-secondary
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-bg-secondary prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-text-secondary
            ">
                <MDXRemote source={post.content} />
            </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

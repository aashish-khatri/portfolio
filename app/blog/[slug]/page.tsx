import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import TechTag from "@/components/shared/TechTag";
import ShareButtons from "@/components/blog/ShareButtons";
import { format } from 'date-fns';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import Link from 'next/link';

// Import styles
import 'highlight.js/styles/github.css';
import 'katex/dist/katex.min.css';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(slug, 3);
  const siteUrl = 'https://aashish-khatri.vercel.app';

  const formattedDate = () => {
      try {
          return format(new Date(post.date), 'MMMM d, yyyy');
      } catch {
          return post.date;
      }
  }

  const options = {
      mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeHighlight, rehypeKatex],
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
                    <span>{post.readingTime} min read</span>
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
                prose-strong:text-text-primary prose-strong:font-semibold
                prose-li:text-text-secondary prose-li:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-code:text-text-primary prose-code:bg-bg-tertiary prose-code:px-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-bg-tertiary prose-pre:text-text-secondary prose-pre:rounded-lg
                prose-th:text-text-primary prose-th:font-semibold prose-td:text-text-secondary
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-bg-secondary prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-text-secondary
                [&_.katex-display]:my-8 [&_.katex-display]:py-4 [&_.katex-display]:overflow-x-auto [&_.katex]:text-text-primary
            ">
                <MDXRemote source={post.content} options={options} />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border-primary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <ShareButtons title={post.title} url={`${siteUrl}/blog/${slug}`} />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-border-primary">
                <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(related => (
                    <Link 
                      key={related.slug} 
                      href={`/blog/${related.slug}`}
                      className="block p-6 bg-bg-secondary border border-border-primary rounded-lg hover:border-border-secondary hover:bg-bg-tertiary transition-all group"
                    >
                      <div className="font-mono text-xs text-text-muted mb-2">{related.readingTime} min read</div>
                      <h3 className="font-display font-bold text-text-primary group-hover:text-primary-light transition-colors mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-text-muted line-clamp-2">{related.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border-primary">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors font-medium"
              >
                ← Back to all articles
              </Link>
            </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}


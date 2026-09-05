import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function Writing({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section id="writing" className="mx-auto max-w-[1320px] px-6 md:px-10 py-16 md:py-28 scroll-mt-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="hidden lg:block lg:col-span-1 rail"><span className="rail-node" /></div>
        <div className="lg:col-span-11">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="t-section">Writing</h2>
            <Link href="/blog" className="link-ul">All posts</Link>
          </div>
          <p className="mt-6 text-text-secondary max-w-[56ch]">
            Long-form notes on distributed systems and database internals, written to understand what happens on the other side of the screens I build.
          </p>
          <ol className="mt-12 hairline-rows border-y border-border-primary">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-2 py-7">
                  <div className="md:col-span-3 t-small text-text-muted">{fmt(p.date)}, {p.readingTime} min read</div>
                  <div className="md:col-span-8">
                    <h3 className="t-title group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="mt-2 text-text-secondary max-w-[62ch]">{p.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

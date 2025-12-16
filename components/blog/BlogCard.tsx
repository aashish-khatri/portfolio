import Link from 'next/link';
import TechTag from '../shared/TechTag';
import { BlogPostMeta } from '@/lib/blog';
import { format } from 'date-fns';

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="bg-bg-primary border border-border-primary rounded-lg overflow-hidden transition-all hover:border-border-secondary hover:-translate-y-0.5 hover:shadow-lg flex flex-col h-full">
         <div className="h-48 bg-bg-secondary flex items-center justify-center border-b border-border-primary">
            <div className="text-center">
                <div className="text-4xl mb-2">📝</div>
                <div className="text-xs text-text-muted font-mono">Article</div>
            </div>
         </div>
         <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs text-text-muted">
                <span>{itemDate(post.date)}</span>
                <span>•</span>
                 {/* Read time placeholder or calculation if available */}
                <span>5 min read</span> 
            </div>
            
            <h2 className="font-display text-xl font-bold text-text-primary mb-3 leading-tight hover:text-primary-light transition-colors">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
            </h2>
            
            <p className="text-text-secondary mb-6 line-clamp-3 flex-grow">
                {post.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
                 {post.tags.map(tag => (
                     <TechTag key={tag}>{tag}</TechTag>
                 ))}
            </div>

            <div className="mt-auto pt-4 border-t border-border-primary flex justify-between items-center">
                 <span className="text-xs text-text-muted font-medium">Technical Blog</span>
                 <Link href={`/blog/${post.slug}`} className="text-text-primary font-medium text-sm hover:underline">
                    Read Article →
                 </Link>
            </div>
         </div>
    </article>
  );
}

function itemDate(dateString: string) {
    try {
        return format(new Date(dateString), 'MMM d, yyyy');
    } catch {
        return dateString;
    }
}

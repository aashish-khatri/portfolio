"use client";

import { useState } from 'react';
import { BlogPostMeta } from '@/lib/blog';
import BlogCard from './BlogCard';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'System Design', value: 'System Design' },
  { label: 'Go', value: 'Go' },
  { label: 'Database', value: 'Database' },
  { label: 'Microservices', value: 'Microservices' },
  { label: 'DevOps', value: 'DevOps' },
];

export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesFilter = filter === 'all' || post.tags.includes(filter);
    const matchesSearch = 
        post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
        {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <input 
            type="text" 
            placeholder="Search articles..." 
            className="flex-1 px-4 py-3 bg-bg-primary border border-border-primary rounded-lg focus:outline-none focus:border-primary text-text-primary placeholder-text-muted transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
                <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                        filter === f.value 
                        ? 'bg-bg-tertiary text-text-primary border-border-secondary' 
                        : 'bg-bg-secondary text-text-secondary border-border-primary hover:bg-bg-tertiary'
                    }`}
                >
                    {f.label}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-text-muted">
              No articles found matching your criteria.
          </div>
      )}
    </div>
  );
}

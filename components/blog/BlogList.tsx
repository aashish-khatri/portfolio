"use client";

import { useState, useMemo } from 'react';
import { BlogPostMeta } from '@/lib/blog';
import BlogCard from './BlogCard';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

const POSTS_PER_PAGE = 6;

export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
    return ['all', ...Array.from(tagSet).sort()];
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesFilter = filter === 'all' || post.tags.includes(filter);
      const matchesSearch = 
          post.title.toLowerCase().includes(search.toLowerCase()) || 
          post.description.toLowerCase().includes(search.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [posts, filter, search]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset page when filter/search changes
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearch('');
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
        <input 
          type="text" 
          placeholder="Search articles by title, description, or tag..." 
          className="w-full pl-12 pr-10 py-3 bg-bg-primary border border-border-primary rounded-lg focus:outline-none focus:border-primary text-text-primary placeholder-text-muted transition-colors"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        {search && (
          <button 
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilterChange(tag)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
              filter === tag 
                ? 'bg-primary text-white border-primary' 
                : 'bg-bg-secondary text-text-secondary border-border-primary hover:bg-bg-tertiary hover:border-border-secondary'
            }`}
          >
            {tag === 'all' ? 'All Posts' : tag}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6 text-sm text-text-muted">
        <span>
          {filteredPosts.length === 0 
            ? 'No articles found' 
            : `Showing ${paginatedPosts.length} of ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`}
        </span>
        {totalPages > 1 && (
          <span>Page {currentPage} of {totalPages}</span>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">🔍</div>
          <div className="text-text-muted mb-2">No articles found matching your criteria.</div>
          <button 
            onClick={() => { setFilter('all'); setSearch(''); }}
            className="text-primary hover:underline font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-border-primary bg-bg-secondary hover:bg-bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'border border-border-primary bg-bg-secondary hover:bg-bg-tertiary text-text-secondary'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-border-primary bg-bg-secondary hover:bg-bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}


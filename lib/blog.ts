import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200;

export interface BlogPost {
    slug: string;
    title: string;
    date: string; // ISO string 
    description: string;
    tags: string[];
    content: string;
    readingTime: number; // in minutes
}

export type BlogPostMeta = Omit<BlogPost, 'content'>;

/**
 * Calculate reading time in minutes based on word count
 */
function calculateReadingTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / WORDS_PER_MINUTE);
    return Math.max(1, minutes); // At least 1 minute
}

export function getBlogPosts(): BlogPostMeta[] {
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            tags: data.tags || [],
            readingTime: calculateReadingTime(content),
        } as BlogPostMeta;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getBlogPost(slug: string): BlogPost {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        content,
        readingTime: calculateReadingTime(content),
    };
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
    const allPosts = getBlogPosts();
    const currentPost = allPosts.find(p => p.slug === currentSlug);

    if (!currentPost) {
        return [];
    }

    // Score posts by number of shared tags
    const scoredPosts = allPosts
        .filter(p => p.slug !== currentSlug)
        .map(post => {
            const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
            return { post, score: sharedTags.length };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

    return scoredPosts.slice(0, limit).map(item => item.post);
}


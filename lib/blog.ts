import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogPost {
    slug: string;
    title: string;
    date: string; // ISO string 
    description: string;
    tags: string[];
    content: string;
}

export type BlogPostMeta = Omit<BlogPost, 'content'>;

export function getBlogPosts(): BlogPostMeta[] {
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            tags: data.tags || [],
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
    };
}

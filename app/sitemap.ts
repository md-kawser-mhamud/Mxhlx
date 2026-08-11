import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mxplex.com';
  
  const postsDirectory = path.join(process.cwd(), 'posts');
  let blogs: MetadataRoute.Sitemap = [];

  try {
    const filenames = fs.readdirSync(postsDirectory);
    blogs = filenames.map((file) => ({
      url: `${baseUrl}/blog/${file.replace(/\.md$/, '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  } catch (error) {
    // ফোল্ডার খালি থাকলে এরর দিবে না
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogs,
  ];
}

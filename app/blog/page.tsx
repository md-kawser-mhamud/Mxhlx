import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function BlogList() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  let posts: any[] = [];

  try {
    const filenames = fs.readdirSync(postsDirectory);
    posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ''),
        ...data,
      };
    });
  } catch (e) {
    posts = [];
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-500">MXPLEX Movie Blogs</h1>
        <Link href="/" className="text-gray-400 hover:text-white">← হোমপেজ</Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-red-600 transition">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 text-white hover:text-red-400">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

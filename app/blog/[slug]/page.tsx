import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
  } catch {
    return [];
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), 'posts', `${resolvedParams.slug}.md`);
  
  let title = '';
  let contentHtml = '';
  let date = '';

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    title = data.title;
    date = data.date;

    const processedContent = await remark().use(html).process(content);
    contentHtml = processedContent.toString();
  } catch (e) {
    title = "পোস্ট পাওয়া যায়নি";
    contentHtml = "<p>দুঃখিত, এই ব্লগটি খুঁজে পাওয়া যায়নি।</p>";
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-red-500 hover:underline mb-6 inline-block">← সকল ব্লগ দেখুন</Link>
      <article>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        {date && <p className="text-gray-400 text-sm mb-8 border-b border-gray-800 pb-4">{date}</p>}
        <div 
          className="prose prose-invert max-w-none text-gray-200 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}

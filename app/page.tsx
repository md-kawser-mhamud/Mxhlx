import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center px-4">
      {/* মুভির ব্যাকগ্রাউন্ড ইমেজ (public ফোল্ডারে movie-bg.jpg রাখতে হবে) */}
      <div className="absolute inset-0 z-[-1]">
        <Image 
          src="/movie-bg.jpg" 
          alt="MXPLEX Movie Background" 
          fill 
          className="object-cover brightness-50" 
          priority
        />
      </div>

      {/* লোগো (public ফোল্ডারে logo.png রাখতে হবে) */}
      <div className="mb-6">
        <Image src="/logo.png" alt="MXPLEX Logo" width={220} height={70} priority />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 drop-shadow-lg">
        Welcome to MXPLEX
      </h1>
      <p className="text-gray-300 text-center max-w-md mb-8 text-lg drop-shadow-md">
        সেরা সব মুভির রিভিউ পড়তে আমাদের ব্লগ ভিজিট করুন, অথবা মেইন সাইটে প্রবেশ করুন।
      </p>

      {/* বাটন সেকশন */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/blog" 
          className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition text-center shadow-lg"
        >
          Read Blogs
        </Link>
        <a 
          href="https://mxplex.xyz" 
          className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition text-center shadow-lg"
        >
          Enter mxplex.xyz
        </a>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/movie-bg.jpg')" }} // public ফোল্ডারে মুভির ছবি রাখবেন
    >
      {/* ডার্ক ওভারলে যাতে টেক্সট ভালো দেখা যায় */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="z-10 flex flex-col items-center text-center px-4">
        {/* লোগো (public ফোল্ডারে logo.png রাখবেন) */}
        <img src="/logo.png" alt="MXPLEX Logo" className="w-64 md:w-80 mb-6" />

        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-md">
          Welcome to MXPLEX
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg">
          মুভি রিভিউ এবং লেটেস্ট খবরাখবর পড়তে আমাদের ব্লগ ভিজিট করুন, অথবা মুভি ডাউনলোড করতে মেইন সাইটে প্রবেশ করুন।
        </p>

        {/* বাটন সেকশন */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/blog" 
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            Read Blogs
          </Link>
          
          {/* MXPLEX.xyz এ যাওয়ার বাটন */}
          <a 
            href="https://mxplex.xyz" 
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-lg transition"
          >
            Enter MXPLEX.xyz
          </a>
        </div>
      </div>
    </main>
  );
}

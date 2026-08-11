import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://mxplex.com'

export default async function sitemap() {
  // এটি অটোমেটিক আপনার ব্লগ ফোল্ডার থেকে সব পোস্ট স্ক্যান করবে
    let blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
              }))

                let routes = ['', '/blog'].map((route) => ({
                    url: `${baseUrl}${route}`,
                        lastModified: new Date().toISOString().split('T')[0],
                          }))

                            // গুগল বটকে আপডেট সাইটম্যাপ দিয়ে দিবে
                              return [...routes, ...blogs]
                              }
                              
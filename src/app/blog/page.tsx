"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/shared";
import { Button, Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

// Blog post type
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

// Static blog data
const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "table-manners-101",
    title: "Table Manners 101: Dining Like a Local in Seoul",
    excerpt: "Master the art of Korean dining etiquette, from the intricate rules of chopstick use to showing respect to your elders at the table. Avoid common tourist mistakes and dine with confidence.",
    category: "Etiquette",
    image: "https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "12 min",
    featured: true,
  },
  {
    id: "2",
    slug: "gwangjang-market-guide",
    title: "Top 10 Street Foods in Gwangjang Market",
    excerpt: "A complete checklist for your first visit to Seoul's oldest market. From mung bean pancakes to spicy rice cakes, discover the must-try dishes.",
    category: "Must-Try Dishes",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "6 min",
  },
  {
    id: "3",
    slug: "secret-bbq-hongdae",
    title: "Finding the Best Secret BBQ Spot in Hongdae",
    excerpt: "Escape the crowds and taste authentic charcoal-grilled pork at this family-run restaurant tucked in an alleyway.",
    category: "Hidden Gems",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "10 min",
  },
  {
    id: "4",
    slug: "hanok-teahouses",
    title: "The Serenity of Tea: Best Hanok Teahouses",
    excerpt: "Step back in time at these preserved traditional Korean houses in Bukchon. A guide to the perfect afternoon tea.",
    category: "Culture",
    image: "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "8 min",
  },
  {
    id: "5",
    slug: "myeongdong-street-food",
    title: "Ultimate Myeongdong Night Street Food Tour",
    excerpt: "Navigate the bustling streets of Myeongdong like a pro with our insider guide to the best late-night eats.",
    category: "Street Food",
    image: "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "7 min",
  },
  {
    id: "6",
    slug: "kimchi-history",
    title: "The History of Kimchi: Korea's Soul Food",
    excerpt: "From ancient preservation technique to UNESCO heritage, discover the fascinating journey of Korea's most iconic dish.",
    category: "Culture",
    image: "https://images.pexels.com/photos/3296398/pexels-photo-3296398.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "9 min",
  },
];

const CATEGORIES = ["All Posts", "Etiquette", "Must-Try Dishes", "Hidden Gems", "Street Food", "Culture"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Posts") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 max-w-[1200px] mx-auto pb-20">
        {/* Hero Section */}
        <div className="px-4 py-8">
          <Hero
            title="Experience the Flavors of Korea"
            subtitle="Your ultimate guide to the best eats, hidden gems, and dining culture in Seoul. Written by locals, loved by travelers."
            backgroundImage="https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1920"
            primaryCta={{ label: "Start Reading", href: "#posts" }}
            variant="compact"
            overlay="dark"
            align="center"
          />
        </div>

        {/* Category Tabs */}
        <div className="px-4 mb-8">
          <div className="flex border-b border-border dark:border-border-dark gap-8 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "flex flex-col items-center justify-center border-b-[3px] pb-4 pt-2 whitespace-nowrap transition-colors",
                  activeCategory === category
                    ? "border-b-primary text-primary"
                    : "border-b-transparent text-text-muted hover:text-text-primary dark:hover:text-white"
                )}
              >
                <span className="text-sm font-bold tracking-wide">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {activeCategory === "All Posts" && featuredPost && (
          <div className="px-4 mb-12" id="posts">
            <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-border dark:border-border-dark transition-all hover:shadow-md">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5 relative aspect-video lg:aspect-auto lg:min-h-[400px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full grow flex-col justify-center gap-4 p-6 md:p-10">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary-10 px-2 py-1 rounded">
                      {featuredPost.category}
                    </span>
                    <span className="text-text-muted text-xs font-medium uppercase tracking-wider">
                      Featured Story
                    </span>
                  </div>
                  <h2 className="text-text-primary dark:text-white text-2xl md:text-3xl font-extrabold leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary dark:text-text-dark-muted text-base md:text-lg font-normal leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Icon name="schedule" size="sm" className="text-text-muted" />
                      <p className="text-text-muted text-sm font-medium">
                        {featuredPost.readTime} read
                      </p>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button variant="primary" size="md">
                        Read Full Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="px-4">
          <h3 className="text-xl font-bold mb-6 text-text-primary dark:text-white">
            {activeCategory === "All Posts" ? "Recent Articles" : activeCategory}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-4 bg-white dark:bg-surface-dark rounded-xl p-4 border border-border dark:border-border-dark hover:border-primary/30 transition-all group"
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-primary text-xs font-bold uppercase">
                    {post.category}
                  </p>
                  <h4 className="text-text-primary dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-text-secondary dark:text-text-dark-muted text-sm font-normal line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Icon name="schedule" size="sm" className="text-text-muted" />
                    <p className="text-text-muted text-xs font-medium uppercase">
                      {post.readTime} read
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

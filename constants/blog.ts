// filepath: constants/blog.ts
import { BlogPost } from "@/types"

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "10 Best Practices for Modern Web Development",
    excerpt:
      "Discover the essential practices that will help you build better, faster, and more maintainable web applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    category: "Development",
    author: "Sarah Johnson",
    date: new Date("2024-01-15"),
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of AI in Business",
    excerpt:
      "Exploring how artificial intelligence is transforming industries and creating new opportunities for growth.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "AI & Technology",
    author: "Michael Chen",
    date: new Date("2024-01-12"),
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "A comprehensive guide to designing and implementing cloud solutions that grow with your business.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "Cloud",
    author: "Emily Rodriguez",
    date: new Date("2024-01-10"),
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "UX Design Trends for 2024",
    excerpt: "Stay ahead of the curve with the latest user experience design trends shaping digital products.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Design",
    author: "David Kim",
    date: new Date("2024-01-08"),
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Cybersecurity Essentials for Small Businesses",
    excerpt:
      "Protect your business with these fundamental security practices that every organization should implement.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    category: "Security",
    author: "Sarah Johnson",
    date: new Date("2024-01-05"),
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Learn advanced techniques to make your React apps faster and more responsive for better user experiences.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "Development",
    author: "Michael Chen",
    date: new Date("2024-01-03"),
    readTime: "9 min read",
  },
]

export const BLOG_CATEGORIES = ["All", "Development", "AI & Technology", "Cloud", "Design", "Security"] as const

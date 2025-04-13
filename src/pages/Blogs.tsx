import { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";


// Sample blog data
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Getting Started with React in 2024',
//     excerpt: 'Learn how to start building modern web applications with the latest React features.',
//     date: 'May 15, 2024',
//     author: 'Sarah Johnson',
//     category: 'Development',
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 2,
//     title: 'The Future of Web Design',
//     excerpt: 'Exploring emerging trends that will shape how we build websites in the coming years.',
//     date: 'June 2, 2024',
//     author: 'Michael Chen',
//     category: 'Design',
//     image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 3,
//     title: 'Optimizing Website Performance',
//     excerpt: 'Practical tips to make your website load faster and improve user experience.',
//     date: 'June 10, 2024',
//     author: 'Emma Davis',
//     category: 'Performance',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 4,
//     title: 'Mobile-First Design Principles',
//     excerpt: 'Why designing for mobile first leads to better experiences across all devices.',
//     date: 'June 18, 2024',
//     author: 'David Wilson',
//     category: 'Design',
//     image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 5,
//     title: 'State Management in 2024',
//     excerpt: 'Comparing the most popular state management solutions for modern React applications.',
//     date: 'June 25, 2024',
//     author: 'Lisa Thompson',
//     category: 'Development',
//     image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 6,
//     title: 'Accessibility Best Practices',
//     excerpt: 'How to make your website more accessible to all users regardless of ability.',
//     date: 'July 3, 2024',
//     author: 'James Rodriguez',
//     category: 'Accessibility',
//     image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
// ];

// const categories = ['All', 'Development', 'Design', 'Performance', 'Accessibility'];

const blogPosts = [
  {
    id: 1,
    title: "Secure Online Transactions in 2024",
    excerpt:
      "Learn the latest security measures to protect your financial transactions online.",
    date: "May 15, 2024",
    author: "Sarah Johnson",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Future of Digital Payments",
    excerpt:
      "Exploring emerging trends in digital wallets and contactless payment systems.",
    date: "June 2, 2024",
    author: "Michael Chen",
    category: "Payments",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Optimizing Transaction Speeds",
    excerpt:
      "How we reduced payment processing times by 40% with new technologies.",
    date: "June 10, 2024",
    author: "Emma Davis",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Mobile Payment Best Practices",
    excerpt: "Designing seamless mobile payment experiences that users love.",
    date: "June 18, 2024",
    author: "David Wilson",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Fraud Prevention Strategies",
    excerpt: "How we detect and prevent fraudulent transactions in real-time.",
    date: "June 25, 2024",
    author: "Lisa Thompson",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Cross-Border Payment Solutions",
    excerpt: "Making international money transfers faster and more affordable.",
    date: "July 3, 2024",
    author: "James Rodriguez",
    category: "International",
    image:
      "https://images.unsplash.com/photo-1534957753291-64d667ce2927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "All",
  "Security",
  "Payments",
  "Performance",
  "Mobile",
  "International",
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, tutorials, and news about web development and design
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-base-300 rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-2">
                    <span className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <FaTags className="mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="mb-4">{post.excerpt}</p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Read more <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">
              No articles found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-base-300 rounded-xl p-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="mb-6 opacity-90">
              Get the latest articles and news delivered to your inbox every
              week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-500 flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 placeholder:text-base"
              />
              <button className="border px-6 py-3 text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;

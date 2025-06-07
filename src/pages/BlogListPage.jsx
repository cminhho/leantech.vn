import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { ContentLayout } from '../components/content/ContentLayout';

// Enhanced mock data with Vietnamese content and more posts
const mockBlogPosts = [
  {
    slug: 'digital-transformation-trends-2024',
    title: 'Digital Transformation Strategy: Turning Vision Into Action With Core Pillars for Success',
    excerpt: 'Explore the main digital transformation trends that are shaping businesses in 2024, from AI integration to sustainable technology solutions.',
    date: '2024-01-15',
    author: 'LeanTech Team',
    category: 'Technology',
    tags: ['Digital Transformation', 'AI', 'Cloud Computing', 'Cybersecurity'],
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    slug: 'generative-ai-practical-applications',
    title: 'Generative AI in Digital Transformation: Practical Applications Guide',
    excerpt: 'Learn how businesses can leverage the power of artificial intelligence to optimize processes and create new value.',
    date: '2024-01-10',
    author: 'Alex Chen',
    category: 'Business',
    tags: ['AI', 'Strategy', 'Automation', 'Innovation'],
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'ai-new-era-creativity-crypto',
    title: 'AI & Web3.0m: A New Era of Creativity and Crypto Opportunities',
    excerpt: 'Essential security measures every business must implement to protect data and systems in the digital age.',
    date: '2024-01-05',
    author: 'Sarah Johnson',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'Security', 'Data', 'Compliance'],
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'ai-transformation-companies-revolutionizing',
    title: 'AI Transformation and How Top Companies Are Revolutionizing Business with AI Solutions',
    excerpt: 'Detailed guide on how to plan and execute cloud system migration effectively and safely.',
    date: '2023-12-28',
    author: 'Michael Brown',
    category: 'Cloud Computing',
    tags: ['Cloud Computing', 'Migration', 'Infrastructure', 'Efficiency'],
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'what-digital-transformation-complete-guide',
    title: 'What is Digital Transformation? A Complete Guide with Case Studies',
    excerpt: 'Discover modern methods and tools to increase efficiency in software development and deployment.',
    date: '2023-12-20',
    author: 'David Wilson',
    category: 'Software Development',
    tags: ['Software Development', 'DevOps', 'Agile', 'Efficiency'],
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'top-50-mobile-app-development-tools',
    title: 'Top 50 Mobile App Development Tools for Beginners',
    excerpt: 'How to use data to make smart business decisions and create sustainable competitive advantages.',
    date: '2023-12-15',
    author: 'Emily Davis',
    category: 'Data Analytics',
    tags: ['Data', 'Analytics', 'BI', 'Decision Making'],
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'how-successfully-plan-mobile-app-development',
    title: 'How to Successfully Plan a Mobile App Development Roadmap in 2025',
    excerpt: 'Strategic insights and IT solutions for business transformation in the digital era.',
    date: '2023-12-10',
    author: 'Robert Lee',
    category: 'Mobile Development',
    tags: ['Mobile', 'Strategy', 'Planning', 'Development'],
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'choosing-best-mobile-app-development-company',
    title: 'Choosing the Best Mobile App Development Company for Your Business',
    excerpt: 'Essential considerations for selecting the right mobile app development partner.',
    date: '2023-12-05',
    author: 'Jennifer Kim',
    category: 'Business Strategy',
    tags: ['Mobile', 'Business', 'Partnership', 'Strategy'],
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'deepfuck-disrupting-ai-landscape',
    title: 'DeepFuck Disrupting the AI Landscape Amid Controversies',
    excerpt: 'Analyzing the impact of controversial AI developments on the technology landscape.',
    date: '2023-11-30',
    author: 'Alex Rodriguez',
    category: 'AI Ethics',
    tags: ['AI', 'Ethics', 'Controversy', 'Technology'],
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'blockchain-strategic-insights-excel',
    title: 'Blockchain 2025: Strategic Insights and IT Solutions for Business Transformation',
    excerpt: 'Strategic insights into blockchain technology and its transformative potential for businesses.',
    date: '2023-11-25',
    author: 'Maria Santos',
    category: 'Blockchain',
    tags: ['Blockchain', 'Strategy', 'Business', 'Innovation'],
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'generative-ai-story-elevating-customer-service',
    title: 'Generative AI: The Story of Elevating Customer Service Quality (Part 2)',
    excerpt: 'How generative AI is revolutionizing customer service and improving business outcomes.',
    date: '2023-11-20',
    author: 'Kevin Zhang',
    category: 'Customer Service',
    tags: ['AI', 'Customer Service', 'Quality', 'Innovation'],
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    slug: 'optimizing-network-management-business-operations',
    title: 'Optimizing Network Management for Business Operations',
    excerpt: 'Best practices for network optimization to support modern business operations.',
    date: '2023-11-15',
    author: 'Lisa Thompson',
    category: 'Network Management',
    tags: ['Network', 'Management', 'Operations', 'Optimization'],
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    featured: false
  }
];

const BlogListPage = () => {
  const { pageNumber, category, tag } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [selectedTag, setSelectedTag] = useState(tag || '');
  const [searchQuery, setSearchQuery] = useState('');

  const postsPerPage = 6; // Better for clean 3-column grid

  // Categories and tags
  const categories = ['Technology', 'Business', 'Cybersecurity', 'Cloud Computing', 'Software Development', 'Data Analytics', 'Mobile Development', 'AI Ethics', 'Blockchain', 'Customer Service', 'Network Management', 'Business Strategy'];
  const popularTags = ['AI', 'Digital Transformation', 'Cloud Computing', 'Cybersecurity', 'Mobile', 'Blockchain'];

  useEffect(() => {
    loadBlogPosts();
  }, [currentPage, selectedCategory, selectedTag, searchQuery]);

  const loadBlogPosts = async () => {
    setLoading(true);
    
    try {
      let filteredPosts = [...mockBlogPosts];
      
      // Apply filters
      if (selectedCategory) {
        filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
      }
      
      if (selectedTag) {
        filteredPosts = filteredPosts.filter(post => post.tags.includes(selectedTag));
      }
      
      if (searchQuery) {
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      // Calculate pagination
      const totalPosts = filteredPosts.length;
      const pages = Math.ceil(totalPosts / postsPerPage);
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
      
      setPosts(paginatedPosts);
      setTotalPages(pages);
      
    } catch (error) {
      console.error('Error loading blog posts:', error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryFilter = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedTag('');
    setCurrentPage(1);
    if (categoryName) {
      navigate(`/blog/category/${categoryName}`);
    } else {
      navigate('/blog');
    }
  };

  const handleTagFilter = (tagName) => {
    setSelectedTag(tagName);
    setSelectedCategory('');
    setCurrentPage(1);
    if (tagName) {
      navigate(`/blog/tag/${tagName}`);
    } else {
      navigate('/blog');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page === 1) {
      navigate('/blog');
    } else {
      navigate(`/blog/page/${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sidebar = (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <i className="fas fa-search absolute left-3 top-4 text-gray-400 text-sm"></i>
        </div>
      </div>

      {/* Most Popular */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Most Popular
        </h3>
        <div className="space-y-4">
          {mockBlogPosts.slice(0, 3).map((post, index) => (
            <div key={post.slug} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h4>
                <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to our newsletter and stay up to date.
          </p>
          <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryFilter('')}
            className={`block w-full text-left px-3 py-2 rounded text-sm ${
              !selectedCategory 
                ? 'bg-blue-50 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryFilter(cat)}
              className={`block w-full text-left px-3 py-2 rounded text-sm ${
                selectedCategory === cat 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tagName) => (
            <button
              key={tagName}
              onClick={() => handleTagFilter(tagName)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tagName 
                  ? 'bg-blue-100 text-blue-800 font-medium' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tagName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-white">
      <ContentLayout sidebar={sidebar} containerSize="max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Blogs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Latest thoughts & tech insights.
            </p>
          </div>

          {/* Filter Summary */}
          {(selectedCategory || selectedTag || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 justify-center mb-6">
              <span className="text-sm text-gray-500">Filtering by:</span>
              {selectedCategory && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  {selectedCategory}
                  <button onClick={() => handleCategoryFilter('')} className="ml-1 hover:text-blue-600">
                    <i className="fas fa-times text-xs"></i>
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  {selectedTag}
                  <button onClick={() => handleTagFilter('')} className="ml-1 hover:text-purple-600">
                    <i className="fas fa-times text-xs"></i>
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-green-600">
                    <i className="fas fa-times text-xs"></i>
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        )}

        {/* No posts found */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <i className="fas fa-search text-6xl text-gray-300 mb-6"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery ? `No articles match "${searchQuery}"` : 'No articles match the selected filters.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedTag('');
                  navigate('/blog');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && posts.length > 0 && (
          <>
            {/* Featured Post */}
            {currentPage === 1 && posts.length > 0 && posts[0].featured && (
              <div className="mb-12">
                <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="aspect-w-16 aspect-h-10">
                        <img 
                          src={posts[0].image} 
                          alt={posts[0].title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                          {posts[0].category}
                        </span>
                        <time>{formatDate(posts[0].date)}</time>
                      </div>
                      
                      <h2 className="section-title text-gray-900 mb-4 leading-tight">
                        <Link to={`/blog/${posts[0].slug}`} className="hover:text-blue-600">
                          {posts[0].title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      
                      <div className="flex items-center justify-end">
                        <Link 
                          to={`/blog/${posts[0].slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read More
                          <i className="fas fa-arrow-right text-sm"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* Grid Layout */}
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {(currentPage === 1 && posts[0].featured ? posts.slice(1) : posts).map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">
                        {post.category}
                      </span>
                      <time>{formatDate(post.date)}</time>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.slug}`} className="line-clamp-2">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 bg-white border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <i className="fas fa-chevron-right text-xs"></i>
                </button>
              </div>
            )}
          </>
        )}
      </ContentLayout>
    </div>
  );
};

export default BlogListPage; 
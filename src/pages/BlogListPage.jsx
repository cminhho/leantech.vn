import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { ContentLayout } from '../components/content/ContentLayout';

// Import the actual blog content data
import blogContentData from '../data/blog-content.json';

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

  const postsPerPage = 9;

  // Extract categories and tags from actual blog data
  const categories = [...new Set(blogContentData.map(post => post.category))].sort();
  const popularTags = [...new Set(blogContentData.flatMap(post => post.tags))].slice(0, 6);

  useEffect(() => {
    loadBlogPosts();
  }, [currentPage, selectedCategory, selectedTag, searchQuery]);

  const loadBlogPosts = async () => {
    setLoading(true);
    
    try {
      let filteredPosts = [...blogContentData];
      
      // Apply filters
      if (selectedCategory) {
        filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
      }
      
      if (selectedTag) {
        filteredPosts = filteredPosts.filter(post => 
          post.tags && post.tags.includes(selectedTag)
        );
      }
      
      if (searchQuery) {
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.searchContent && post.searchContent.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }
      
      // Sort by date (newest first)
      filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      
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
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Helper function to get image URL with fallback
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
    }
    
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    // If it's a relative path, ensure it exists, otherwise use fallback
    const fallbackByCategory = {
      'Technology': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'Business': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'HR': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    };
    
    return fallbackByCategory['Technology']; // Default fallback
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 pt-20">
        <div className="mx-auto py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Insights & Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Expert perspectives on technology, digital transformation, and business strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Filters */}
        <div className="py-6 border-b border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Clear Filters */}
              {(selectedCategory || selectedTag || searchQuery) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                    setSelectedTag('');
                    navigate('/blog');
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Popular:</span>
              {popularTags.map((tagName) => (
                <button
                  key={tagName}
                  onClick={() => handleTagFilter(tagName)}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    selectedTag === tagName 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tagName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-600">Loading articles...</p>
          </div>
        )}

        {/* No posts found */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Articles Found</h3>
              <p className="text-gray-600 mb-5">
                {searchQuery ? `No articles match "${searchQuery}"` : 'No articles match the selected filters.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedTag('');
                  navigate('/blog');
                }}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        {!loading && posts.length > 0 && (
          <>
            {/* Featured Post */}
            {currentPage === 1 && posts.length > 0 && posts[0].featured && (
              <div className="mb-12">
                <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={getImageUrl(posts[0].image)} 
                        alt={posts[0].title}
                        className="w-full h-64 md:h-72 object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md font-medium">
                          Featured
                        </span>
                        <span className="text-gray-400">•</span>
                        <time>{formatDate(posts[0].date)}</time>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        <Link to={`/blog/${posts[0].slug}`} className="hover:text-blue-600 transition-colors">
                          {posts[0].title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-5 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      
                      <div className="flex items-center justify-end">
                        <Link 
                          to={`/blog/${posts[0].slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read article
                          <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {(currentPage === 1 && posts[0].featured ? posts.slice(1) : posts).map((post) => (
                <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <img 
                      src={getImageUrl(post.image)} 
                      alt={post.title}
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <time>{formatDate(post.date)}</time>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 pb-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogListPage; 
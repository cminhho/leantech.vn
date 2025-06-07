import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogLayout } from '../components/content/ContentLayout';

// Import the actual blog content data
import blogContentData from '../data/blog-content.json';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    loadBlogPost();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadBlogPost = async () => {
    setLoading(true);
    setNotFound(false);
    
    try {
      // Find the post by slug in actual blog data
      const foundPost = blogContentData.find(post => post.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Find related posts from the same category or with similar tags
        const related = blogContentData
          .filter(p => p.slug !== slug) // Exclude current post
          .filter(p => 
            p.category === foundPost.category || 
            (p.tags && foundPost.tags && p.tags.some(tag => foundPost.tags.includes(tag)))
          )
          .slice(0, 3); // Get first 3 related posts
          
        setRelatedPosts(related);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get image URL with fallback
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
    
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  };

  // Function to find previous and next posts
  const getNavigation = () => {
    const currentIndex = blogContentData.findIndex(p => p.slug === slug);
    return {
      previous: currentIndex > 0 ? blogContentData[currentIndex - 1] : null,
      next: currentIndex < blogContentData.length - 1 ? blogContentData[currentIndex + 1] : null
    };
  };

  const sharePost = (platform) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: () => {
        navigator.clipboard.writeText(url);
        alert('Link đã được sao chép!');
      }
    };
    
    if (platform === 'copy') {
      shareUrls.copy();
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600 text-lg">Đang tải bài viết...</p>
          </div>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-exclamation-circle text-4xl text-gray-400"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h1>
            <p className="text-gray-600 mb-8 text-lg">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-arrow-left"></i>
                Về trang Blog
              </Link>
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-undo"></i>
                Quay lại
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const navigation = getNavigation();

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Enhanced Breadcrumb */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                <i className="fas fa-home mr-1"></i>Trang chủ
              </Link>
              <i className="fas fa-chevron-right text-gray-300 text-xs"></i>
              <Link to="/blog" className="text-gray-500 hover:text-blue-600 transition-colors">Blog</Link>
              <i className="fas fa-chevron-right text-gray-300 text-xs"></i>
              <span className="text-gray-900 font-medium truncate max-w-md">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Blog Layout with better styling */}
        <div className="relative">
          <BlogLayout post={post} relatedPosts={relatedPosts} />
          
          {/* Floating Social Share */}
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-40">
            <div className="bg-white rounded-lg shadow-lg p-3 space-y-3">
              <h4 className="text-xs font-semibold text-gray-700 text-center mb-2">Chia sẻ</h4>
              <button 
                onClick={() => sharePost('facebook')}
                className="block w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                title="Chia sẻ trên Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </button>
              <button 
                onClick={() => sharePost('twitter')}
                className="block w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors flex items-center justify-center"
                title="Chia sẻ trên Twitter"
              >
                <i className="fab fa-twitter text-sm"></i>
              </button>
              <button 
                onClick={() => sharePost('linkedin')}
                className="block w-10 h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center"
                title="Chia sẻ trên LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </button>
              <button 
                onClick={() => sharePost('copy')}
                className="block w-10 h-10 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
                title="Sao chép link"
              >
                <i className="fas fa-link text-sm"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Navigation with Previous/Next Posts */}
        <div className="bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Mobile Social Share */}
            <div className="lg:hidden mb-8">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Chia sẻ:</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => sharePost('facebook')}
                    className="w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <i className="fab fa-facebook-f text-xs"></i>
                  </button>
                  <button 
                    onClick={() => sharePost('twitter')}
                    className="w-8 h-8 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors flex items-center justify-center"
                  >
                    <i className="fab fa-twitter text-xs"></i>
                  </button>
                  <button 
                    onClick={() => sharePost('linkedin')}
                    className="w-8 h-8 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center"
                  >
                    <i className="fab fa-linkedin-in text-xs"></i>
                  </button>
                  <button 
                    onClick={() => sharePost('copy')}
                    className="w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <i className="fas fa-link text-xs"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Previous Post */}
              <div className="text-left">
                {navigation.previous ? (
                  <Link 
                    to={`/blog/${navigation.previous.slug}`}
                    className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="flex-shrink-0">
                      <i className="fas fa-chevron-left text-blue-600 group-hover:text-blue-700"></i>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Bài trước</p>
                      <h3 className="font-medium text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                        {navigation.previous.title}
                      </h3>
                    </div>
                  </Link>
                ) : (
                  <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-400">Không có bài trước</p>
                  </div>
                )}
              </div>

              {/* Back to Blog */}
              <div className="text-center">
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-th-large"></i>
                  Tất cả bài viết
                </Link>
              </div>

              {/* Next Post */}
              <div className="text-right">
                {navigation.next ? (
                  <Link 
                    to={`/blog/${navigation.next.slug}`}
                    className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 justify-end"
                  >
                    <div className="min-w-0 text-right">
                      <p className="text-sm text-gray-500 mb-1">Bài tiếp</p>
                      <h3 className="font-medium text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                        {navigation.next.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <i className="fas fa-chevron-right text-blue-600 group-hover:text-blue-700"></i>
                    </div>
                  </Link>
                ) : (
                  <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-400">Không có bài tiếp</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage; 
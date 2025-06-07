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

  useEffect(() => {
    loadBlogPost();
  }, [slug]);

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
      return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
    }
    
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    // Fallback for relative paths
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <i className="fas fa-exclamation-circle text-4xl text-gray-300 mb-4"></i>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
            <div className="space-x-4">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Blog
              </Link>
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      <BlogLayout post={post} relatedPosts={relatedPosts} />
      
      {/* Navigation to next/previous posts */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <i className="fas fa-arrow-left"></i>
              Back to All Posts
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="text-gray-400 cursor-not-allowed">
                <i className="fas fa-chevron-left mr-2"></i>
                Previous Post
              </button>
              <button className="text-gray-400 cursor-not-allowed">
                Next Post
                <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BlogPostPage; 
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogLayout } from '../components/content/ContentLayout';

// Mock blog post data - this will be replaced with actual content loading
const mockBlogPost = {
  slug: 'digital-transformation-trends-2024',
  title: 'Digital Transformation Trends Shaping 2024',
  excerpt: 'Explore the key digital transformation trends that are reshaping businesses in 2024, from AI integration to sustainable technology solutions.',
  content: `
    <h2>Introduction</h2>
    <p>Digital transformation continues to reshape how businesses operate, innovate, and deliver value to customers. As we navigate through 2024, several key trends are emerging that will define the future of enterprise technology and business strategy.</p>
    
    <h2>1. AI-Powered Automation and Intelligence</h2>
    <p>Artificial Intelligence is moving beyond experimental phases into core business operations. Organizations are implementing AI to:</p>
    <ul>
      <li>Automate complex decision-making processes</li>
      <li>Enhance customer experience through personalization</li>
      <li>Optimize operational efficiency and reduce costs</li>
      <li>Predict market trends and customer behavior</li>
    </ul>
    
    <h2>2. Cloud-First Strategies</h2>
    <p>The shift to cloud computing is accelerating, with businesses adopting cloud-first approaches for:</p>
    <ul>
      <li>Scalable infrastructure and resources</li>
      <li>Enhanced collaboration and remote work capabilities</li>
      <li>Faster deployment of applications and services</li>
      <li>Better data analytics and insights</li>
    </ul>
    
    <h2>3. Enhanced Cybersecurity Measures</h2>
    <p>With increasing digital adoption comes the need for robust cybersecurity. Key focus areas include:</p>
    <ul>
      <li>Zero-trust security architectures</li>
      <li>Advanced threat detection and response</li>
      <li>Data privacy and compliance</li>
      <li>Employee security training and awareness</li>
    </ul>
    
    <h2>4. Sustainable Technology Solutions</h2>
    <p>Environmental consciousness is driving the adoption of green technology initiatives:</p>
    <ul>
      <li>Energy-efficient data centers and infrastructure</li>
      <li>Sustainable software development practices</li>
      <li>Digital solutions that reduce carbon footprint</li>
      <li>Circular economy principles in technology lifecycle</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>These digital transformation trends represent both opportunities and challenges for businesses in 2024. Organizations that proactively embrace these changes while maintaining a focus on security, sustainability, and customer value will be best positioned for success in the digital economy.</p>
    
    <p>At LeanTech, we help businesses navigate these complex transformations with tailored solutions that align with their specific goals and requirements. Contact us to learn how we can support your digital transformation journey.</p>
  `,
  date: '2024-01-15',
  author: 'LeanTech Team',
  category: 'Technology',
  tags: ['Digital Transformation', 'AI', 'Cloud Computing', 'Cybersecurity'],
  readTime: 8,
  image: '/images/blog/digital-transformation-2024.jpg',
  featured: true
};

const mockRelatedPosts = [
  {
    slug: 'ai-implementation-guide',
    title: 'AI Implementation Guide for Enterprises',
    readTime: 6
  },
  {
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices',
    readTime: 7
  },
  {
    slug: 'cybersecurity-trends-2024',
    title: 'Cybersecurity Trends to Watch in 2024',
    readTime: 5
  }
];

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
      // Simulate loading - replace with actual content loading
      if (slug === 'digital-transformation-trends-2024') {
        setPost(mockBlogPost);
        setRelatedPosts(mockRelatedPosts);
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
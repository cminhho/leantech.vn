import React from 'react';

const MarkdownRenderer = ({ 
  content, 
  className = '',
  variant = 'default' // 'default', 'blog', 'product', 'service'
}) => {
  const baseClasses = 'prose prose-lg max-w-none';
  const variantClasses = {
    default: 'prose-gray',
    blog: 'prose-blue prose-headings:text-gray-900 prose-links:text-blue-600 hover:prose-links:text-blue-800',
    product: 'prose-green prose-headings:text-gray-900 prose-links:text-green-600 hover:prose-links:text-green-800',
    service: 'prose-purple prose-headings:text-gray-900 prose-links:text-purple-600 hover:prose-links:text-purple-800'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // Custom styles for better rendering
  const customStyles = {
    lineHeight: '1.7',
    fontSize: '1.1rem'
  };

  return (
    <div 
      className={combinedClasses}
      style={customStyles}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

// Enhanced version with code syntax highlighting and custom components
export const EnhancedMarkdownRenderer = ({ 
  content, 
  className = '',
  variant = 'default',
  components = {} // Custom component overrides
}) => {
  const baseClasses = 'prose max-w-none';
  const variantClasses = {
    default: 'prose-gray',
    blog: `
      prose-blue 
      prose-headings:text-gray-900 prose-headings:font-medium
      prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 prose-h1:mt-6 prose-h1:text-gray-900
      prose-h2:text-xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:mt-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h2:text-gray-800
      prose-h3:text-lg prose-h3:font-medium prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-gray-800
      prose-h4:text-base prose-h4:font-medium prose-h4:mb-2 prose-h4:mt-3 prose-h4:text-gray-700
      prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-base
      prose-ul:mb-4 prose-ul:ml-4 prose-li:mb-1 prose-li:text-gray-700 prose-li:text-base
      prose-ol:mb-4 prose-ol:ml-4
      prose-links:text-blue-600 prose-links:no-underline prose-links:font-medium hover:prose-links:text-blue-800 hover:prose-links:underline
      prose-strong:text-gray-900 prose-strong:font-semibold
      prose-em:text-gray-700 prose-em:italic
      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-3 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:rounded-r
      prose-table:w-full prose-table:border-collapse prose-table:border prose-table:border-gray-300
      prose-th:bg-gray-50 prose-th:p-2 prose-th:border prose-th:border-gray-300 prose-th:font-semibold prose-th:text-left
      prose-td:p-2 prose-td:border prose-td:border-gray-300
      prose-img:rounded-lg prose-img:shadow-md prose-img:mb-4
    `,
    product: `
      prose-green 
      prose-headings:text-gray-900 prose-headings:font-medium
      prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 prose-h1:text-green-800
      prose-h2:text-xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:text-green-700
      prose-h3:text-lg prose-h3:font-medium prose-h3:mb-2 prose-h3:text-green-600
      prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed
      prose-links:text-green-600 hover:prose-links:text-green-800
      prose-strong:text-gray-900
      prose-blockquote:border-green-500 prose-blockquote:bg-green-50
    `,
    service: `
      prose-purple 
      prose-headings:text-gray-900 prose-headings:font-medium
      prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4 prose-h1:text-purple-800
      prose-h2:text-xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:text-purple-700
      prose-h3:text-lg prose-h3:font-medium prose-h3:mb-2 prose-h3:text-purple-600
      prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed
      prose-links:text-purple-600 hover:prose-links:text-purple-800
      prose-strong:text-gray-900
      prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClasses}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

// Component for rendering content with metadata
export const ContentRenderer = ({ 
  item, 
  showMeta = true, 
  variant = 'default',
  className = ''
}) => {
  if (!item) return null;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  // Helper function to get image URL with fallback
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
    
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    
    // Fallback cho relative paths
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  };

  return (
    <article className={`content-renderer ${className}`}>
      {showMeta && (
        <header className="content-meta mb-8">
          {/* Featured Image */}
          {item.image && (
            <div className="mb-6 -mx-6 sm:-mx-8">
              <img 
                src={getImageUrl(item.image)}
                alt={item.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {item.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
            {item.date && (
              <time dateTime={item.date} className="flex items-center gap-1">
                <i className="far fa-calendar-alt"></i>
                {formatDate(item.date)}
              </time>
            )}
            
            {item.author && (
              <span className="flex items-center gap-1">
                <i className="far fa-user"></i>
                {item.author}
              </span>
            )}
            
            {item.readTime && (
              <span className="flex items-center gap-1">
                <i className="far fa-clock"></i>
                {item.readTime} phút đọc
              </span>
            )}
            
            {item.category && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {item.category}
              </span>
            )}
          </div>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {item.excerpt && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r">
              <p className="text-base text-gray-700 leading-relaxed font-medium italic">
                {item.excerpt}
              </p>
            </div>
          )}
        </header>
      )}
      
      <div className="content-body">
        <EnhancedMarkdownRenderer 
          content={item.content} 
          variant={variant}
          className="mb-8"
        />
      </div>
      
      {item.cta && (
        <footer className="content-footer mt-12 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
          <div className="text-center">
            <p className="text-gray-700 mb-4 italic">{item.cta.text}</p>
            <a 
              href={item.cta.link || "/contact"}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Liên hệ tư vấn
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </footer>
      )}
    </article>
  );
};

export default MarkdownRenderer; 
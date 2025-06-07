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
  const baseClasses = 'prose prose-lg max-w-none';
  const variantClasses = {
    default: 'prose-gray',
    blog: `
      prose-blue 
      prose-headings:text-gray-900 
      prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
      prose-h2:text-[38px] prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
      prose-h3:text-xl prose-h3:font-medium prose-h3:mb-3 prose-h3:mt-5
      prose-p:mb-4 prose-p:leading-relaxed
      prose-ul:mb-4 prose-li:mb-1
      prose-links:text-blue-600 prose-links:no-underline hover:prose-links:text-blue-800 hover:prose-links:underline
      prose-strong:text-gray-900 prose-strong:font-semibold
      prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic
    `,
    product: `
      prose-green 
      prose-headings:text-gray-900 
      prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
      prose-h2:text-[38px] prose-h2:font-semibold prose-h2:mb-4 prose-h2:text-green-800
      prose-h3:text-xl prose-h3:font-medium prose-h3:mb-3 prose-h3:text-green-700
      prose-links:text-green-600 hover:prose-links:text-green-800
      prose-strong:text-gray-900
    `,
    service: `
      prose-purple 
      prose-headings:text-gray-900 
      prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
      prose-h2:text-[38px] prose-h2:font-semibold prose-h2:mb-4 prose-h2:text-purple-800
      prose-h3:text-xl prose-h3:font-medium prose-h3:mb-3 prose-h3:text-purple-700
      prose-links:text-purple-600 hover:prose-links:text-purple-800
      prose-strong:text-gray-900
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
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`content-renderer ${className}`}>
      {showMeta && (
        <header className="content-meta mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {item.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
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
                {item.readTime} min read
              </span>
            )}
            
            {item.category && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {item.category}
              </span>
            )}
          </div>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {item.excerpt && (
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
              {item.excerpt}
            </p>
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
        <footer className="content-footer mt-12 p-6 bg-gray-50 rounded-lg">
          <div className="text-center">
            <a 
              href={item.cta.link}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {item.cta.text}
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </footer>
      )}
    </article>
  );
};

export default MarkdownRenderer; 
import React from 'react';
import { ContentRenderer } from './MarkdownRenderer';

// Base content layout with sidebar
export const ContentLayout = ({ 
  children, 
  sidebar = null, 
  className = '',
  containerSize = 'max-w-6xl' // 'max-w-4xl', 'max-w-6xl', 'max-w-7xl'
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 py-8 ${containerSize}`}>
        <div className={`grid gap-8 ${sidebar ? 'lg:grid-cols-4' : 'lg:grid-cols-1'}`}>
          {/* Main content */}
          <main className={sidebar ? 'lg:col-span-3' : 'lg:col-span-1'}>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8">
                {children}
              </div>
            </div>
          </main>
          
          {/* Sidebar */}
          {sidebar && (
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                {sidebar}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

// Blog-specific layout
export const BlogLayout = ({ 
  post, 
  relatedPosts = [], 
  className = '' 
}) => {
  const sidebar = (
    <div className="space-y-6">
      {/* Table of Contents - placeholder for now */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
        <div className="text-sm text-gray-600">
          <p>Auto-generated TOC will appear here</p>
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
          <div className="space-y-3">
            {relatedPosts.slice(0, 3).map((relatedPost, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                  <a href={`/blog/${relatedPost.slug}`}>
                    {relatedPost.title}
                  </a>
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {relatedPost.readTime} min read
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <ContentLayout 
      sidebar={sidebar} 
      className={className}
      containerSize="max-w-6xl"
    >
      <ContentRenderer 
        item={post} 
        variant="blog" 
        showMeta={true}
      />
    </ContentLayout>
  );
};

// Product-specific layout
export const ProductLayout = ({ 
  product, 
  relatedProducts = [], 
  className = '' 
}) => {
  const sidebar = (
    <div className="space-y-6">
      {/* Product Info Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
        
        {product.price && (
          <div className="mb-4">
            <span className="text-sm text-gray-600">Starting at</span>
            <div className="text-2xl font-bold text-green-600">{product.price}</div>
          </div>
        )}
        
        {product.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <i className="fas fa-check text-green-500 mt-0.5 text-xs"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {product.technologies && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {product.technologies.slice(0, 6).map((tech, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {product.cta && (
          <a 
            href={product.cta.link}
            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center block"
          >
            {product.cta.text}
          </a>
        )}
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Solutions</h3>
          <div className="space-y-3">
            {relatedProducts.slice(0, 3).map((relatedProduct, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                <h4 className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
                  <a href={`/products/${relatedProduct.slug}`}>
                    {relatedProduct.title}
                  </a>
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {relatedProduct.excerpt?.substring(0, 80)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <ContentLayout 
      sidebar={sidebar} 
      className={className}
      containerSize="max-w-6xl"
    >
      <ContentRenderer 
        item={product} 
        variant="product" 
        showMeta={true}
      />
    </ContentLayout>
  );
};

// Service-specific layout
export const ServiceLayout = ({ 
  service, 
  relatedServices = [], 
  className = '' 
}) => {
  const sidebar = (
    <div className="space-y-6">
      {/* Service Info Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
        
        {service.price_range && (
          <div className="mb-4">
            <span className="text-sm text-gray-600">Price Range</span>
            <div className="text-lg font-semibold text-purple-600">{service.price_range}</div>
          </div>
        )}
        
        {service.duration && (
          <div className="mb-4">
            <span className="text-sm text-gray-600">Typical Duration</span>
            <div className="text-sm font-medium text-gray-900">{service.duration}</div>
          </div>
        )}
        
        {service.deliverables && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Deliverables</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {service.deliverables.slice(0, 4).map((deliverable, index) => (
                <li key={index} className="flex items-start gap-2">
                  <i className="fas fa-check text-purple-500 mt-0.5 text-xs"></i>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <a 
          href="/contact"
          className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors text-center block"
        >
          Request Consultation
        </a>
      </div>
      
      {/* Process Overview */}
      {service.process && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Process</h3>
          <div className="space-y-3">
            {service.process.map((step, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{step.name}</h4>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
          <div className="space-y-3">
            {relatedServices.slice(0, 3).map((relatedService, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                <h4 className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">
                  <a href={`/services/${relatedService.slug}`}>
                    {relatedService.title}
                  </a>
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {relatedService.excerpt?.substring(0, 80)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <ContentLayout 
      sidebar={sidebar} 
      className={className}
      containerSize="max-w-6xl"
    >
      <ContentRenderer 
        item={service} 
        variant="service" 
        showMeta={true}
      />
    </ContentLayout>
  );
};

// Simple page layout without sidebar
export const PageLayout = ({ 
  page, 
  className = '' 
}) => {
  return (
    <ContentLayout 
      className={className}
      containerSize="max-w-4xl"
    >
      <ContentRenderer 
        item={page} 
        variant="default" 
        showMeta={false}
      />
    </ContentLayout>
  );
};

export default ContentLayout; 
import { ContentProcessor } from './contentProcessor';

// This will be populated at build time with actual content
// For now, we'll create a structure that can be easily replaced
export const contentData = {
  blog: [],
  products: [],
  services: [],
  pages: [],
  caseStudies: []
};

export class ContentLoader {
  static async loadAllContent() {
    try {
      // In a real build process, this would read from the file system
      // For now, we'll simulate loading content
      const content = {
        blog: await this.loadBlogPosts(),
        products: await this.loadProducts(),
        services: await this.loadServices(),
        pages: await this.loadPages(),
        caseStudies: await this.loadCaseStudies()
      };

      return content;
    } catch (error) {
      console.error('Error loading content:', error);
      return contentData;
    }
  }

  static async loadBlogPosts() {
    // This would be replaced at build time with actual content loading
    return this.processContentType('blog');
  }

  static async loadProducts() {
    return this.processContentType('products');
  }

  static async loadServices() {
    return this.processContentType('services');
  }

  static async loadPages() {
    return this.processContentType('pages');
  }

  static async loadCaseStudies() {
    return this.processContentType('caseStudies');
  }

  static async processContentType(type) {
    const rawContent = contentData[type] || [];
    
    if (rawContent.length === 0) return [];

    const processed = await ContentProcessor.processDirectory(rawContent);
    return ContentProcessor.sortContent(processed, 'date', 'desc');
  }

  static getContentBySlug(type, slug) {
    const content = contentData[type] || [];
    return content.find(item => item.slug === slug);
  }

  static getContentByType(type, options = {}) {
    const {
      category,
      tag,
      featured = false,
      limit,
      page = 1,
      perPage = 6
    } = options;

    let content = contentData[type] || [];

    // Apply filters
    if (category) {
      content = ContentProcessor.filterByCategory(content, category);
    }

    if (tag) {
      content = ContentProcessor.filterByTag(content, tag);
    }

    if (featured) {
      content = ContentProcessor.getFeaturedContent(content, limit);
    }

    // Apply pagination
    if (limit && !featured) {
      content = content.slice(0, limit);
    } else if (!limit && !featured) {
      const result = ContentProcessor.paginateContent(content, page, perPage);
      return result;
    }

    return {
      content,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: content.length,
        hasNext: false,
        hasPrev: false,
        perPage: content.length
      }
    };
  }

  static searchAllContent(query) {
    if (!query) return [];

    const allContent = [
      ...contentData.blog,
      ...contentData.products,
      ...contentData.services,
      ...contentData.pages,
      ...contentData.caseStudies
    ];

    return ContentProcessor.searchContent(allContent, query);
  }

  static getAllCategories(type = null) {
    let content = [];
    
    if (type) {
      content = contentData[type] || [];
    } else {
      content = [
        ...contentData.blog,
        ...contentData.products,
        ...contentData.services,
        ...contentData.pages,
        ...contentData.caseStudies
      ];
    }

    const categories = new Set();
    content.forEach(item => {
      if (item.category) {
        categories.add(item.category);
      }
    });

    return Array.from(categories).sort();
  }

  static getAllTags(type = null) {
    let content = [];
    
    if (type) {
      content = contentData[type] || [];
    } else {
      content = [
        ...contentData.blog,
        ...contentData.products,
        ...contentData.services,
        ...contentData.pages,
        ...contentData.caseStudies
      ];
    }

    const tags = new Set();
    content.forEach(item => {
      if (item.tags && Array.isArray(item.tags)) {
        item.tags.forEach(tag => tags.add(tag));
      }
    });

    return Array.from(tags).sort();
  }

  static getContentStats() {
    return {
      blog: contentData.blog.length,
      products: contentData.products.length,
      services: contentData.services.length,
      pages: contentData.pages.length,
      caseStudies: contentData.caseStudies.length,
      total: Object.values(contentData).reduce((acc, arr) => acc + arr.length, 0)
    };
  }

  static getRecentContent(limit = 5) {
    const allContent = [
      ...contentData.blog.map(item => ({ ...item, type: 'blog' })),
      ...contentData.products.map(item => ({ ...item, type: 'product' })),
      ...contentData.services.map(item => ({ ...item, type: 'service' })),
      ...contentData.pages.map(item => ({ ...item, type: 'page' })),
      ...contentData.caseStudies.map(item => ({ ...item, type: 'case-study' }))
    ];

    return ContentProcessor.sortContent(allContent, 'date', 'desc').slice(0, limit);
  }
}

// Export individual content arrays for direct access
export const {
  blog: blogPosts,
  products,
  services,
  pages,
  caseStudies
} = contentData; 
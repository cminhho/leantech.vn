import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export class ContentProcessor {
  static async processMarkdown(content, filePath = '') {
    try {
      const { data: frontmatter, content: markdown } = matter(content);
      
      const processedContent = await remark()
        .use(html)
        .process(markdown);
      
      const slug = frontmatter.slug || this.generateSlug(frontmatter.title);
      const readTime = this.calculateReadTime(markdown);
      const wordCount = this.countWords(markdown);
      
      return {
        ...frontmatter,
        content: processedContent.toString(),
        slug,
        readTime,
        wordCount,
        filePath,
        // Extract first paragraph as excerpt if not provided
        excerpt: frontmatter.excerpt || this.extractExcerpt(markdown),
        // Generate search-friendly content
        searchContent: this.generateSearchContent(frontmatter, markdown)
      };
    } catch (error) {
      console.error(`Error processing markdown: ${filePath}`, error);
      return null;
    }
  }

  static generateSlug(title) {
    if (!title) return '';
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  static calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = this.countWords(content);
    return Math.ceil(wordCount / wordsPerMinute);
  }

  static countWords(content) {
    return content
      .replace(/[#*`_\[\]()]/g, '') // Remove markdown syntax
      .split(/\s+/)
      .filter(word => word.length > 0).length;
  }

  static extractExcerpt(content, maxLength = 150) {
    // Get first paragraph or first sentence
    const firstParagraph = content.split('\n\n')[0];
    const cleaned = firstParagraph
      .replace(/[#*`_\[\]()]/g, '') // Remove markdown syntax
      .trim();
    
    if (cleaned.length <= maxLength) return cleaned;
    
    // Truncate to word boundary
    const truncated = cleaned.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  }

  static generateSearchContent(frontmatter, content) {
    // Combine title, excerpt, tags, and content for search indexing
    const searchParts = [
      frontmatter.title || '',
      frontmatter.excerpt || '',
      Array.isArray(frontmatter.tags) ? frontmatter.tags.join(' ') : '',
      frontmatter.category || '',
      content.replace(/[#*`_\[\]()]/g, '') // Clean markdown syntax
    ];
    
    return searchParts
      .filter(part => part.length > 0)
      .join(' ')
      .toLowerCase();
  }

  static async processDirectory(contentArray) {
    const processed = await Promise.all(
      contentArray.map(({ content, filePath }) => 
        this.processMarkdown(content, filePath)
      )
    );
    
    return processed.filter(item => item !== null);
  }

  static sortContent(content, sortBy = 'date', order = 'desc') {
    return content.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      // Handle date sorting
      if (sortBy === 'date') {
        aValue = new Date(aValue || 0);
        bValue = new Date(bValue || 0);
      }
      
      if (order === 'desc') {
        return bValue > aValue ? 1 : -1;
      } else {
        return aValue > bValue ? 1 : -1;
      }
    });
  }

  static filterByCategory(content, category) {
    if (!category) return content;
    return content.filter(item => 
      item.category && item.category.toLowerCase() === category.toLowerCase()
    );
  }

  static filterByTag(content, tag) {
    if (!tag) return content;
    return content.filter(item => 
      item.tags && item.tags.some(t => 
        t.toLowerCase() === tag.toLowerCase()
      )
    );
  }

  static searchContent(content, query) {
    if (!query) return content;
    
    const lowercaseQuery = query.toLowerCase();
    return content.filter(item => 
      item.searchContent && item.searchContent.includes(lowercaseQuery)
    );
  }

  static paginateContent(content, page = 1, perPage = 6) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    
    return {
      content: content.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(content.length / perPage),
        totalItems: content.length,
        hasNext: endIndex < content.length,
        hasPrev: page > 1,
        perPage
      }
    };
  }

  static getFeaturedContent(content, count = 3) {
    return content
      .filter(item => item.featured === true)
      .slice(0, count);
  }

  static getRelatedContent(currentItem, allContent, count = 3) {
    if (!currentItem.tags || !Array.isArray(currentItem.tags)) {
      return [];
    }

    const related = allContent
      .filter(item => 
        item.slug !== currentItem.slug && // Exclude current item
        item.tags && 
        item.tags.some(tag => currentItem.tags.includes(tag))
      )
      .sort((a, b) => {
        // Sort by number of matching tags
        const aMatches = a.tags.filter(tag => currentItem.tags.includes(tag)).length;
        const bMatches = b.tags.filter(tag => currentItem.tags.includes(tag)).length;
        return bMatches - aMatches;
      })
      .slice(0, count);

    return related;
  }

  static generateSitemap(content, baseUrl = '') {
    const urls = content.map(item => ({
      url: `${baseUrl}/${item.type}/${item.slug}`,
      lastmod: item.date || new Date().toISOString().split('T')[0],
      changefreq: item.type === 'blog' ? 'weekly' : 'monthly',
      priority: item.featured ? '0.8' : '0.6'
    }));

    return urls;
  }
} 
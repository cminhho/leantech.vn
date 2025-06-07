const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

class BuildContentProcessor {
  constructor() {
    this.contentDir = path.join(__dirname, '..', 'src', 'content');
    this.outputDir = path.join(__dirname, '..', 'src', 'data');
    
    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  async processAllContent() {
    console.log('🚀 Processing markdown content...');
    
    try {
      const content = {
        blog: await this.processContentType('blog/posts'),
        products: await this.processContentType('products'),
        services: await this.processContentType('services'),
        pages: await this.processContentType('pages'),
        caseStudies: await this.processContentType('case-studies')
      };

      // Generate content index
      await this.generateContentIndex(content);
      
      // Generate individual content files
      await this.generateContentFiles(content);
      
      // Generate metadata
      await this.generateMetadata(content);

      console.log('✅ Content processing completed successfully!');
      console.log('📊 Content stats:', this.getContentStats(content));
      
    } catch (error) {
      console.error('❌ Error processing content:', error);
      process.exit(1);
    }
  }

  async processContentType(subDir) {
    const fullPath = path.join(this.contentDir, subDir);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directory not found: ${subDir}`);
      return [];
    }

    const files = fs.readdirSync(fullPath)
      .filter(file => file.endsWith('.md'))
      .sort();

    console.log(`📁 Processing ${files.length} files in ${subDir}`);

    const processed = await Promise.all(
      files.map(file => this.processMarkdownFile(path.join(fullPath, file), file))
    );

    return processed
      .filter(item => item !== null)
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  async processMarkdownFile(filePath, fileName) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content: markdown } = matter(content);
      
      // Simple markdown to HTML conversion without remark for now
      const htmlContent = this.simpleMarkdownToHtml(markdown);
      
      const slug = frontmatter.slug || this.generateSlug(frontmatter.title);
      const readTime = this.calculateReadTime(markdown);
      const wordCount = this.countWords(markdown);
      
      return {
        ...frontmatter,
        content: htmlContent,
        slug,
        readTime,
        wordCount,
        fileName,
        filePath: filePath.replace(path.join(__dirname, '..'), ''),
        // Extract first paragraph as excerpt if not provided
        excerpt: frontmatter.excerpt || this.extractExcerpt(markdown),
        // Generate search-friendly content
        searchContent: this.generateSearchContent(frontmatter, markdown),
        // Add processing timestamp
        processed: new Date().toISOString()
      };
    } catch (error) {
      console.error(`❌ Error processing ${fileName}:`, error.message);
      return null;
    }
  }

  simpleMarkdownToHtml(markdown) {
    // Basic markdown to HTML conversion
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/^\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>');
  }

  generateSlug(title) {
    if (!title) return '';
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = this.countWords(content);
    return Math.ceil(wordCount / wordsPerMinute);
  }

  countWords(content) {
    return content
      .replace(/[#*`_\[\]()]/g, '') // Remove markdown syntax
      .split(/\s+/)
      .filter(word => word.length > 0).length;
  }

  extractExcerpt(content, maxLength = 150) {
    // Get first paragraph
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

  generateSearchContent(frontmatter, content) {
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

  async generateContentIndex(content) {
    const indexPath = path.join(this.outputDir, 'content-index.json');
    
    // Create a lightweight index without full content
    const index = {};
    
    Object.keys(content).forEach(type => {
      index[type] = content[type].map(item => ({
        type: item.type || type,
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        date: item.date,
        author: item.author,
        category: item.category,
        tags: item.tags,
        featured: item.featured,
        readTime: item.readTime,
        wordCount: item.wordCount,
        image: item.image,
        filePath: item.filePath
      }));
    });

    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
    console.log(`📝 Generated content index: ${indexPath}`);
  }

  async generateContentFiles(content) {
    // Generate full content files for each type
    Object.keys(content).forEach(type => {
      const filePath = path.join(this.outputDir, `${type}-content.json`);
      fs.writeFileSync(filePath, JSON.stringify(content[type], null, 2));
      console.log(`📝 Generated ${type} content: ${filePath}`);
    });
  }

  async generateMetadata(content) {
    const metadata = {
      generated: new Date().toISOString(),
      stats: this.getContentStats(content),
      categories: this.getAllCategories(content),
      tags: this.getAllTags(content),
      types: Object.keys(content)
    };

    const metadataPath = path.join(this.outputDir, 'content-metadata.json');
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`📝 Generated metadata: ${metadataPath}`);
  }

  getContentStats(content) {
    const stats = {};
    let total = 0;
    
    Object.keys(content).forEach(type => {
      stats[type] = content[type].length;
      total += content[type].length;
    });
    
    stats.total = total;
    return stats;
  }

  getAllCategories(content) {
    const categories = new Set();
    
    Object.values(content).forEach(items => {
      items.forEach(item => {
        if (item.category) {
          categories.add(item.category);
        }
      });
    });
    
    return Array.from(categories).sort();
  }

  getAllTags(content) {
    const tags = new Set();
    
    Object.values(content).forEach(items => {
      items.forEach(item => {
        if (item.tags && Array.isArray(item.tags)) {
          item.tags.forEach(tag => tags.add(tag));
        }
      });
    });
    
    return Array.from(tags).sort();
  }
}

// Run the build process
async function main() {
  const processor = new BuildContentProcessor();
  await processor.processAllContent();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { BuildContentProcessor }; 
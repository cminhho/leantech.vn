# LeanTechCo Typography System

## 📝 **Typography Overview**

Hệ thống typography của LeanTechCo được thiết kế để đảm bảo tính nhất quán, dễ đọc và hierarchy rõ ràng trên toàn bộ website với fixed font sizes và colors.

---

## 🔤 **Font Family**

### Primary Font: Inter Variable
```css
font-family: "Inter", Arial, sans-serif;
font-optical-sizing: auto;
```

**Font Weights Used:**
- **Light (300)**: Supporting text, captions
- **Regular (400)**: Body text, descriptions  
- **Medium (500)**: Emphasis, important text
- **SemiBold (600)**: Section headers, card titles
- **Bold (700)**: Main headings, hero titles

---

## 📐 **Section Typography System**

### Main Section Headers

**Section Title (Default)**
```css
.section-title {
  font-size: 40px;
  color: #0e101b;
  @apply font-bold mb-6 leading-tight;
}
```
*Usage: Main section headings (Solutions, Products, Contact)*
*Font: 40px, Color: #0e101b (Dark Black)*

**Section Title White**
```css
.section-title-white {
  font-size: 40px;
  @apply font-bold text-white mb-6 leading-tight;
}
```
*Usage: Section headings on dark backgrounds (CTA, WhyUs)*
*Font: 40px, Color: White*

### Section Header Variants

**Small Section Title**
```css
.section-title-sm {
  @apply text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight;
}
```
*Usage: Sub-sections, smaller content blocks*

**Large Section Title**
```css
.section-title-lg {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight;
}
```
*Usage: Hero sections, major announcements*

### Section Descriptions

**Standard Subtitle**
```css
.section-subtitle {
  font-size: 16px;
  color: #344054;
  @apply max-w-3xl mx-auto mb-12 leading-relaxed;
}
```
*Font: 16px, Color: #344054 (Gray 700)*

**Centered Subtitle**
```css
.section-subtitle-center {
  font-size: 16px;
  color: #344054;
  @apply max-w-3xl mx-auto mb-12 leading-relaxed text-center;
}
```
*Font: 16px, Color: #344054 (Gray 700)*

**White Subtitle**
```css
.section-subtitle-white {
  font-size: 16px;
  @apply text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed;
}
```
*Font: 16px, Color: White with 90% opacity*

---

## 🏷️ **Card Typography**

### Card Titles
```css
.card-title {
  font-size: 22px;
  line-height: 1.2;
  @apply font-bold text-gray-900 mb-3;
}
```
*Usage: Product cards, solution cards, team cards*
*Font: 22px, Line-height: 1.2, Weight: Bold (700)*

### Card Descriptions
```css
.card-subtitle {
  @apply text-gray-600 leading-relaxed;
}
```
*Usage: Supporting text in cards*

---

## 📝 **Content Typography**

### List Item Text
```css
.list-item-text {
  color: var(--gray--gray600, #6b7280);
  font-size: 13px;
  font-weight: 400;
  @apply leading-relaxed;
}
```
*Usage: Bullet points, feature lists, navigation items*
*Font: 13px, Color: #6b7280 (Gray 600), Weight: Regular (400)*

### Body Text
```css
.body-text {
  font-size: 14px;
  @apply leading-relaxed;
}
```
*Usage: General content, paragraphs, descriptions*
*Font: 14px, Weight: Regular (400)*

### Body Base Size
```css
body {
  font-size: 14px;
  font-weight: 400;
}

/* Tailwind text-base is also customized to 14px */
.text-base {
  font-size: 14px;
}
```
*Default body text size updated to 14px*
*Tailwind's .text-base utility is customized to 14px for consistency*

---

## 📊 **Typography Scale**

### Fixed Font Sizes for Consistency

| Class | Font Size | Color | Usage |
|-------|-----------|--------|--------|
| `.section-title` | 40px | #0e101b | Main section headings |
| `.section-title-white` | 40px | White | Section headings on dark backgrounds |
| `.section-subtitle` | 16px | #344054 | Section descriptions |
| `.section-subtitle-center` | 16px | #344054 | Centered section descriptions |
| `.section-subtitle-white` | 16px | White (90%) | Section descriptions on dark backgrounds |
| `.card-title` | 22px | #1f2937 | Card headers |
| `.list-item-text` | 13px | #6b7280 | List items, bullet points |
| `.body-text` | 14px | Inherit | General content |
| `.section-title-sm` | 2xl-3xl (24-30px) | #1f2937 | Sub-sections (responsive) |

### Body Text Scale

| Element | Size | Weight | Color | Usage |
|---------|------|--------|--------|--------|
| Section title | 40px | 700 | #0e101b | Main headings |
| Section description | 16px | 400 | #344054 | Section descriptions |
| Card title | 22px | 700 | #1f2937 | Card headings |
| Body text (base) | 14px | 400 | #374151 | Default body text |
| List item text | 13px | 400 | #6b7280 | Bullet points, lists |
| Small text | 14px | 400 | #6b7280 | Captions, labels |
| Micro text | 12px | 400 | #9ca3af | Fine print |

### Tailwind Utility Classes

| Class | Font Size | Usage |
|-------|-----------|--------|
| `.text-xs` | 12px | Micro text, fine print |
| `.text-sm` | 14px | Small text, captions |
| `.text-base` | 14px | **Default body text** |
| `.text-lg` | 18px | Larger body text |
| `.text-xl` | 20px | Emphasized text |
| `.text-2xl` | 24px | Sub-headings |
| `.text-3xl` | 30px | Section headings |
| `.text-4xl` | 36px | Large headings |
| `.text-5xl` | 48px | Hero headings |

---

## 🎨 **Color Applications**

### Text Color Hierarchy
```css
/* Section Typography Colors */
#0e101b           /* Section titles - Dark black */
#344054           /* Section descriptions - Gray 700 */

/* Standard text colors */
text-gray-900     /* Main headings, important text */
text-gray-700     /* Body text, content */
text-gray-600     /* Supporting text, descriptions */
text-gray-500     /* Muted text, labels */
text-gray-400     /* Placeholder text */

/* Brand colors for text */
text-primary      /* Links, CTAs, brand elements */
text-secondary    /* Highlights, accents */

/* Light theme text */
text-white        /* Text on dark backgrounds */
text-white/90     /* Slightly muted white text */
text-white/80     /* More muted white text */
```

### Specific Color Values
```css
/* Typography Color Variables */
:root {
  /* Gray Color Variables */
  --gray--gray600: #6b7280;
  --gray--gray700: #374151;
  --gray--gray800: #1f2937;
  --gray--gray900: #111827;
  
  /* Typography Colors */
  --section-title-color: #0e101b;
  --section-description-color: #344054;
}

/* Usage Examples */
.section-title {
  color: var(--section-title-color);
}

.section-subtitle {
  color: var(--section-description-color);
}

.list-item-text {
  color: var(--gray--gray600);
}
```

---

## 📱 **Responsive Typography**

### Breakpoint-Specific Adjustments

**Mobile (< 768px)**
- Reduced text sizes for better mobile reading
- Tighter line spacing for compact layouts
- Shorter line lengths for readability

**Tablet (768px - 1024px)**
- Balanced text sizes
- Moderate line spacing
- Optimal reading experience

**Desktop (> 1024px)**
- Larger text sizes for impact
- Generous line spacing
- Wide content layouts

### Responsive Classes
```css
/* Custom responsive typography */
.responsive-h1 {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl;
}

.responsive-h2 {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl;
}

.responsive-body {
  @apply text-sm sm:text-base lg:text-lg;
}
```

---

## 🎯 **Usage Examples**

### Main Sections
```html
<!-- Standard section -->
<div class="text-center mb-16">
  <h2 class="section-title">Section Title</h2>
  <p class="section-subtitle-center">Section description text here...</p>
</div>

<!-- Dark background section -->
<div class="text-center mb-16">
  <h2 class="section-title-white">Section Title</h2>
  <p class="section-subtitle-white">Section description text here...</p>
</div>
```

### Card Content
```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-subtitle">Card description content...</p>
</div>
```

### Sub-sections
```html
<h3 class="section-title-sm">Sub-section Title</h3>
```

---

## ✅ **Typography Best Practices**

### Do's ✅
- **Use consistent heading hierarchy**
- **Maintain proper contrast ratios** (4.5:1 minimum)
- **Keep line lengths optimal** (45-75 characters)
- **Use responsive text sizes**
- **Apply semantic HTML tags** (h1, h2, h3, p)
- **Follow the established scale**

### Don'ts ❌  
- **Don't skip heading levels** (h1 > h3)
- **Don't use custom font sizes** outside the system
- **Don't ignore line height** for readability
- **Don't use all caps** for body text
- **Don't mix different font families**
- **Don't forget mobile optimization**

---

## 🔧 **Customization Guidelines**

### Adding New Typography Classes
```css
@layer components {
  /* Custom typography variant */
  .your-text-class {
    @apply text-base md:text-lg font-medium text-gray-700 leading-relaxed;
  }
}
```

### Extending Existing Classes
```css
/* Modifier for existing classes */
.section-title-accent {
  @apply section-title;
  color: theme('colors.primary');
}
```

---

## 📊 **Accessibility Standards**

### WCAG Compliance
- **Color contrast**: 4.5:1 minimum for normal text
- **Large text**: 3:1 minimum (18pt+ or 14pt+ bold)
- **Focus indicators**: Visible and high contrast
- **Font size**: 16px minimum for body text

### Screen Reader Support
- **Semantic HTML**: Proper heading structure
- **Clear hierarchy**: Logical content flow  
- **Descriptive text**: Meaningful headings and labels

---

## 🧪 **Testing Checklist**

### Typography QA
- ✅ **Heading hierarchy**: Logical h1-h6 structure
- ✅ **Responsive scaling**: Text readable at all sizes
- ✅ **Color contrast**: WCAG AA compliance
- ✅ **Line height**: Proper spacing for readability
- ✅ **Font loading**: Fallbacks work correctly
- ✅ **Mobile experience**: Text readable on small screens

---

## 📈 **Performance Considerations**

### Font Loading Strategy
```html
<!-- Preload critical fonts -->
<link rel="preload" href="fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>

<!-- Optimized Google Fonts load -->
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900&display=swap" rel="stylesheet">
```

### CSS Optimization
- **Font subsetting**: Only load required character sets
- **Font display**: `font-display: swap` for better performance
- **Critical CSS**: Inline essential typography styles

---

## 🚀 **Migration Guide**

### From Old System
```html
<!-- Before -->
<h2 class="text-4xl font-bold text-gray-900 mb-4">Old Title</h2>
<p class="text-lg text-gray-600">Old description</p>

<!-- After -->
<h2 class="section-title">New Title</h2>
<p class="section-subtitle-center">New description</p>
```

### Benefits of New System
1. **Consistency**: Uniform typography across all sections
2. **Maintainability**: Central control of text styles
3. **Responsive**: Automatic scaling across devices
4. **Accessibility**: Built-in WCAG compliance
5. **Performance**: Optimized font loading

---

**Typography System Version 1.0**  
*Consistent, accessible, and scalable typography for the entire LeanTechCo website.* 
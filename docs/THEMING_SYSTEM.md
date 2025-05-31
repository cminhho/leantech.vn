# LeanTechCo Theming System

## 🎨 **CSS Architecture Overview**

LeanTechCo sử dụng **Tailwind CSS** kết hợp với **custom CSS layers** để tạo ra hệ thống theming nhất quán và dễ bảo trì.

---

## 📁 **File Structure**

```
src/
├── index.css                 # Main CSS file
├── components/
│   ├── layout/              # Layout components
│   └── sections/            # Page sections
└── ...

tailwind.config.js           # Tailwind configuration
```

---

## 🎯 **Design Tokens**

### Color Tokens
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1331d2',      // Brand primary blue
        secondary: '#00B8FF',    // Brand secondary cyan
        accent: '#F9FAFB'        // Light gray accent
      }
    }
  }
}
```

### Typography Tokens
```css
/* src/index.css */
body {
  font-family: "Inter", Arial, sans-serif;
  font-optical-sizing: auto;
  font-size: 14px;
  font-weight: 400;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
}
```

### Customized Font Scale
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      'xs': '12px',
      'sm': '14px', 
      'base': '16px',     // Improved accessibility (was 14px)
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
    }
  }
}
```

### Section Typography System
```css
/* Section Headers - Main sections */
.section-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight;
}

.section-title-white {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight;
}

/* Section Descriptions */
.section-subtitle {
  @apply text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed;
}

.section-subtitle-white {
  @apply text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed;
}

.section-subtitle-center {
  @apply text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-center;
}

/* Section Header Variants */
.section-title-sm {
  @apply text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight;
}

.section-title-lg {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight;
}

/* Card Typography */
.card-title {
  @apply text-xl font-bold text-gray-900 mb-3 leading-tight;
}

.card-subtitle {
  @apply text-gray-600 leading-relaxed;
}
```

---

## 🏗️ **CSS Layers Architecture**

### Layer Structure
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Base HTML element styles */
}

@layer components {
  /* Component classes */
}

@layer utilities {
  /* Utility classes */
}
```

### Base Layer
```css
@layer base {
  /* Base HTML element styles */
}
```

---

## 🧩 **Component Theming**

### Button System
```css
@layer components {
  /* Base Button */
  .btn {
    @apply px-5 py-2.5 rounded-full font-medium transition-all duration-300;
    @apply inline-flex items-center gap-2 justify-center;
    @apply focus:outline-none focus:ring-4 focus:ring-offset-2;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
    @apply border text-sm leading-5;
  }
  
  /* Button Variants */
  .btn-primary {
    @apply bg-primary text-white border-primary shadow-md;
    @apply hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1;
    @apply focus:ring-primary/20;
  }
  
  .btn-glass {
    @apply bg-white/10 text-white border-white/30 backdrop-blur-sm;
    @apply hover:bg-white/20 hover:-translate-y-1;
    @apply focus:ring-white/20;
  }
}
```

### Container System
```css
@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section-padding {
    @apply py-16 md:py-20 lg:py-24;
  }
  
  .section-title {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold mb-6;
  }
  
  .section-subtitle {
    @apply text-lg text-gray-600 max-w-3xl mx-auto mb-12;
  }
}
```

---

## 🎨 **Theme Variants**

### Light Theme (Default)
```css
:root {
  --color-primary: #1331d2;
  --color-secondary: #00B8FF;
  --color-accent: #F9FAFB;
  --color-text: #111827;
  --color-text-muted: #6B7280;
  --color-background: #FFFFFF;
  --color-border: #D1D5DB;
}
```

### Glass/Overlay Effects
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

---

## 🌟 **Special Effects**

### Gradient System
```css
/* Gradient utilities */
.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 to-secondary bg-clip-text text-transparent;
}

.text-gradient {
  @apply bg-gradient-to-r from-cyan-300 to-secondary bg-clip-text text-transparent;
}

/* Background gradients */
.bg-gradient-primary {
  background: linear-gradient(160deg, #1331d2, #438eff);
}

.bg-gradient-hero {
  background: linear-gradient(90deg, #122796, #3c73ff);
}
```

### Animation & Transitions
```css
/* Transition standards */
.transition-standard {
  transition: all 0.3s ease;
}

.transition-fast {
  transition: all 0.15s ease;
}

.transition-slow {
  transition: all 0.5s ease;
}

/* Hover effects */
.hover-lift {
  @apply hover:-translate-y-1 hover:shadow-lg transition-all duration-300;
}

.hover-scale {
  @apply hover:scale-105 transition-transform duration-300;
}
```

---

## 📱 **Responsive Design Tokens**

### Breakpoints
```javascript
// tailwind.config.js breakpoints
screens: {
  'sm': '640px',
  'md': '768px', 
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
}
```

### Responsive Typography
```css
/* Responsive heading scales */
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

### Responsive Spacing
```css
/* Responsive padding/margins */
.responsive-section {
  @apply py-12 md:py-16 lg:py-20 xl:py-24;
}

.responsive-container {
  @apply px-4 sm:px-6 lg:px-8 xl:px-12;
}
```

---

## 🎯 **Component Pattern Library**

### Card Patterns
```css
/* Standard card */
.card {
  @apply bg-white rounded-xl shadow-lg border border-gray-100;
  @apply hover:shadow-2xl hover:border-primary/20 transition-all duration-300;
}

/* Hero card */
.card-hero {
  @apply bg-white rounded-2xl shadow-xl p-8;
}

/* Glass card */
.card-glass {
  @apply glass-card text-white;
}
```

### Navigation Patterns
```css
/* Header styles */
.header-fixed {
  @apply fixed top-0 w-full z-50 transition-all duration-300;
}

.header-scrolled {
  @apply bg-primary shadow-md;
}

.header-transparent {
  @apply bg-transparent;
}
```

---

## 🔧 **Customization Guidelines**

### Adding New Theme Colors
```javascript
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1331d2',
        secondary: '#00B8FF',
        accent: '#F9FAFB',
        // Add new colors here
        tertiary: '#your-color',
        surface: '#your-surface-color'
      }
    }
  }
}
```

### Creating New Component Themes
```css
@layer components {
  /* New component pattern */
  .your-component {
    @apply base-styles;
    /* Custom properties */
  }
  
  .your-component-variant {
    @apply your-component;
    @apply variant-specific-styles;
  }
}
```

---

## 🎨 **Color Utilities**

### Opacity Variants
```css
/* Primary color with opacity */
.bg-primary-10 { background-color: rgba(19, 49, 210, 0.1); }
.bg-primary-20 { background-color: rgba(19, 49, 210, 0.2); }
.bg-primary-50 { background-color: rgba(19, 49, 210, 0.5); }
.bg-primary-90 { background-color: rgba(19, 49, 210, 0.9); }

/* Text colors with opacity */
.text-primary-70 { color: rgba(19, 49, 210, 0.7); }
.text-primary-80 { color: rgba(19, 49, 210, 0.8); }
```

### Hover Color States
```css
/* Consistent hover states */
.hover-primary {
  @apply hover:bg-primary hover:text-white transition-colors;
}

.hover-secondary {
  @apply hover:bg-secondary hover:text-white transition-colors;
}
```

---

## 📊 **Performance Considerations**

### CSS Optimization
- **PurgeCSS**: Automatically removes unused CSS
- **CSS Layers**: Proper cascade management
- **Critical CSS**: Above-the-fold styles prioritized

### Loading Strategy
```css
/* Critical styles inline */
@layer base {
  /* Essential base styles */
}

/* Non-critical styles loaded async */
@layer components {
  /* Component styles */
}
```

---

## 🧪 **Testing & Validation**

### Theme Testing Checklist
- ✅ **Color contrast**: WCAG AA compliance
- ✅ **Typography scale**: Readable across devices
- ✅ **Component consistency**: Uniform appearance
- ✅ **Responsive behavior**: All breakpoints tested
- ✅ **Hover/focus states**: Interactive feedback
- ✅ **Browser compatibility**: Cross-browser testing

### Debugging Tools
```css
/* Debug utilities */
.debug-red { @apply border-2 border-red-500; }
.debug-blue { @apply border-2 border-blue-500; }
.debug-green { @apply border-2 border-green-500; }
```

---

## 🚀 **Future Enhancements**

### Planned Features
- **Dark mode support**
- **Additional color themes**
- **Enhanced animation library**
- **Component theming API**

### CSS Custom Properties Integration
```css
:root {
  --color-primary: #1331d2;
  --color-secondary: #00B8FF;
  --spacing-unit: 0.25rem;
  --border-radius-base: 0.75rem;
}

.btn {
  background-color: var(--color-primary);
  border-radius: var(--border-radius-base);
}
```

---

**Theming System Version 1.0**  
*Scalable, maintainable, and consistent theming across the entire application.* 
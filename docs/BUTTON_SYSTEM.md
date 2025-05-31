# LeanTechCo Button System

Hệ thống button được thiết kế để đảm bảo tính nhất quán trên toàn bộ website. **Tất cả buttons đều sử dụng thiết kế vuông vắn (border-radius: 0) để tạo nên vẻ ngoài chuyên nghiệp và hiện đại.**

## Base Button
Tất cả buttons đều bắt đầu với class `.btn` và có design vuông vắn:
```html
<button class="btn">Button với thiết kế vuông vắn</button>
```

## Button Variants

### Primary Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-white">White Button</button>
```

### Outline & Ghost Buttons
```html
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-ghost">Ghost Button</button>
<button class="btn btn-glass">Glass Button</button>
```

### Status Buttons
```html
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-dark">Dark</button>
```

### Special Buttons
```html
<button class="btn btn-gradient">Gradient Button</button>
<button class="btn btn-link">Link Button</button>
<button class="btn btn-text">Text Button</button>
```

## Button Sizes

**Tất cả sizes đều sử dụng rounded-full để đảm bảo consistency:**

```html
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium (Default)</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
```

## Button States

### Loading State
```html
<button class="btn btn-primary btn-loading">Loading...</button>
```

### Disabled State
```html
<button class="btn btn-primary" disabled>Disabled</button>
```

### With Icons
```html
<button class="btn btn-primary">
  <i class="fas fa-download"></i>
  Download
</button>

<!-- Icon only - perfect circle -->
<button class="btn btn-primary btn-icon">
  <i class="fas fa-heart"></i>
</button>
```

## Button Layouts

### Full Width
```html
<button class="btn btn-primary btn-wide">Full Width Button</button>
```

### Button Group
```html
<div class="btn-group">
  <button class="btn btn-outline">Left</button>
  <button class="btn btn-outline">Middle</button>
  <button class="btn btn-outline">Right</button>
</div>
```

## Usage Examples

### Hero Section
```html
<div class="flex gap-3">
  <a href="#contact" class="btn btn-primary btn-lg">
    Liên hệ tư vấn
    <i class="fas fa-chevron-right"></i>
  </a>
  <a href="#solutions" class="btn btn-glass btn-lg">
    Xem giải pháp
    <i class="fas fa-chevron-right"></i>
  </a>
</div>
```

### Forms
```html
<button type="submit" class="btn btn-primary btn-wide btn-loading">
  Gửi yêu cầu
</button>
```

### Cards
```html
<button class="btn btn-text btn-sm">
  Liên hệ
</button>
```

## Best Practices

1. **Sử dụng đúng variant**: 
   - `btn-primary` cho CTA chính
   - `btn-secondary` cho CTA phụ  
   - `btn-outline` cho action thứ cấp
   - `btn-ghost` cho action tối thiểu

2. **Kích thước phù hợp**:
   - `btn-sm` cho cards, tables
   - `btn-md` (default) cho general use
   - `btn-lg` cho hero sections, important CTAs

3. **States**:
   - Luôn thêm `disabled` attribute cho buttons disabled
   - Sử dụng `btn-loading` khi submit forms
   - Kết hợp với icons để tăng clarity

4. **Accessibility**:
   - Buttons tự động có focus states
   - Sử dụng `aria-label` cho icon-only buttons
   - Đảm bảo contrast ratio đủ cao

5. **🎯 Consistent Border Radius**:
   - **TẤT CẢ buttons đều sử dụng `rounded-full`**
   - Icon buttons là perfect circles
   - Button groups có border radius nhất quán
   - Không sử dụng `rounded-lg` hay `rounded-xl` cho buttons

## Color Mapping

- **Primary**: `#1331d2` (Brand blue)
- **Secondary**: White background with primary text
- **Success**: `#059669` (Green)
- **Danger**: `#dc2626` (Red)  
- **Warning**: `#eab308` (Yellow)
- **Dark**: `#111827` (Gray 900)

## Migration Guide

### From Old System
```html
<!-- Old -->
<a href="#" class="btn btn-primary text-sm hover:shadow-lg hover:-translate-y-1 rounded-lg">
  Old Button
</a>

<!-- New -->
<a href="#" class="btn btn-primary btn-sm">
  New Button (Auto rounded-full)
</a>
```

## 🔥 **Updates v2.0 - Maximum Border Radius**

### ✅ **What Changed:**
- **All button sizes** now use `rounded-full` automatically
- **Button groups** use `rounded-l-full` và `rounded-r-full`
- **Icon buttons** are perfect circles
- **Text buttons** also use `rounded-full`

### ✅ **Benefits:**
- **100% Consistent** appearance across all buttons
- **Modern look** with smooth, rounded edges
- **Better visual hierarchy** with consistent shapes
- **Improved accessibility** with larger touch targets

Hệ thống mới đã bao gồm tất cả hover effects, sizing, và **maximum border radius** cho tính nhất quán hoàn hảo! 🎯 
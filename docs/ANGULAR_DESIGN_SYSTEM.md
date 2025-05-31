# Angular Design System - LeanTechCo

## 🎯 **Triết Lý Thiết Kế**

Angular Design (Sharp Design) là hệ thống thiết kế đặc trưng bởi việc sử dụng các yếu tố hình học vuông vắn, góc cạnh để tạo nên vẻ ngoài chuyên nghiệp, hiện đại và mạnh mẽ.

### Đặc Điểm Chính:
- **Không Border Radius**: Tất cả elements đều có góc vuông (border-radius: 0)
- **Hình Học Rõ Ràng**: Sử dụng hình chữ nhật, hình vuông thay vì hình tròn
- **Đường Thẳng**: Ưu tiên các đường thẳng thay vì đường cong
- **Contrast Cao**: Sự tương phản rõ ràng giữa các elements
- **Cấu Trúc Grid**: Layout dựa trên hệ thống grid rõ ràng

## 🔧 **Cài Đặt Kỹ Thuật**

### Tailwind Config
```javascript
// tailwind.config.js
borderRadius: {
  'none': '0',
  'sm': '0',
  DEFAULT: '0',
  'md': '0',
  'lg': '0',
  'xl': '0',
  '2xl': '0',
  '3xl': '0',
  'full': '0'
}
```

### CSS Components
Tất cả component classes đều được cập nhật với `border-radius: 0`:
- `.btn` - Buttons
- `.glass-card` - Glass cards
- `input`, `select`, `textarea` - Form elements

## 🎨 **Áp Dụng Trong Components**

### ✅ Correct Angular Design
```jsx
// Sharp rectangular button
<button className="btn btn-primary">Click Me</button>

// Square icons instead of circular
<i className="fas fa-check"></i>
<i className="fas fa-square"></i>

// Rectangular cards
<div className="bg-white border shadow-lg">Content</div>

// Grid patterns instead of hexagonal
<svg>
  <rect x="0" y="0" width="40" height="40" />
</svg>
```

### ❌ Avoid These
```jsx
// Rounded elements (KHÔNG sử dụng)
<button className="rounded-lg">Button</button>
<i className="fas fa-circle"></i>
<div className="rounded-xl">Card</div>

// Curved/diagonal patterns (KHÔNG sử dụng)
<div className="transform rotate-45">Element</div>
<path d="M0,60 Q300,20 600,60" />
```

## 📐 **Design Tokens**

### Border Radius
```css
/* ALL elements */
border-radius: 0;
```

### Shadows (Kept Sharp)
```css
/* Sharp shadows enhance angular design */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
```

### Icons
**Preferred:** `fa-check`, `fa-square`, `fa-stop`, `fa-cogs`
**Avoid:** `fa-circle`, `fa-check-circle`, các icons tròn

## 🎯 **Lợi Ích**

1. **Chuyên Nghiệp**: Tạo cảm giác nghiêm túc, đáng tin cậy
2. **Hiện Đại**: Theo xu hướng design minimalist
3. **Nhất Quán**: Dễ maintain và scale
4. **Accessibility**: Dễ nhận diện cho users
5. **Brand Identity**: Tạo điểm nhận diện độc đáo

## 🔄 **Implementation Checklist**

- [x] **Tailwind Config**: Set all border-radius to 0
- [x] **CSS Components**: Update button system
- [x] **Form Elements**: Remove rounded corners
- [x] **Icons**: Replace circular with square icons
- [x] **Decorative Elements**: Convert to rectangular patterns
- [x] **Cards & Containers**: Ensure sharp corners
- [x] **Documentation**: Update branding guidelines

## 🎨 **Visual Examples**

### Before (Rounded Design)
```
┌─────────────┐
│  [●] Button │  ← Rounded corners
└─────────────┘
```

### After (Angular Design)
```
┌─────────────┐
│  [■] Button │  ← Sharp corners
└─────────────┘
```

## 📱 **Responsive Considerations**

Angular Design works excellently across all devices:
- **Desktop**: Sharp, professional appearance
- **Tablet**: Clean grid layouts
- **Mobile**: Clear touch targets with defined edges

---

**Note**: This implementation maintains all accessibility standards while providing a distinctive, modern visual identity for LeanTechCo. 
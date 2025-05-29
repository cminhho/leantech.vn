# System Patterns: LeanTechCo React Website

## Architecture Overview
The LeanTechCo React website follows a simple, component-based architecture optimized for performance and maintainability. The system is designed as a single-page application (SPA) with sections that can be accessed through smooth scrolling.

## Component Structure
```
App (Root)
├── Layout Components
│   ├── Header (Navigation)
│   └── Footer
├── Section Components
│   ├── Hero
│   ├── Solutions
│   ├── Products
│   ├── WhyUs
│   ├── Clients
│   ├── Testimonials
│   └── Contact
└── UI Components
    ├── Button
    ├── Card
    ├── Section Header
    └── Feature Item
```

## Component Patterns

### Layout Components
- **Stateful**: Manage navigation state (mobile menu open/closed)
- **Fixed Positioning**: Header stays fixed at the top
- **Responsive**: Adapts to different screen sizes

### Section Components
- **Stateless**: Pure presentation components
- **Self-contained**: Each section is independent
- **Consistent Structure**: Each follows similar pattern with section header and content
- **ID-based Anchors**: For navigation scroll targets

### UI Components
- **Reusable**: Used across multiple sections
- **Prop-based**: Configuration through props
- **Consistent Styling**: Follow TailwindCSS patterns

## Data Flow
- One-way data flow from parent to child components
- No complex state management required (no Redux, Context API, etc.)
- Static content embedded directly in components

## Styling Patterns
- **TailwindCSS Utility Classes**: Primary styling method
- **Component-specific Extensions**: Custom utilities when needed
- **Mobile-first Approach**: Base styles for mobile, then progressively enhance
- **Common Style Variables**: Colors, spacing, shadows defined in config

## Animation Patterns
- **Simple Transitions**: Hover effects, menu opening/closing
- **Minimal**: Focus on performance, avoid heavy animations
- **CSS-based**: Use CSS transitions rather than JavaScript animations when possible

## Responsive Patterns
- **Breakpoints**: Standard Tailwind breakpoints (sm, md, lg, xl)
- **Grid System**: Flexbox and CSS Grid for layouts
- **Fluid Typography**: Text sizes adjust to viewport
- **Stack on Mobile**: Multi-column layouts stack vertically on small screens

## Performance Patterns
- **Minimal Dependencies**: Only essential libraries
- **Optimized Images**: Properly sized and compressed
- **Lazy Loading**: Where appropriate for below-the-fold content
- **Code Splitting**: Component-based for faster initial load 
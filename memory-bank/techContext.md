# Technical Context: LeanTechCo React Website

## Technology Stack

### Frontend
- **React**: Core library for building the UI
- **TailwindCSS**: Utility-first CSS framework for styling
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

### Key Requirements
- Minimal dependencies
- No unnecessary libraries
- Performance optimization
- Responsive design

## Development Environment
- Node.js
- npm/yarn
- Modern JavaScript (ES6+)
- React component architecture

## Project Structure
```
react-leantechco/
├── public/
│   ├── index.html
│   └── assets/ (fonts, images, etc.)
├── src/
│   ├── components/
│   │   ├── layout/ (Header, Footer)
│   │   └── sections/ (Hero, Solutions, Products, etc.)
│   ├── App.jsx
│   └── index.js
├── package.json
└── tailwind.config.js
```

## Color Scheme
- Primary Blue: #1331d2
- Secondary Blue: #00B8FF
- Accent Gray: #F9FAFB
- Text Dark: #1a1a1a
- Text Medium: #444
- Text Light: rgba(255, 255, 255, 0.9)

## Typography
- Primary Font: 'Inter', sans-serif
- Font Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Heading Sizes: 
  - h1: 2.5rem - 4rem (responsive)
  - h2: 2rem - 3rem (responsive)
  - h3: 1.5rem - 1.75rem
  - Body: 1rem - 1.125rem

## Key Technical Decisions
1. **Single Page Application**: All content on one page with smooth scrolling
2. **Component Modularity**: Each section is a self-contained component
3. **Responsive Approach**: Mobile-first design with Tailwind breakpoints
4. **Minimal JavaScript**: Only essential interactions
5. **Performance Focus**: Optimized assets and code splitting

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version) 
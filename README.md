# LeanTechCo React Website

A modern website for LeanTechCo built with React and TailwindCSS.

## Technologies Used

- React 18
- TailwindCSS
- Font Awesome (Icons)
- Google Fonts (Inter)

## Features

- Responsive design, compatible with all devices
- Performance optimized with minimal dependencies
- Modern UI with animations and interactions
- Easy to extend and maintain

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd leantech.vn
```

2. Install dependencies:
```bash
npm install
```

3. Run the development environment:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Deployment

### GitHub Pages
This project is configured for automatic deployment to GitHub Pages.

**Live Site**: https://cminhho.github.io/leantech.vn

To deploy manually:
```bash
npm run deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
leantech.vn/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── sections/    # Section components (Hero, Products, etc.)
│   ├── App.jsx          # Main App component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles with TailwindCSS
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml      # Deployment workflow
├── package.json         # Project dependencies
├── tailwind.config.js   # TailwindCSS configuration
├── DEPLOYMENT.md        # Deployment guide
└── README.md            # Project documentation
```

## Customization

- Edit color themes in `tailwind.config.js`
- Modify section content in `src/components/sections/`
- Add additional libraries as needed via `npm install`

## Development

This project was bootstrapped with Create React App and uses:
- Modern React patterns with functional components and hooks
- TailwindCSS for utility-first styling
- Component-based architecture for maintainability

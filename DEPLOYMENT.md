# Deployment Guide

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Deployed Site
🌐 **Live Site**: https://cminhho.github.io/leantech.vn

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `build` folder to the `gh-pages` branch

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the project on every push to `main`
- Deploys to GitHub Pages if the build is successful

### Project Structure

```
├── src/                    # Source code
├── public/                 # Public assets
├── build/                  # Production build (generated)
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml         # Deployment workflow
├── package.json           # Dependencies & scripts
└── DEPLOYMENT.md          # This file
```

### Build Configuration

- **Build tool**: Create React App
- **Styling**: Tailwind CSS
- **Deploy tool**: gh-pages
- **Homepage**: https://cminhho.github.io/leantech.vn

### Development Workflow

1. Make changes in the `src/` directory
2. Test locally with `npm start`
3. Commit and push to `main` branch
4. GitHub Actions will automatically build and deploy

### Manual Build

To build locally:

```bash
npm run build
```

The built files will be in the `build/` directory.

### Troubleshooting

If deployment fails:
1. Check GitHub Actions logs in the repository
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the `gh-pages` branch exists and is set as the source

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Update the `homepage` field in `package.json`
3. Configure DNS settings for your domain 
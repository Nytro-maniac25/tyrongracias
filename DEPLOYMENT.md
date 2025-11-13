# Deployment Guide

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tyron-portfolio.git
git push -u origin main
```

2. Enable GitHub Actions:
   - Go to your repository Settings
   - Navigate to Actions > General
   - Enable "Allow all actions and reusable workflows"
   - Save

3. Enable GitHub Pages:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (created automatically by the workflow)
   - Folder: `/ (root)`
   - Save

4. The site will be available at: `https://YOUR_USERNAME.github.io/tyron-portfolio/`

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service:
   - **Vercel**: `vercel --prod`
   - **Netlify**: Drag and drop the `dist` folder
   - **GitHub Pages**: Use `gh-pages` package or upload manually

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Custom Domain

If you want to use a custom domain, update the `base` in `vite.config.js` to `/` instead of `/tyron-portfolio/`.


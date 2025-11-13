# Tyron Gracias - Portfolio Website

A pixelated, interactive portfolio website showcasing digital product design work.

## Features

- ✨ WebGL interactive pixelated background with mouse interaction
- 🖱️ Custom pixel cursor (arrow/glove) with hover effects
- 📜 Parallax scrolling effects with floating pixelated shapes
- 🎨 Project showcase with category tabs (UX/UI, WEB, MOTION, VISUAL, EXPERIMENTAL)
- 📝 Contact form page with project inquiry fields
- 🕐 Real-time location and time display (Dubai, UAE)
- 🎮 Pixelated character with "OPEN TO WORK!" speech bubble
- 🌊 Animated fish background in CTA section

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit `src/components/Header.jsx` to update email and LinkedIn links:
```jsx
<a href="mailto:your-email@example.com">EMAIL</a>
<a href="https://linkedin.com/in/yourprofile">LINKEDIN</a>
```

### Update Projects

Edit `src/components/Projects.jsx` to add your actual projects in the `projects` object.

### Change Repository Name

If your GitHub repository has a different name, update the `base` path in `vite.config.js`:
```js
const base = '/your-repo-name/'
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options

**GitHub Pages:**
- Push to GitHub and enable GitHub Actions (automatic deployment)

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- Drag and drop the `dist` folder after building

## Tech Stack

- React 18
- Vite
- Three.js (WebGL)
- React Router
- CSS3 with pixelated styling

## License

MIT


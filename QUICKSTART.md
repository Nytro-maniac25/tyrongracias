# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Your Contact Info
Edit `src/components/Header.jsx`:
- Replace `tyron@example.com` with your email
- Replace `https://linkedin.com/in/tyron` with your LinkedIn URL

Also update the "SAY HI" button email in `src/components/CTA.jsx` if needed.

### 3. Run Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:5173`

## 📦 Deploy to GitHub

1. Create a new repository on GitHub
2. Update `vite.config.js` - change `/tyron-portfolio/` to match your repo name
3. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages in repository settings
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🎨 Customize

- **Projects**: Edit `src/components/Projects.jsx` to add your work
- **Skills**: Edit `src/components/Experience.jsx` to update skills list
- **Form Backend**: Connect `src/pages/ProjectForm.jsx` to your form handler (Formspree, Netlify Forms, etc.)

## 📝 Form Submission

The form currently shows an alert. To connect it to a backend:

1. **Formspree** (Easiest):
   - Sign up at formspree.io
   - Get your form endpoint
   - Update the `handleSubmit` function in `ProjectForm.jsx`:
   ```jsx
   const handleSubmit = async (e) => {
     e.preventDefault()
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     })
     // Handle response
   }
   ```

2. **Netlify Forms**: Add `netlify` attribute to form tag
3. **Custom Backend**: Update the fetch URL to your API endpoint

Happy building! 🎉


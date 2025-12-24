# Brother's Birthday Surprise Website 🎂🎄

A beautiful, full-page Next.js birthday website created as a special surprise! This website celebrates a birthday on December 25, 2005, with multiple animated sections, image galleries, confetti animations, and audio support.

## Features

- 🎂 Birthday-themed design with age calculation (December 25, 2005)
- ✨ Beautiful full-page design with smooth transitions
- 🎨 Multiple animated sections with gradient backgrounds
- 🎊 Floating confetti animations
- 📸 Image gallery section for birthday memories
- 🎵 Background audio support
- 📱 Fully responsive design
- 🚀 Optimized for GitHub Pages deployment

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to `public/images/`:
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
   - Or update the image paths in `app/page.tsx`

3. Add your audio files to `public/audio/`:
   - Name them: `sound1.mp3`, `sound2.mp3`
   - Or update the audio paths in `app/page.tsx`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Building for Production

Build the static site:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Deploying to GitHub Pages

### Step 1: Update next.config.js

Uncomment and update the `basePath` and `assetPrefix` in `next.config.js` with your repository name:

```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

### Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Save the settings

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Action will automatically build and deploy your site!

## Customization

### Changing Sections

Edit the `sections` array in `app/page.tsx` to customize the content and colors.

### Adding More Images

1. Add images to `public/images/`
2. Update the `images` array in `app/page.tsx`

### Changing Audio

1. Add audio files to `public/audio/`
2. Update the `audioFiles` array in `app/page.tsx`

### Styling

The website uses Tailwind CSS. You can customize colors, animations, and styles in:
- `app/globals.css` - Global styles and animations
- `app/page.tsx` - Component styles using Tailwind classes

## License

This is a personal project. Feel free to use and modify as needed!

---

Made with ❤️ for someone special!


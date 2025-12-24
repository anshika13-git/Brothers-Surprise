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

The GitHub Actions workflow is already set up! The `basePath` configuration is automatically handled:
- **Local development**: Works at `localhost:3000` (no basePath)
- **GitHub Pages**: Automatically uses `/Brothers-Surprise` basePath when building in CI

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Save the settings

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin first_code
```

(Or push to `main` if that's your default branch)

The GitHub Action will automatically:
- Build your Next.js site with the correct basePath for GitHub Pages
- Deploy it to GitHub Pages
- Update on every push to `first_code` or `main` branch

Your site will be available at:
- `https://username.github.io/Brothers-Surprise` (if using basePath)
- `https://username.github.io` (if repo is `username.github.io`)

**Note:** The first deployment may take a few minutes. You can check the status in the **Actions** tab of your repository.

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


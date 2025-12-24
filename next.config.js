/** @type {import('next').NextConfig} */
// Use basePath for production builds (GitHub Pages)
// For local dev (npm run dev), basePath won't interfere
const isProduction = process.env.NODE_ENV === 'production';
const useBasePath = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
const basePath = useBasePath ? '/Brothers-Surprise' : '';

const nextConfig = {
  // Static export for GitHub Pages (doesn't affect 'next dev', only 'next build')
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - required for project repos
  // Next.js automatically prefixes all paths starting with '/' with basePath
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
}

module.exports = nextConfig


/** @type {import('next').NextConfig} */
// Use basePath only for GitHub Pages builds (CI environment)
// For local dev (npm run dev), basePath is empty so it works at localhost:3000
const isGitHubPages = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/Brothers-Surprise' : '';

const nextConfig = {
  // Static export for GitHub Pages (doesn't affect 'next dev', only 'next build')
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - required for project repos (only set in CI/builds)
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
}

module.exports = nextConfig


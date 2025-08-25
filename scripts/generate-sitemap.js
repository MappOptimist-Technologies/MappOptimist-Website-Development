const fs = require('fs');
const path = require('path');

// Base URL for your website
const baseUrl = process.env.NEXT_WEBSITE_BASE_URL || 'https://mapoptimist.com';

// Blog slugs
const blogSlugs = [
  'Semiconductor-Chip-The-Backbone-of-Modern-Technology',
  'Understanding-AI-and-Generative-AI-Transforming-Computer-Programming',
  "Veo-Google-DeepMind's-Advanced-Video-Generation-Model",
  "Reinforcement-Learning-and-Generative-AI-The-Future-of-OCR-ICR"
];

// Service slugs
const serviceSlugs = [
  "ai-machine-learning-development-services",
  "mobile-app-development-services",
  "website-development-services",
  "custom-software-development-services",
  "blockchain-solution-development-services",
  "digital-marketing-solution-services",
  "it-staff-augmentation-services"
];

// Static routes
const staticRoutes = ['', '/about-us', '/services', '/industries-we-serve', '/contact', '/blogs'];

// Industry routes
const industriesRoutes = [
  "retail-e-commerce","healthcare","finance-banking","logistics-transportation",
  "fashion-apparel","agriculture","education","technology-startups",
  "qsr-fb","tax-legal","government-public-sector","business-process-automation",
  "ai-in-construction-real-estate"
];

// Generate all routes
const allRoutes = [
  ...staticRoutes,
  ...blogSlugs.map(slug => `/blogs/${slug}`),
  ...serviceSlugs.map(slug => `/services/${slug}`),
  ...industriesRoutes.map(slug => `/industries-we-serve/${slug}`)
];

// Build sitemap content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
`).join('')}
</urlset>`;

// Write sitemap to public folder
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

console.log('✅ Static sitemap.xml generated!');

// src/app/sitemap.xml/route.ts

export async function GET() {
    const baseUrl = process.env.NEXT_WEBSITE_BASE_URL;

    const blogSlugs = ['Semiconductor-Chip-The-Backbone-of-Modern-Technology', 'Understanding-AI-and-Generative-AI-Transforming-Computer-Programming', "Veo-Google-DeepMind's-Advanced-Video-Generation-Model", "Reinforcement-Learning-and-Generative-AI-The-Future-of-OCR-ICR"];
    const serviveSlugs = ["ai-machine-learning-development-services", "mobile-app-development-services", "website-development-services", "custom-software-development-services", "blockchain-solution-development-services", "digital-marketing-solution-services", "it-staff-augmentation-services"]
    const staticRoutes = ['', '/about-us', '/services', '/industries-we-serve', '/contact', '/blogs'];
    const industriesRoutes = ["retail-e-commerce", "healthcare", "finance-banking", "logistics-transportation", "fashion-apparel", "agriculture", "education", "technology-startups", "qsr-fb", "tax-legal", "government-public-sector", "business-process-automation", "ai-in-construction-real-estate"]
    const dynamicRoutes = blogSlugs.map((slug) => `/blogs/${slug}`);
    const dynamicServicesRoutes = serviveSlugs.map((slug) => `/services/${slug}`);
    const industriesRoutesList = industriesRoutes.map((slug) => `/industries-we-serve/${slug}`);
    const allRoutes = [...staticRoutes, ...dynamicRoutes, ...dynamicServicesRoutes, ...industriesRoutesList];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
            .map((route) => {
                return `
      <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
            })
            .join('')}
  </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

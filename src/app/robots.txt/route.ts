// src/app/robots.txt/route.ts
import { NextResponse } from 'next/server';

export function GET() {
    const body = `
User-agent: *
Allow: /

Sitemap: ${process.env.NEXT_WEBSITE_BASE_URL}/sitemap.xml
`;

    return new NextResponse(body, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}

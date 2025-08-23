import React from 'react';
import { StaticImageData } from "next/image";
import Blog1 from "../../../../public/assets/images/blog1.jpeg";
import Blog2 from "../../../../public/assets/images/blog2.png";
import AIIcon from "../../../../public/assets/images/aiIcon.png";
import ServicesCommonComponents from '@/components/common/servicesComponents';

export type ServiceDataType = {
  title: string;
  subtitle: string;
  points: string[];
  img1: string | StaticImageData;
  cardIcon: string | StaticImageData;
}

export type TechnologiesDataType = {
  title: string;
  technologies: string[];
}

const data: ServiceDataType[] = [
  {
    title: "Custom Website Development",
    subtitle: "We deliver highly customized websites designed to match your brand's voice and meet your business goals.",
    points: [
      "Corporate Websites, Personal Branding Sites, Product Landing Pages",
      "Interactive UI/UX Design & Frontend Engineering",
      "Built with React, Next.js, PHP, Laravel, Node.js, or static site generators",
      "Integrated with CRMs, email automation tools, and marketing APIs",
      "Business Websites, Corporate Portals, Landing Pages",
      "Built using React, HTML5, CSS3, PHP, Python, Node.js",
      "Designed with SEO best practices, mobile-first strategy & UX optimization"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172114/Custom_apps_zasfq2.jpg",
    cardIcon: AIIcon
  },
  {
    title: "E-Commerce Website Development",
    subtitle: "Drive your online sales with fast, secure, and scalable eCommerce websites.",
    points: [
      "Shopify, WooCommerce, Magento, and custom shopping cart solutions",
      "AI-powered search and product filtering",
      "Secure payment gateway integration (Stripe, Razorpay, PayPal, etc.)",
      "Cart recovery automation, real-time tracking, and order management",
      "Shopify, WooCommerce, Magento, BigCommerce, Custom Carts",
      "Integrated with payment gateways, AI-driven product filters, inventory automation",
      "Secure checkout, real-time order tracking, user dashboards"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172107/AdobeStock_1157242944_x7j7ko.jpg",
    cardIcon: AIIcon
  },
  {
    title: "WordPress Website Development",
    subtitle: "Get flexible and feature-rich WordPress sites for blogs, SMEs, and marketing purposes.",
    points: [
      "Custom theme and plugin development",
      "WooCommerce store development",
      "Advanced SEO setup and security hardening",
      "Gutenberg or Elementor-based page building",
      "Custom WordPress Themes & Plugins",
      "WooCommerce development & API integration",
      "Blog CMS, Portfolio, and Knowledge Base websites"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172152/Web_Application_zhudvk.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Website Optimization & Redesign",
    subtitle: "Improve performance, security, and conversion rates with our website optimization and redesign services.",
    points: [
      "UI/UX revamp based on heatmaps and analytics",
      "Core Web Vitals optimization (FCP, LCP, CLS, etc.)",
      "Technical SEO, accessibility compliance (WCAG), and responsive fixes",
      "Migration between platforms (e.g., Wix to WordPress, PHP to React)",
      "Speed optimization, code cleanup, SEO audit fixes",
      "Conversion-focused UI/UX revamp",
      "CMS or tech stack migration (e.g., WordPress to React, PHP to Node.js)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172127/Web_design_sikxt6.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Enterprise Web Application Development",
    subtitle: "We build robust enterprise-grade applications to streamline internal operations and improve business agility.",
    points: [
      "Custom ERP, CRM, HRMS, Inventory & Procurement Systems",
      "Finance Management Dashboards with Advanced Analytics",
      "Multi-user Role Management, Secure Access Controls, Audit Trails",
      "Workflow Automation and Performance Tracking",
      "ERP, CRM, HRMS, Inventory Systems",
      "Custom dashboards with analytics and user-based access controls"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172119/Application_design_j1yfsx.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Progressive Web Apps (PWAs)",
    subtitle: "Develop lightweight, reliable web apps with native-like performance that work across all devices.",
    points: [
      "Offline Functionality with Service Workers",
      "Add-to-Home Screen Features",
      "Real-Time Updates and Background Sync",
      "Optimized Load Times for Poor Connectivity",
      "Lightweight, offline-capable, installable apps",
      "Cross-browser compatibility with push notifications & local storage"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172134/PWA_b6ugye.jpg",
    cardIcon: AIIcon
  },
  {
    title: "SaaS Platform Development",
    subtitle: "Launch scalable SaaS platforms built with flexible architecture and cloud-native deployment.",
    points: [
      "Multi-Tenant Architecture for Subscription-Based Products",
      "Billing, Usage Tracking, and Analytics Integration",
      "User Roles & Permissions, Admin Dashboards",
      "API-Ready SaaS Engines with Third-Party Integrations",
      "SaaS dashboards for EdTech, FinTech, Healthcare, and more",
      "Subscription billing, user management, cloud-based storage, analytics modules"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172122/SAAS_ieihyl.jpg",
    cardIcon: AIIcon
  },
  {
    title: "AI-Integrated Web Portals",
    subtitle: "Create intelligent web portals that leverage machine learning and natural language processing to deliver smart user experiences.",
    points: [
      "AI Chatbots, Virtual Assistants, and Conversational Interfaces",
      "AI-Driven Document Processing and Form Autofill",
      "Personalization Engines and Predictive Analytics",
      "Computer Vision Features for Image Recognition and OCR",
      "Chatbot-enhanced customer portals",
      "AI-powered document extraction, personalization, and smart recommendations",
      "Real-time analytics with ML-driven dashboards"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172112/AI_intregration_qwd4tk.jpg",
    cardIcon: AIIcon
  },
  {
    title: "API Development & Integration",
    subtitle: "We develop secure and scalable APIs to connect your application ecosystem.",
    points: [
      "RESTful and GraphQL APIs for Internal/External Use",
      "Integration with Payment Gateways, CRM, ERP, SMS, Email & Marketing Tools",
      "Webhooks and Middleware Development",
      "Secure Authentication (OAuth 2.0, JWT, API Keys)",
      "REST, GraphQL API design & secure integration",
      "Payment gateways, SMS/Email, social login, ERP, CRM, IoT platforms"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172130/AdobeStock_1112861441_ab8uaz.jpg",
    cardIcon: AIIcon
  }
]


const technologiesData: TechnologiesDataType[] = [
  {
    title: "Frameworks & Platforms",
    technologies: [
      "React.js, Angular, Vue.js, Next.js, SvelteKit",
      "Node.js, Laravel, Django, ASP.NET Core, Ruby on Rails",
      "Shopify, WordPress, WooCommerce, Magento, Sanity, Strapi",
      "Firebase, Supabase, Vercel, Netlify, AWS Amplify, DigitalOcean"
    ]
  },
  {
    title: "Toolkits & Modules",
    technologies: [
      "Tailwind CSS, Bootstrap 5, Material UI, Ant Design",
      "Redux, Zustand, Vuex",
      "Google Lighthouse, GTmetrix, Web.dev tools",
      "ESLint, Prettier, Storybook"
    ]
  },
  {
    title: "Libraries & Components",
    technologies: [
      "Axios, React Query, SWR (data fetching)",
      "Chart.js, Recharts, D3.js, Victory (data visualizations)",
      "Framer Motion, Animate.css, GreenSock (UI animations)",
      "Lodash, Moment.js, Day.js, Yup, Zod (data handling and validation)"
    ]
  },
  {
    title: "AI-Powered Web App Capabilities",
    technologies: [
      "Algorithms & Deep Learning Architectures",
      "AI-based Recommendation Engines (user behavior, collaborative filtering)",
      "Computer Vision (object detection, facial recognition, OCR/ICR)",
      "NLP Chatbots (GPT-4, Dialogflow, Rasa)",
      "Auto-tagging, content summarization, document understanding"
    ]
  },
  {
    title: "Advanced AI Concepts Integrated in Web Development",
    technologies: [
      "LLM Integration (OpenAI GPT, Claude, Cohere, LLaMA)",
      "Retrieval Augmented Generation (RAG) Chatbot Workflows",
      "LangChain, Pinecone, Weaviate for AI search systems",
      "AI document intelligence (contracts, IDs, invoices, PDFs)",
      "Voice interfaces: Speech-to-text & text-to-speech (Whisper, Coqui)"
    ]
  }
]

const industriesData = [
  {
    title: "FinTech & Banking",
    points: ["Digital Transformation", "Core Banking", "AI in Finance"],
    img1: Blog1
  },
  {
    title: "Healthcare & MedTech",
    points: ["Telemedicine Apps", "EMR/EHR Development"],
    img1: Blog2
  },
  {
    title: "E-commerce & Retail",
    points: ["Omnichannel Apps", "POS", "Inventory Automation"],
    img1: Blog1
  },
  {
    title: "SaaS & Startups",
    points: ["MVP Launches", "Product Scaling", "Support Engineering"],
    img1: Blog2
  },
  {
    title: "Manufacturing",
    points: ["ERP", "IoT-Based Monitoring", "Smart Factory Solutions"],
    img1: Blog1
  },
  {
    title: "Gaming & Media",
    points: ["Game App Dev", "Streaming Platforms", "Real-Time Systems"],
    img1: Blog2
  }
]

const whyPoints = [
  "100% Customized Website & Web App Development",
  "Built on Secure, Scalable & Cloud-Ready Architecture",
  "SEO, Speed, & Mobile-First Optimized Designs",
  "Integrated with AI, APIs, CRMs, and Payment Gateways",
  "High-Performance Frontend & Backend Engineering",
  "Support for Continuous Updates, QA & Maintenance"
]

const mainTitle = "Website & Web Application Development Company";
const mainDescription = "Professional Website Development & Custom Web App Solutions for Modern Businesses";
const title = "Professional Website Development & Custom Web App Solutions for Modern Businesses";
const description = `At MappOptimist Technologies, we create modern, responsive, and SEO-optimized websites that engage users, drive conversions, and elevate your online brand presence. Our websites are built using the latest technologies, mobile-first principles, and industry-standard security to ensure they are visually compelling, high-performing, and future-ready.\n\nFrom startups to enterprises, our website development services cover business websites, eCommerce storefronts, corporate portals, and CMS-based platforms. We tailor every project with a user-first design approach, seamless backend integration, and optimized code structures for fast loading and easy scaling.`;
const specificServiceSliderTitle = "Website Development We Provide";
const technologyTitle = "Technologies, Tools & Platforms We Work On";
const serviceIndustriesSliderTitle = "Industries We Support with Staff Augmentation";
const whyTitle = "Why MappOptimist for Website & Web App Development?";
const quoteTitle = "Let's Build Your Intelligent, Future-Ready Web Platform";
const quoteDescription = `Whether you need a conversion-optimized website, an enterprise dashboard, or an AI-driven SaaS platform — MappOptimist Technologies delivers future-proof, performance-driven digital experiences.\n
Partner with MappOptimist Technologies - Your Trusted Website & Web App Development Company`
const quoteBtnText = "Connect Now"
const technologySubTitle = ""
const technologyDescription = "";

export const metadata = {
  title: "Website & Web Application Development Company",
  description: "Professional Website Development & Custom Web App Solutions for Modern Businesses. At MappOptimist Technologies, we create modern, responsive, and SEO-optimized websites that engage users, drive conversions, and elevate your online brand presence. Our websites are built using the latest technologies, mobile-first principles, and industry-standard security to ensure they are visually compelling, high-performing, and future-ready. From startups to enterprises, our website development services cover business websites, eCommerce storefronts, corporate portals, and CMS-based platforms. We tailor every project with a user-first design approach, seamless backend integration, and optimized code structures for fast loading and easy scaling.",
  openGraph: {
    title: "Website & Web Application Development Company",
    description: "Professional Website Development & Custom Web App Solutions for Modern Businesses. At MappOptimist Technologies, we create modern, responsive, and SEO-optimized websites that engage users, drive conversions, and elevate your online brand presence. Our websites are built using the latest technologies, mobile-first principles, and industry-standard security to ensure they are visually compelling, high-performing, and future-ready. From startups to enterprises, our website development services cover business websites, eCommerce storefronts, corporate portals, and CMS-based platforms. We tailor every project with a user-first design approach, seamless backend integration, and optimized code structures for fast loading and easy scaling.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/website-development-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170506/Website_ec93rr.jpg",
        width: 1200,
        height: 630,
        alt: "Website & Web Application Development Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/website-development-services`,
  },
};

export default function WebsiteDevelopmentServicesPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170506/Website_ec93rr.jpg"
      specificServiceSlider={data}
      displayIndustriesSlider={false}
      technologiesData={technologiesData}
      industriesData={industriesData}
      whyPoints={whyPoints}
      mainTitle={mainTitle}
      mainDescription={mainDescription}
      title={title}
      description={description}
      specificServiceSliderTitle={specificServiceSliderTitle}
      technologyTitle={technologyTitle}
      technologySubTitle={technologySubTitle}
      technologyDescription={technologyDescription}
      serviceIndustriesSliderTitle={serviceIndustriesSliderTitle}
      whyTitle={whyTitle}
      quoteTitle={quoteTitle}
      quoteDescription={quoteDescription}
      quoteBtnText={quoteBtnText}
    />
  );
}

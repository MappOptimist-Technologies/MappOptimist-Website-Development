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
    title: "Search Engine Optimization (SEO)",
    subtitle: "",
    points: [
      "Technical SEO Audits, Core Web Vitals Optimization",
      "Keyword Research, On-Page & Off-Page Optimization",
      "Structured Data & Schema Markup Implementation",
      "Local SEO (Google Business Profile, Geo Tagging)",
      "E-commerce SEO (Product Page Optimization, Merchant Center Setup)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172366/Advanced_SEO_lldxky.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    subtitle: "",
    points: [
      "Google Ads, Bing Ads, YouTube Ads, Meta Ads, LinkedIn Ads",
      "Display, Shopping, Video, and Retargeting Campaigns",
      "Conversion Tracking, Dynamic Remarketing, and Smart Bidding",
      "Ad Copy Testing, Landing Page Optimization"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172375/PPC_yposvo.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Content Marketing",
    subtitle: "",
    points: [
      "SEO Blogging, Website Copy, Guest Posting",
      "Video Marketing Scripts, Short Reels Content, Infographics",
      "Case Studies, E-books, Email Sequences, AI Copywriting",
      "Content Calendars and Topic Clustering for Better Ranking"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172383/Content_Marketing_pm88fv.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Social Media Marketing (SMM)",
    subtitle: "",
    points: [
      "Strategy for Facebook, Instagram, LinkedIn, Twitter, Pinterest, YouTube",
      "Influencer Collaborations and Community Management",
      "Visual Brand Storytelling, Social Media Ads, Hashtag Strategy",
      "Post Scheduling, Analytics Reporting & Engagement Tracking"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172372/SEO_and_Analutics_cg3qvd.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Email Marketing & Automation",
    subtitle: "",
    points: [
      "Newsletter Campaigns, Abandoned Cart Emails, Triggered Funnels",
      "Integration with CRM platforms (HubSpot, ActiveCampaign, Mailchimp, Zoho)",
      "A/B Testing, Personalization, Drip Campaigns",
      "Behavioral Segmentation & Lifecycle Marketing"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172369/eCommerce_Website_cnnhzg.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Analytics & Conversion Rate Optimization (CRO)",
    subtitle: "",
    points: [
      "Setup for Google Analytics 4 (GA4), Tag Manager, Looker Studio",
      "Heatmaps, Scroll Tracking, Funnel Visualization",
      "A/B Testing, Session Recording, Goal-Based Optimization",
      "Customer Journey Mapping & Performance Dashboards"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172363/CRO_lbw1dp.jpg",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "SEO Tools & Frameworks",
    technologies: [
      "Ahrefs",
      "SEMrush",
      "Moz",
      "Screaming Frog",
      "Google Search Console",
      "Google Lighthouse",
      "GTmetrix",
      "Surfer SEO",
      "RankMath",
      "Yoast SEO",
      "Clearscope",
      "SEO PowerSuite"
    ]
  },
  {
    title: "PPC & Advertising Platforms",
    technologies: [
      "Google Ads",
      "Microsoft Ads",
      "Meta Ads Manager",
      "TikTok Ads",
      "LinkedIn Campaign Manager",
      "Campaign Manager 360",
      "AdRoll",
      "AdEspresso"
    ]
  },
  {
    title: "Email Marketing Tools",
    technologies: [
      "Mailchimp",
      "Klaviyo",
      "Brevo (Sendinblue)",
      "ConvertKit",
      "Constant Contact",
      "HubSpot",
      "Zoho Campaigns",
      "ActiveCampaign",
      "MailerLite"
    ]
  },
  {
    title: "Social Media Management Platforms",
    technologies: [
      "Buffer",
      "Hootsuite",
      "Later",
      "Sprout Social",
      "Meta Business Suite",
      "Canva Pro",
      "Adobe Express",
      "SocialBee",
      "Metricool",
      "FeedHive"
    ]
  },
  {
    title: "CRO & Analytics Tools",
    technologies: [
      "Google Analytics 4 (GA4)",
      "Looker Studio",
      "Tag Manager",
      "Hotjar",
      "Crazy Egg",
      "Smartlook",
      "Microsoft Clarity",
      "Optimizely",
      "VWO",
      "Google Optimize",
      "SessionCam"
    ]
  }
]

const industriesData = [
  {
    title: "E-commerce",
    points: ["Catalog marketing", "Dynamic ads", "Seasonal campaigns"],
    img1: Blog1,
  },
  {
    title: "Healthcare",
    points: ["HIPAA-compliant advertising", "Doctor branding", "Telehealth SEO"],
    img1: Blog2,
  },
  {
    title: "Education & EdTech",
    points: ["Webinar campaigns", "Lead magnets", "SEO for course content"],
    img1: Blog1,
  },
  {
    title: "Real Estate",
    points: ["Video walkthrough ads", "Geo-targeted PPC", "Listing optimization"],
    img1: Blog2,
  },
  {
    title: "Fintech & BFSI",
    points: ["Trust-focused landing pages", "Content compliance", "Funnel automation"],
    img1: Blog1,
  },
  {
    title: "SaaS & Tech",
    points: ["Product launches", "Feature updates", "Pricing page optimization"],
    img1: Blog2,
  },
  {
    title: "Hospitality & Travel",
    points: ["Destination storytelling", "Influencer collabs", "Package SEO"],
    img1: Blog1,
  },
  {
    title: "Legal & Tax",
    points: ["Local SEO", "Authority blogging", "lead capture funnels"],
    img1: Blog2,
  },
]

const whyPoints = [
  "AI-Driven Insights and Predictive Analytics",
  "Multi-Platform Expertise Across Google, Meta, LinkedIn & More",
  "Conversion-Focused Campaigns Backed by Real-Time Data",
  "Creative Copy, Clean Design, and ROI-Backed Execution",
  "Monthly Reporting with KPIs, ROI, and Growth Forecasts",
]

const mainTitle = "Digital Marketing Solutions Company";
const mainDescription = "Transforming businesses by offering innovative Digital Marketing Solutions services.";
const title = "Boost Your Online Visibility with Data-Driven Digital Marketing Strategies";
const description = `At MappOptimist Technologies, we help businesses grow smarter and faster through comprehensive and measurable digital marketing solutions. Our team of digital strategists, SEO specialists, content creators, and performance marketers combines creativity with analytics to deliver highly targeted, ROI-driven campaigns. From brand awareness to lead generation and customer retention, our full-funnel digital marketing services ensure you stay ahead in the competitive online landscape.`;
const specificServiceSliderTitle = "Our Digital Marketing Services";
const technologyTitle = "Technologies, Toolkits & Frameworks We Work On";
const serviceIndustriesSliderTitle = "Industries We Help with Digital Marketing";
const whyTitle = "Why Choose MappOptimist for Digital Marketing";
const quoteTitle = "Ready to Accelerate Your Digital Growth?";
const quoteDescription = "Let MappOptimist Technologies become your full-stack growth partner for SEO, paid media, content marketing, and beyond.\nGet in touch for a free digital marketing audit today"
const quoteBtnText = "Connect Now"
const technologySubTitle = ""
const technologyDescription = "";

export const metadata = {
  title: "Digital Marketing Solutions Company",
  description: "Boost Your Online Visibility with Data-Driven Digital Marketing Strategies. Transforming businesses by offering innovative Digital Marketing Solutions services. At MappOptimist Technologies, we help businesses grow smarter and faster through comprehensive and measurable digital marketing solutions. Our team of digital strategists, SEO specialists, content creators, and performance marketers combines creativity with analytics to deliver highly targeted, ROI-driven campaigns. From brand awareness to lead generation and customer retention, our full-funnel digital marketing services ensure you stay ahead in the competitive online landscape.",
  openGraph: {
    title: "Digital Marketing Solutions Company",
    description: "Boost Your Online Visibility with Data-Driven Digital Marketing Strategies. Transforming businesses by offering innovative Digital Marketing Solutions services. At MappOptimist Technologies, we help businesses grow smarter and faster through comprehensive and measurable digital marketing solutions. Our team of digital strategists, SEO specialists, content creators, and performance marketers combines creativity with analytics to deliver highly targeted, ROI-driven campaigns. From brand awareness to lead generation and customer retention, our full-funnel digital marketing services ensure you stay ahead in the competitive online landscape.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/digital-marketing-solution-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170496/Digital_Marketting_nlyccp.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Solutions Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/digital-marketing-solution-services`,
  },
};

export default function DigitalMarketingServicesPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170496/Digital_Marketting_nlyccp.jpg"
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

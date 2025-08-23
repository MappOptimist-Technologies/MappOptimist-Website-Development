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
    title: "iOS App Development",
    subtitle: "Build sleek, feature-rich iOS apps using Swift and Objective-C with seamless App Store deployment.",
    points: [
      "iPhone & iPad App Development",
      "iOS UI/UX Design & Optimization",
      "Apple HealthKit & SiriKit Integration",
      "App Store Publishing & Maintenance"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172044/Ios_Development_gxsqrm.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Android App Development",
    subtitle: "Scalable Android apps with robust performance for smartphones, tablets, and wearables.",
    points: [
      "Kotlin & Java-Based Development",
      "Android TV & Wear OS App Development",
      "Google Play Store Optimization",
      "Firebase & Android Jetpack Integration"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172031/Android_Development_glvbty.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Cross-Platform App Development",
    subtitle: "Launch faster with unified mobile apps that work across platforms using a single codebase.",
    points: [
      "Flutter App Development",
      "React Native & Xamarin Solutions",
      "Ionic Framework Integration",
      "Cost-Effective Shared Codebase Approach"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172026/Interprise_level_txe3mm.jpg",
    cardIcon: AIIcon
  },
  {
    title: "AI-Driven Mobile App Development",
    subtitle: "Enhance user engagement and personalization with AI-powered app features.",
    points: [
      "NLP Chatbots & Voice Assistants",
      "AI-Based Predictive Search & Personalization",
      "Face Detection & Biometric Authentication",
      "Real-Time Analytics & Sentiment Analysis"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172041/AI_powered_rjajgs.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Enterprise Mobility Solutions",
    subtitle: "Digitize workflows and boost operational productivity with secure enterprise apps.",
    points: [
      "Enterprise App Development & MDM Compliance",
      "CRM, ERP, and HRMS Integration",
      "BYOD & Secure Cloud Connectivity",
      "Business Intelligence Dashboards"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172026/Interprise_level_txe3mm.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Mobile UI/UX Design",
    subtitle: "Design modern, intuitive interfaces that increase engagement and conversion.",
    points: [
      "UX Research & Wireframing",
      "High-Fidelity Prototyping",
      "Brand-Consistent App Interfaces",
      "Accessibility & Multi-Device Optimization"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172039/UI-UX_design_cabdeq.jpg",
    cardIcon: AIIcon
  },
  {
    title: "App Testing & QA",
    subtitle: "Ensure bug-free performance across devices and OS versions.",
    points: [
      "Functional, Regression & Compatibility Testing",
      "Manual & Automated QA Tools",
      "Security & Performance Optimization",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172029/Testing_2_cqx9fc.jpg",
    cardIcon: AIIcon
  },
  {
    title: "App Maintenance & Support",
    subtitle: "Keep your app updated, secure, and performing flawlessly.",
    points: [
      "Continuous Monitoring & Crash Analytics",
      "Version Control & Patch Updates",
      "Feature Expansion & Tech Stack Upgrades"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172033/maintenance_and_support_q7dy3e.jpg",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "Mobile App Frameworks & Platforms",
    technologies: [
      "SwiftUI / UIKit (iOS)",
      "Jetpack Compose / Android SDK (Android)",
      "Flutter",
      "React Native",
      "Ionic / Cordova",
      "Xamarin",
      "Unity (for gaming & AR apps)",
      "Amazon SageMaker"
    ]
  },
  {
    title: "Mobile Toolkits & Dev Environments",
    technologies: [
      "Xcode & Android Studio",
      "Expo CLI for React Native",
      "Firebase ML Kit",
      "Apple Core ML",
      "ARKit / RealityKit",
      "TensorFlow Lite & PyTorch Mobile",
      "FlutterFlow & Codemagic CI/CD",
      "Fastlane"
    ]
  },
  {
    title: "Mobile AI Libraries & SDKs",
    technologies: [
      "TensorFlow Lite for On-Device ML",
      "ML Kit for Firebase",
      "CoreML / CreateML (iOS)",
      "NLP Libraries",
      "OpenCV for Mobile",
      "Whisper ASR",
      "Google Cloud Vision / OCR API",
      "LangChain Mobile Agents",
    ]
  },
  {
    title: "AI-Driven Mobile Capabilities",
    technologies: [
      "NLP Chatbots and Conversational Interfaces",
      "Voice Search & Command Recognition",
      "Real-Time Personalization",
      "Emotion & Sentiment Detection in Reviews",
      "Image Classification & Product Recognition",
      "Face Authentication / Biometrics",
      "Smart Notifications Based on User Behavior",
      "Fitness Pattern Detection with Sensor Fusion",
    ]
  },
  {
    title: "Emerging Mobile App Concepts We Support",
    technologies: [
      "Edge AI for Offline Functionality",
      "Blockchain Integration (Wallets, KYC)",
      "AR/VR Apps for E-commerce, Real Estate, and Training",
      "On-Demand Apps with AI Matching Systems",
      "Gamified UX and Loyalty Engines",
      "AI-powered CMS for dynamic content delivery",
      "Custom SDKs for Hardware Integration (IoT, BLE)"
    ]
  },
]

const industriesData = [
  {
    title: "Healthcare Apps",
    points: [
      "HIPAA-compliant apps for telehealth",
      "Fitness",
      "Wellness tracking",
      "Hospital Management Application",
    ],
    img1: Blog1,
  },
  {
    title: "FinTech Apps",
    points: [
      "Digital wallets",
      "Loan apps",
      "KYC automation",
      "Mobile banking",
    ],
    img1: Blog2,
  },
  {
    title: "E-Commerce Apps",
    points: [
      "Multi-vendor stores",
      "Product catalogs",
      "Cart & payment integrations",
    ],
    img1: Blog1,
  },
  {
    title: "Education Apps",
    points: [
      "LMS",
      "Remote classrooms",
      "AR-based learning tools",
    ],
    img1: Blog2,
  },
  {
    title: "Logistics & Supply Chain",
    points: [
      "Delivery tracking",
      "Driver management",
      "Route optimization",
    ],
    img1: Blog1,
  },
  {
    title: "Fitness & Wellness",
    points: [
      "AI-based coaching",
      "Wearable integrations",
      "Subscription platforms",
    ],
    img1: Blog2,
  },
  {
    title: "Hospitality",
    points: [
      "Booking platforms",
      "Digital menu apps",
      "Concierge services",
    ],
    img1: Blog1,
  },
  {
    title: "Real Estate",
    points: [
      "Virtual property tours",
      "Lead generation",
      "Listing apps with maps",
    ],
    img1: Blog2,
  },
  {
    title: "Retail",
    points: [
      "Barcode scanners",
      "Inventory apps",
      "Mobile POS systems",
    ],
    img1: Blog1,
  },
  {
    title: "Travel",
    points: [
      "Trip planners",
      "E-Visa apps",
      "AR/VR city guides",
      "Multi-language interfaces",
    ],
    img1: Blog2,
  },
]

const whyPoints = [
  "Proficient in Native iOS, Android & Cross-Platform Development",
  "Integrated AI & ML Features for Enhanced Personalization",
  "70+ Successful App Launches Globally",
  "Agile, Scalable & Secure Architecture Designs",
  "Strong Focus on App Store Optimization (ASO) & Post-Launch Support"
]

const mainTitle = "Mobile App Development Company";
const mainDescription = "Transforming businesses by offering innovative Mobile App development services.";
const title = "Top Mobile App Development Company Offering AI-Powered Android & iOS App Solutions";
const description = `At MappOptimist Technologies, we are a leading mobile application development company committed to delivering custom mobile apps that are innovative, scalable, secure, and AI-integrated. Our expert developers create high-performance iOS, Android apps, and cross-platform mobile applications tailored for startups, SMEs, and enterprises worldwide.\n\nWhether you need a consumer-facing app, an enterprise mobility solution, or an intelligent AI-powered app, we offer end-to-end mobile app development services that are SEO - friendly, user-centric, and ready for rapid deployment.`;
const specificServiceSliderTitle = "Mobile App Development Services We Offer";
const technologyTitle = "Mobile Application Development Technologies We Work On";
const serviceIndustriesSliderTitle = "Mobile App Development for Industries We Serve";
const whyTitle = "Why MappOptimist is the Best Mobile App Development Partner";
const quoteTitle = "Let's Build Your Business-Boosting App Today";
const quoteDescription = "Let MappOptimist Technologies engineer your next-generation mobile app with intelligent features and an unbeatable user experience."
const quoteBtnText = "Let's Connect"
const technologySubTitle = "Leverage Our Mobile Expertise to Build Intelligent, Scalable, and Future-Ready Mobile Apps"
const technologyDescription = "At MappOptimist Technologies, we use cutting-edge technologies, cross-platform frameworks, and mobile-centric AI integrations to deliver high-performance mobile applications tailored to your business goals. As a globally trusted mobile app development company, we harness the power of advanced SDKs, cloud platforms, and UI toolkits to create mobile apps that are not only functional but future-proof.\n\nWhether you’re building a native iOS or Android app, or deploying a cross-platform solution with Flutter or React Native, we equip our apps with real-time features, intuitive UI, and powerful backend connectivity.\n\nWe also specialize in AI integration, ensuring your mobile app can support predictive features, voice commands, computer vision, and deep personalization.";

export const metadata = {
  title: "Mobile App Development Company",
  description: "Top Mobile App Development Company Offering AI-Powered Android & iOS App Solutions. Transforming businesses by offering innovative Mobile App development services. At MappOptimist Technologies, we are a leading mobile application development company committed to delivering custom mobile apps that are innovative, scalable, secure, and AI-integrated. Our expert developers create high-performance iOS, Android apps, and cross-platform mobile applications tailored for startups, SMEs, and enterprises worldwide. Whether you need a consumer-facing app, an enterprise mobility solution, or an intelligent AI-powered app, we offer end-to-end mobile app development services that are SEO-friendly, user-centric, and ready for rapid deployment.",
  openGraph: {
    title: "Mobile App Development Company",
    description: "Top Mobile App Development Company Offering AI-Powered Android & iOS App Solutions. Transforming businesses by offering innovative Mobile App development services. At MappOptimist Technologies, we are a leading mobile application development company committed to delivering custom mobile apps that are innovative, scalable, secure, and AI-integrated. Our expert developers create high-performance iOS, Android apps, and cross-platform mobile applications tailored for startups, SMEs, and enterprises worldwide. Whether you need a consumer-facing app, an enterprise mobility solution, or an intelligent AI-powered app, we offer end-to-end mobile app development services that are SEO-friendly, user-centric, and ready for rapid deployment.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/mobile-app-development-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170500/Mobile_Aapplcation_vgjg6a.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/mobile-app-development-services`,
  },
};

export default function MobileAppDevelopmentPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170500/Mobile_Aapplcation_vgjg6a.jpg"
      displayIndustriesSlider={false}
      specificServiceSlider={data}
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

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
    title: "Web, Desktop & Mobile Software Development",
    subtitle: "",
    points: [
      "Modern SaaS Applications for B2B/B2C",
      "Web Portals, Admin Dashboards, and Self-Service Platforms",
      "Cross-Platform and Native Mobile App Development (Flutter, React Native, Kotlin, Swift)",
      "PWA Development and Responsive Frontend Interfaces (React, Angular, Vue)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172327/SAAS_s9vced.jpg",
    cardIcon: AIIcon
  },
  {
    title: "AI-Integrated Software Development",
    subtitle: "",
    points: [
      "Predictive Modeling, AI Dashboards & Decision Intelligence",
      "OCR/ICR Pipelines for Financial, Legal, and Insurance Documents",
      "NLP-based Virtual Assistants and Customer Support Chatbots",
      "Computer Vision Systems for Surveillance, Retail, Manufacturing, and Healthcare"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172324/AI_integrated_Software_gco7vw.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Enterprise Software & Custom ERP Development",
    subtitle: "",
    points: [
      "CRM, HRMS, Payroll, and Resource Planning Solutions",
      "Inventory, Billing, and Supply Chain Management Systems",
      "Financial Accounting Systems with AI-Based Forecasting",
      "Legal Case Management, Compliance & Reporting Platforms"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172345/Enterprise_Software_rofryp.jpg",
    cardIcon: AIIcon
  },
  {
    title: "SaaS and Cloud Product Engineering",
    subtitle: "",
    points: [
      "Multi-Tenant SaaS Applications with Role-Based Access Control",
      "Secure API Gateway Integration and Payment Subscriptions",
      "Infrastructure Automation, Monitoring, and CI/CD Pipeline Setup",
      "Containerized and Microservices-Based Deployments (Docker, Kubernetes)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172327/SAAS_s9vced.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Legacy Application Modernization",
    subtitle: "",
    points: [
      "API Wrapping, Database Refactoring, and Platform Re-engineering",
      "UX/UI Redesign with React/Vue.js Frontends",
      "Performance Optimization and Cloud Migration",
      "Reusable Microservices Development for Speed & Scalability"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172325/Legecy_Modernization_ka65fo.jpg",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Django",
      "Express",
      "Laravel",
      "Spring Boot",
      "ASP.NET Core",
    ]
  },
  {
    title: "Frontend",
    technologies: [
      "React.js",
      "Angular",
      "Vue.js",
      "Svelte",
      "HTML5/CSS3",
    ]
  },
  {
    title: "Mobile",
    technologies: [
      "Flutter",
      "Swift (iOS)",
      "Kotlin (Android)",
      "React Native",
    ]
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Terraform",
      "Ansible",
      "Helm Charts",
      "Prometheus",
      "Grafana"
    ]
  },
  {
    title: "Databases",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Redis",
      "Firebase",
      "Oracle",
    ]
  },
  {
    title: "AI Toolkits & Modules",
    technologies: [
      "Microsoft Cognitive Toolkit",
      "Turi Create",
      "MediaPipe",
      "Core ML",
      "OpenVINO",
    ]
  },
  {
    title: "Libraries",
    technologies: [
      "Hugging Face Transformers",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LangChain",
      "OpenCV",
      "FastAI",
    ]
  },
  {
    title: "Algorithms & Architectures",
    technologies: [
      "Supervised, Unsupervised, and Reinforcement Learning",
      "Deep Neural Networks: CNNs, RNNs, LSTMs, GANs, Autoencoders",
      "Transformers: GPT, BERT, PaLM, LLaMA, Mixtral",
      "Graph Neural Networks (GNNs)",
      "Variational Autoencoders (VAEs)",
      "Deep Q Networks (DQNs)",
      "Diffusion Models (Stable Diffusion, Imagen)",
      "Neural Radiance Fields (NeRF)"
    ]
  },
  {
    title: "Emerging AI Concepts",
    technologies: [
      "Prompt Engineering & LLM Fine-Tuning",
      "Retrieval Augmented Generation (RAG) Pipelines",
      "Multi-Agent Systems (AutoGPT, BabyAGI, CrewAI)",
      "Federated Learning & On-Device Edge AI",
      "Explainable AI (XAI), Zero-Shot and Few-Shot Learning",
    ]
  },
]

const industriesData = [
  {
    title: "Healthcare & MedTech",
    points: [
      "AI EMRs", "Telehealth", "Medical Billing", "Patient Portals"
    ],
    img1: Blog1,
  },
  {
    title: "BFSI (Banking, Finance, Insurance)",
    points: [
      "Fraud Detection", "Lending Software", "Underwriting AI", "Robo-Advisors", "Documents Extraction"
    ],
    img1: Blog2,
  },
  {
    title: "Retail & E-Commerce",
    points: [
      "Custom POS", "Inventory Forecasting", "Recommendation Engines"
    ],
    img1: Blog1,
  },
  {
    title: "Real Estate & PropTech",
    points: [
      "Virtual Tour Apps", "CRM", "Property Valuation AI"
    ],
    img1: Blog2,
  },
  {
    title: "Logistics & Transportation",
    points: [
      "Fleet Management", "Route Optimization", "Warehouse Automation"
    ],
    img1: Blog1,
  },
  {
    title: "Education & EdTech",
    points: [
      "Learning Portals", "Adaptive Assessments", "AI Tutors"
    ],
    img1: Blog2,
  },
  {
    title: "Travel & Hospitality",
    points: [
      "Booking Engines",
      "Guest Portals",
      "Loyalty AI Modules",
    ],
    img1: Blog1,
  },
  {
    title: "Manufacturing & Industry 4.0",
    points: [
      "Digital Twin Models",
      "Equipment Monitoring",
      "IoT Integration",
    ],
    img1: Blog2,
  },
  {
    title: "Legal & Taxation",
    points: [
      "AI Contract Review",
      "Document Management",
      "Legal Chatbots",
    ],
    img1: Blog1,
  },
  {
    title: "Public Sector & Government",
    points: [
      "Citizen Portals",
      "Public Record Automation",
      "e-Governance Platforms",
    ],
    img1: Blog2,
  },
]

const whyPoints = [
  "Full-Cycle Software Development: Discovery to Deployment and Support",
  "Custom-Built AI and ML Integrations for Business Intelligence",
  "Agile Delivery with DevOps for CI/CD and Faster Time to Market",
  "Scalable Architectures on AWS, Azure, and GCP",
  "High-Security Standards (OAuth2, GDPR, HIPAA, ISO 27001)",
  "Global Delivery Model with Onsite, Offshore & Hybrid Teams"
]

const mainTitle = "Custom Software Development Company";
const mainDescription = "Transforming businesses by offering innovative Custom Software development services.";
const title = "End-to-End Custom Software Solutions Tailored for Your Industry, Powered by AI, Cloud, and Agile Engineering";
const description = `At MappOptimist Technologies, we build intelligent, enterprise-grade, and highly scalable custom software solutions that address your industry-specific requirements with precision. As a top-rated custom software development company in India, the USA, Europe, and the Middle East, we specialize in designing software that integrates Artificial Intelligence, cloud-native infrastructure, modern UX, and DevOps automation.\n\nOur services enable organizations to streamline workflows, automate repetitive tasks, unlock actionable insights through data, and stay agile in a fast-evolving digital landscape. From startups building MVPs to Fortune 500s modernizing legacy systems, we deliver tailor-made software products with unmatched performance and security.`;
const specificServiceSliderTitle = "Our Custom Software Development Services";
const technologyTitle = "Tools, Frameworks & Platforms We Work With";
const serviceIndustriesSliderTitle = "Industries We Serve";
const whyTitle = "Why Choose MappOptimist Technologies for Custom Software Development?";
const quoteTitle = "Let's Build Your Intelligent, Custom Software Today";
const quoteDescription = "Ready to develop a custom platform tailored to your business vision?\n\nMappOptimist Technologies delivers full-stack, secure, and AI-enhanced software solutions across domains. From proof of concept to enterprise deployment—we transform ideas into powerful software products."
const quoteBtnText = "Connect  Now"
const technologySubTitle = ""
const technologyDescription = "";

export const metadata = {
  title: "Custom Software Development Company",
  description: "Transforming businesses by offering innovative Custom Software development services. End-to-End Custom Software Solutions Tailored for Your Industry, Powered by AI, Cloud, and Agile Engineering. At MappOptimist Technologies, we build intelligent, enterprise-grade, and highly scalable custom software solutions that address your industry-specific requirements with precision. As a top-rated custom software development company in India, the USA, Europe, and the Middle East, we specialize in designing software that integrates Artificial Intelligence, cloud-native infrastructure, modern UX, and DevOps automation. Our services enable organizations to streamline workflows, automate repetitive tasks, unlock actionable insights through data, and stay agile in a fast-evolving digital landscape. From startups building MVPs to Fortune 500s modernizing legacy systems, we deliver tailor-made software products with unmatched performance and security.",
  openGraph: {
    title: "Custom Software Development Company",
    description: "Transforming businesses by offering innovative Custom Software development services. End-to-End Custom Software Solutions Tailored for Your Industry, Powered by AI, Cloud, and Agile Engineering. At MappOptimist Technologies, we build intelligent, enterprise-grade, and highly scalable custom software solutions that address your industry-specific requirements with precision. As a top-rated custom software development company in India, the USA, Europe, and the Middle East, we specialize in designing software that integrates Artificial Intelligence, cloud-native infrastructure, modern UX, and DevOps automation. Our services enable organizations to streamline workflows, automate repetitive tasks, unlock actionable insights through data, and stay agile in a fast-evolving digital landscape. From startups building MVPs to Fortune 500s modernizing legacy systems, we deliver tailor-made software products with unmatched performance and security.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/custom-software-development-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170497/Software_hxdhqm.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/custom-software-development-services`,
  },
};

export default function CustomSoftwareDevelopmentPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170497/Software_hxdhqm.jpg"
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

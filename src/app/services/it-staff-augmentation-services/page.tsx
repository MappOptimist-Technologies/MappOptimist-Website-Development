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
    title: "Software Developers & Engineers",
    subtitle: "",
    points: [
      "Full-Stack Developers (MERN, MEAN, LAMP, etc.)",
      "Frontend & Backend Engineers (React, Angular, Node.js, Django, Laravel, .NET)",
      "Mobile App Developers (iOS, Android, Flutter, React Native)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752490088/Software_Developer_Team_v1uhe7.png",
    cardIcon: AIIcon
  },
  {
    title: "AI & Data Experts",
    subtitle: "",
    points: [
      "Machine Learning Engineers",
      "Data Scientists & Data Engineers",
      "NLP, Computer Vision & Generative AI Specialists"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752490088/Data_Expert_ymmahz.png",
    cardIcon: AIIcon
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    subtitle: "",
    points: [
      "AWS, Azure & GCP Certified Engineers",
      "DevOps Engineers (CI/CD, Docker, Kubernetes, Terraform)",
      "Cloud Architects, SREs, and Infrastructure Automation Experts"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752490088/DevOps_Developer_tkhfi0.png",
    cardIcon: AIIcon
  },
  {
    title: "Cybersecurity Specialists",
    subtitle: "",
    points: [
      "Ethical Hackers & Penetration Testers",
      "Security Analysts (SIEM, EDR, Threat Detection)",
      "GRC Consultants & Compliance Auditors"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752490088/Cyber_Security_Developers_zsdbbz.png",
    cardIcon: AIIcon
  },
  {
    title: "QA & Test Engineers",
    subtitle: "",
    points: [
      "Manual & Automation Testers (Selenium, Cypress, Appium)",
      "Performance Testing Experts (JMeter, LoadRunner)",
      "API Testing & Security Testing Specialists"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752173613/IT_Staffing_3_w4u4qq.png",
    cardIcon: AIIcon
  },
  {
    title: "Project Management & UI/UX",
    subtitle: "",
    points: [
      "Agile Project Managers, Scrum Masters, Product Owners",
      "UI/UX Designers (Figma, Adobe XD, Sketch, InVision)",
      "Business Analysts & Product Consultants"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752490088/UI_UX_developer_hgj4qt.png",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "Dedicated Resource Model",
    technologies: [
      "Hire full-time developers or teams working exclusively for your project."
    ]
  },
  {
    title: "Hourly/Time & Material Model",
    technologies: [
      "Pay as you go for short-term assignments or hourly projects."
    ]
  },
  {
    title: "Offshore Hybrid Model",
    technologies: [
      "Blend remote support with on-location presence as per project demands."
    ]
  },
  {
    title: "Build-Operate-Transfer (BOT)",
    technologies: [
      "We build your offshore team, operate the unit, and transfer it when mature."
    ]
  },
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
  "Ready-to-Deploy Talent in 24-72 Hours",
  "Access to a Global Network of Pre-Screened Engineers",
  "Flexible Engagement Models: Hourly, Monthly, Dedicated, Onsite",
  "Scale Up or Down Based on Project Needs",
  "100% Compliance with NDA, IP Protection & Data Security Standards",
  "Technical Interview & Skill-Based Resource Mapping",
  "Transparent Billing and Resource Performance Tracking"
]

const mainTitle = "IT Staff Augmentation Solutions Company";
const mainDescription = "Transforming businesses by offering innovative IT Staff Augmentation Solutions services.";
const title = "Flexible, Scalable, and On-Demand Talent Solutions to Accelerate Your Technology Initiatives";
const description = `At MappOptimist Technologies, we provide top-tier IT staff augmentation services to help businesses scale their technology teams quickly, efficiently, and cost-effectively. Whether you’re launching a new digital product, modernizing legacy systems, or meeting tight deadlines, our on-demand IT staffing model allows you to access highly skilled developers, engineers, and technology experts across various domains, including AI/ML, Blockchain, Web & Mobile Development, Cloud, DevOps, QA, and Cybersecurity.\n\nOur global talent pool is pre-vetted, experienced, and available for short-term, long-term, remote, or onsite engagements. This gives you the flexibility to expand your team without the hassle of traditional hiring.`;
const specificServiceSliderTitle = "IT Talent We Provide";
const technologyTitle = "Engagement Models We Offer";
const serviceIndustriesSliderTitle = "Industries We Support with Staff Augmentation";
const whyTitle = "Why Choose MappOptimist for IT Staff Augmentation?";
const quoteTitle = "Scale Your Team with MappOptimist Technologies";
const quoteDescription = "Whether you need one expert or an entire remote tech team — MappOptimist Technologies is your reliable partner for IT staff augmentation. Gain agility, speed, and scale without compromising on quality."
const quoteBtnText = "Request Your Team Today"
const technologySubTitle = ""
const technologyDescription = "";

export const metadata = {
  title: "IT Staff Augmentation Solutions Company",
  description: "Flexible, Scalable, and On-Demand Talent Solutions to Accelerate Your Technology Initiatives. Transforming businesses by offering innovative IT Staff Augmentation Solutions services. At MappOptimist Technologies, we provide top-tier IT staff augmentation services to help businesses scale their technology teams quickly, efficiently, and cost-effectively. Whether you’re launching a new digital product, modernizing legacy systems, or meeting tight deadlines, our on-demand IT staffing model allows you to access highly skilled developers, engineers, and technology experts across various domains, including AI/ML, Blockchain, Web & Mobile Development, Cloud, DevOps, QA, and Cybersecurity. Our global talent pool is pre-vetted, experienced, and available for short-term, long-term, remote, or onsite engagements. This gives you the flexibility to expand your team without the hassle of traditional hiring.",
  openGraph: {
    title: "IT Staff Augmentation Solutions Company",
    description: "Flexible, Scalable, and On-Demand Talent Solutions to Accelerate Your Technology Initiatives. Transforming businesses by offering innovative IT Staff Augmentation Solutions services. At MappOptimist Technologies, we provide top-tier IT staff augmentation services to help businesses scale their technology teams quickly, efficiently, and cost-effectively. Whether you’re launching a new digital product, modernizing legacy systems, or meeting tight deadlines, our on-demand IT staffing model allows you to access highly skilled developers, engineers, and technology experts across various domains, including AI/ML, Blockchain, Web & Mobile Development, Cloud, DevOps, QA, and Cybersecurity. Our global talent pool is pre-vetted, experienced, and available for short-term, long-term, remote, or onsite engagements. This gives you the flexibility to expand your team without the hassle of traditional hiring.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/it-staff-augmentation-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170503/It_Staffonmg_g40y16.jpg",
        width: 1200,
        height: 630,
        alt: "IT Staff Augmentation Solutions Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/it-staff-augmentation-services`,
  },
};

export default function ITStaffAugmentationServicesPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170503/It_Staffonmg_g40y16.jpg"
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

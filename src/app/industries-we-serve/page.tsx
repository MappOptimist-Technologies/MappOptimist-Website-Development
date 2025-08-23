import React from "react";
import Image from "next/image";
import Navbar from "@/components/header/navbar";
import OurServicesComponent from "@/components/Home/ourServices";
import QuoteComponent from "@/components/Home/getQuote";
import Footer from "@/components/Home/footer";

const categories = [
  {
    title: "Retail & E-Commerce Development Solutions",
    subtitle: "Accelerate Online Sales with Scalable, AI-Powered E-Commerce Platforms",
    description:
      "We empower retail and e-commerce brands with engaging, responsive, and conversion-optimized solutions. Our services include custom e-commerce website development and AI-driven recommendation systems that personalize shopping experiences.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973394/Retail_and_Ecommerce_ujzjnp.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "E-Commerce Website & Marketplace Development",
      "Grocery & On-Demand Delivery Apps",
      "AI-Powered Product Search & Recommendations",
      "Inventory & Fulfillment Management Systems",
      "Secure Payment Integration",
      "Loyalty & Reward Program Modules"
    ],
    bgColor: "custom-bg-pink",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Predictive analytics for stock and demand planning",
      "Personalized marketing with customer behavior insights",
      "Virtual shopping assistants & chatbots",
      "Fraud detection in payments & transactions"
    ],
    helperText: ""
  },
  {
    title: "Healthcare & Medical Insurance Software Development",
    subtitle: "Build Patient-Centric, Compliant, and Scalable Digital Healthcare Solutions",
    description:
      "We specialize in healthcare software development tailored for clinics, hospitals, and insurance providers. Our secure platforms streamline operations, improve patient engagement, and comply with HIPAA and data protection regulations.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973420/Healthcare_uldfn1.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Telehealth & Remote Monitoring Apps",
      "EMR/EHR System Development",
      "Healthcare Chatbots & Virtual Assistants",
      "Insurance Claims Management Systems",
      "Doctor-Patient Appointment Platforms",
    ],
    bgColor: "bg-light",
    border: "custom-border-green",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Medical image processing using computer vision",
      "Symptom-checker bots using NLP",
      "Predictive diagnostics & patient monitoring",
      "AI-based claim fraud detection"
    ],
    helperText: ""
  },
  {
    title: "Finance & Banking Technology Solutions",
    subtitle: "Secure and Intelligent FinTech Software for Financial Institutions",
    description:
      "We develop secure, scalable, and regulation-compliant financial technology for banks, fintech startups, NBFCs, and insurance companies.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973402/Banking_and_Finances_cnx6zp.png",
    offers: "Solutions We Offer:",
    tags: [
      "Mobile Banking Apps & Portals",
      "Digital Wallets & Payment Gateways",
      "Loan & EMI Management Platforms",
      "Blockchain Ledger Solutions",
      "KYC/AML Verification Systems"
    ],
    bgColor: "custom-bg-yellow",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Real-time fraud detection algorithms",
      "AI credit risk scoring models",
      "Automated chatbot assistants for banking queries",
      "Predictive financial trend analysis"
    ],
    helperText: ""
  },
  {
    title: "Logistics & Transportation Software Solutions",
    subtitle: "Streamline Fleet, Freight, and Last-Mile Delivery with Smart Tech",
    description:
      "Deliver seamless travel experience along with seamless user experience with top-notch features. As a top Travel app development company, we help global businesses turn their out-of- the-box ideas into working Travel solutions.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973413/Transpotation_eovlo5.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Fleet & Route Optimization Platforms",
      "On-Demand Courier Booking Systems",
      "Warehouse & Inventory Management Software",
      "Real-Time Tracking Dashboards",
      "Automated Delivery Scheduling",
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Smart route planning & traffic analysis",
      "Load balancing algorithms",
      "Predictive delivery time estimation",
      "AI-based vehicle maintenance alerts"
    ],
    helperText: ""
  },
  {
    title: "Fashion & Apparel Technology Solutions",
    subtitle: "Modernize Fashion Retail with AI & Visual Intelligence",
    description:
      "We develop immersive and intelligent fashion-tech platforms to enhance the customer journey and streamline fashion brand operations.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973428/Fashion_Tech_vpkssg.png",
    offers: "Solutions We Offer:",
    tags: [
      "Virtual Try-On Applications",
      "Personalized Outfit Recommenders",
      "E-Commerce Storefronts",
      "Inventory Forecasting Systems",
      "Mobile Shopping Apps",
    ],
    bgColor: "custom-bg-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Body measurement prediction with computer vision",
      "AI-based trend forecasting tools",
      "Visual product recognition search",
      "Real-time customer profiling"
    ],
    helperText: ""
  },
  {
    title: "Agriculture & AgriTeh Solutions",
    subtitle: "Enhance Agricultural Productivity with Smart AI & IoT Solutions",
    description:
      "Our custom agritech software development integrates AI, ML, and IoT to empower farmers, agri-enterprises, and agribusiness startups.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973404/Agriculture_s9bpxd.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Crop Monitoring Platforms",
      "Smart Irrigation & Climate Control Systems",
      "Yield Forecasting Tools",
      "Livestock Tracking Applications",
      "Soil Health Management Dashboards",
      "Smart Crop Management & Disease Detection",
      "Weather & Climate Forecasting Tools",
      "Digital Agri-Marketplaces",
      "Agriculture Management Dashboards"
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "ML models for crop yield forecasting",
      "Computer vision for pest & disease detection",
      "AI-driven market pricing suggestions",
      "Automation of irrigation based on predictive models",
      "Crop disease detection using computer vision",
      "AI-based weather prediction models",
      "Pest identification systems",
      "Predictive farming analytics"
    ],
    helperText: "We make modern farming more efficient, data-driven, and connected to global markets."
  },

  {
    title: "Education & eLearning Development",
    subtitle: "Deliver Personalized Learning with Scalable EdTech Platforms",
    description:
      "We build custom eLearning and LMS platforms that support student performance, smart content delivery, and online collaboration.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973417/education_eh0oxq.png",
    offers: "Solutions We Offer:",
    tags: [
      "Learning Management Systems (LMS)",
      "Virtual Classrooms & Video Conferencing Apps",
      "AI Tutoring & Adaptive Learning Systems",
      "Exam & Assignment Portals",
      "School Management Platforms"
    ],
    bgColor: "custom-bg-yellow",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "AI-based student performance analytics",
      "Personalized course path generators",
      "Doubt-solving bots using NLP",
      "Smart content suggestion engines"
    ],
    helperText: ""
  },
  {
    title: "Technology & Startups",
    subtitle: "Accelerate MVP Development and Product Launches with Agile Teams",
    description:
      "From product ideation to post-launch support, we help tech startups build robust and scalable digital products.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973411/Fintech_industries_yohxel.png",
    offers: "Solutions We Offer:",
    tags: [
      "MVP App & Web Development",
      "Cloud-Native SaaS Product Engineering",
      "AI Integrations in MVPs",
      "Custom Dashboard & Admin Panels",
      "Funding-Ready Product Demos",
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Plug-and-play AI modules",
      "Data analytics for business insights",
      "Chatbot & support automation",
      "AI for user engagement tracking"
    ],
    helperText: ""
  },
  {
    title: "QSR, F&B (Quick Service Restaurants & Food Industry)",
    subtitle: "Digitize Restaurant Operations with Smart FoodTech Solutions",
    description:
      "We offer smart restaurant and food delivery app development that enhances speed, accuracy, and customer retention.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973390/QSR_F_b_1_qavqpx.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Food Ordering & Delivery Apps",
      "Restaurant POS System Development",
      "Menu & Inventory Management Systems",
      "Loyalty & Feedback Modules",
      "Table Booking & Queue Management",
    ],
    bgColor: "custom-bg-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "AI-based menu performance analysis",
      "Predictive demand forecasting",
      "Smart order routing and kitchen management",
      "Chatbot integration for customer service"
    ],
    helperText: ""
  },
  {
    title: "Tax & Legal Industry Software Solutions",
    subtitle: "Automate Complex Legal and Tax Processes with AI",
    description:
      "We build secure, efficient platforms for legal advisors, tax consultants, and accounting firms to reduce manual workloads.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973414/Legal_and_Laws_wn8zdm.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Tax Calculation & Filing Portals",
      "Contract Lifecycle Management (CLM)",
      "Document OCR & ICR Tools",
      "Audit & Compliance Dashboards",
      "Case Management Systems",
      "Law Firm & Case Management Systems",
      "Virtual Law Office Portals",
      "Legal Document Automation Tools",
      "Contract Lifecycle Management Platforms",
      "Compliance & Audit Management Systems"
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "NLP-based legal document extraction and summarization",
      "Predictive case outcome modeling",
      "Smart contract analytics and alerts",
      "Voice-assisted scheduling and documentation",
      "AI chatbot for legal consultations",
      "Predictive case outcome models",
      "Deadline alerts and automation"
    ],
    helperText: ""
  },
  {
    title: "Government & Public Sector Digital Solutions",
    subtitle: "Transform Public Service Delivery with Citizen-Focused Portals",
    description:
      "We work with government bodies to deliver transparent, responsive, and user-friendly public platforms.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973424/E_governence_mdsdvb.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Citizen Service Portals",
      "Licensing & Document Verification Systems",
      "Complaint Management Platforms",
      "Digital Workflow Automation",
      "E-Governance Mobile Apps"
    ],
    bgColor: "custom-bg-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Automated document processing",
      "Resource allocation optimization",
      "Predictive planning & forecasting tools",
      "NLP for grievance classification"
    ],
    helperText: ""
  },
  {
    title: "Business Process Automation",
    subtitle: "Automate Repetitive Tasks to Improve Speed and Reduce Costs",
    description:
      "We build intelligent automation platforms that simplify operations across departments and reduce human dependency.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973436/Business_and_Automation_bfvj0t.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Robotic Process Automation (RPA)",
      "Low-Code/No-Code Workflow Builders",
      "Task Scheduling Engines",
      "Data Sync & API Integration",
      "Internal Reporting Tools",
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "NLP-driven automation flows",
      "AI data validation and classification",
      "Smart email and document parsing",
      "Predictive task assignment engines"
    ],
    helperText: ""
  },
  {
    title: "AI in Construction & Real Estate",
    subtitle: "Revolutionizing Construction with AI-Powered Digital Solutions",
    description:
      "At MappOptimist Technologies, we empower construction and real estate companies with advanced AI-powered software solutions that enhance safety, improve efficiency, and streamline project management. Our custom platforms are designed to support field operations, automate tracking, and optimize resource planning through smart analytics and real-time insights.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973431/Construction_ctuuzw.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Construction Project Management Software",
      "Real-Time Site Monitoring & Compliance Dashboards",
      "Smart Resource Allocation Systems",
      "Material Tracking & Delivery Scheduling",
      "Cost Estimation & Billing Automation",
    ],
    bgColor: "custom-bg-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Computer vision for safety compliance and hazard detection",
      "Predictive analytics for maintenance and equipment lifecycle",
      "AI-powered planning tools for budgeting and timeline forecasting",
      "Automation of reporting and progress documentation"
    ],
    helperText: "With our deep understanding of the construction lifecycle and AI-driven innovation, we help real estate developers and contractors build smarter, safer, and more profitable infrastructure."
  },
  {
    title: "AI & Emerging Technologies",
    subtitle: "Leading the Future with AI-First Digital Innovation",
    description:
      "MappOptimist Technologies is at the forefront of innovation, helping businesses adopt and scale emerging technologies such as Generative AI, LLMs (Large Language Models), Computer Vision, AI-as-a-Service (AIaaS), and custom AI model development. We help organizations future-proof their operations with powerful, agile, and intelligent systems.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973411/Fintech_industries_yohxel.png",
    offers: "Solutions We Offer:",
    tags: [
      "Custom AI/ML Model Development",
      "Generative AI Solutions (Text, Image, and Video)",
      "AI-as-a-Service (API-based Integration)",
      "LLM-Based Chatbot Development",
      "Vision-Based AI Applications (OCR, Object Detection)",
      "AI Consulting & Deployment Strategy"
    ],
    bgColor: "custom-bg-yellow",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Accelerates product innovation with plug-and-play AI modules",
      "Enables automation of complex processes using NLP and vision",
      "Enhances decision-making with real-time predictive insights",
      "Delivers competitive advantage with cutting-edge AI integrations"
    ],
    helperText: "Whether you're exploring AI for the first time or scaling enterprise-grade deployments, our solutions help unlock new revenue streams and operational efficiency."
  },
  {
    title: "Government & Public Sector",
    subtitle: "Driving Smart Governance with Digital Transformation",
    description:
      "At MappOptimist Technologies, we provide secure and scalable government technology solutions that improve citizen services, increase transparency, and enable data-driven policy making. Our digital platforms streamline workflows, digitize records, and enable 24/7 public engagement.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973424/E_governence_mdsdvb.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Citizen Portals & Mobile Apps",
      "Document Verification & e-Licensing Systems",
      "Workflow Automation for Government Departments",
      "Public Feedback & Complaint Management Systems",
      "Data Dashboards for Resource Planning & Analytics",
    ],
    bgColor: "bg-light",
    border: "custom-border-green",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "AI-based classification of public queries and service requests",
      "Automation of back-office tasks with RPA and AI",
      "NLP-powered chatbots for 24/7 citizen support",
      "Secure platforms built for scale and compliance"
    ],
    helperText: "With our proven track record in e-governance development, we help public sector organizations deliver faster, smarter, and more efficient digital services."
  },
  {
    title: "Process Automation (RPA & Intelligent Automation)",
    subtitle: "Automate Business Operations with AI-Driven Workflow Solutions",
    description:
      "MappOptimist Technologies builds customized business process automation solutions using AI, machine learning, and robotic process automation (RPA). We help organizations reduce manual effort, eliminate human error, and improve speed through smart, rule-based and predictive automation.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973436/Business_and_Automation_bfvj0t.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Robotic Process Automation (RPA) Development",
      "Intelligent Workflow Automation Platforms",
      "Business Process Management Tools",
      "Document Handling & Form Processing Systems",
      "API Integrations & Automation for ERP/CRM",
    ],
    bgColor: "custom-bg-blue",
    helpText: "How Our AI Capabilities Accelerate Impact:",
    helps: [
      "NLP-based form reading and intelligent data classification",
      "AI chatbots for internal support automation",
      "Predictive scheduling and task prioritization",
      "Real-time monitoring and exception handling"
    ],
    helperText: "From HR and finance to logistics and customer service, our automation tools are tailored to streamline your operations and improve productivity."
  },
  {
    title: "Political Tech",
    subtitle: "Empowering Political Campaigns with Intelligent Technology Solutions",
    description:
      "At MappOptimist Technologies, we help political parties, candidates, and campaign managers achieve better outreach, smarter operations, and data-backed decisions with intelligent digital platforms. Our customized solutions ensure transparency, efficient management, and real-time public engagement.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973405/Politics_k6vvoy.png",
    offers: "Solutions We Offer:",
    tags: [
      "Party & Campaign Management Software",
      "Voter Engagement & Volunteer Management Apps",
      "Political Fundraising & Donation Platforms",
      "Online Debate Hosting & Event Streaming Tools",
      "Real-Time Election Monitoring Dashboards"
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "Sentiment analysis from public data & social platforms",
      "AI chatbots for voter FAQs and automated responses",
      "Predictive voter behavior modeling",
      "Real-time issue tracking and complaint handling"
    ],
    helperText: "By combining technology and strategy, we help political organizations scale, connect, and campaign more effectively in the digital era."
  },
  {
    title: "News & Media",
    subtitle: "Revolutionizing News Distribution with Personalized Digital Platforms",
    description:
      "We empower media houses and content creators with modern, AI-enabled platforms that deliver real-time, personalized, and verified news to audiences worldwide. Our solutions are designed for scalability, speed, and engagement.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973414/Legal_and_Laws_wn8zdm.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "News Aggregation & Personalization Apps",
      "Fact-Checking & Real-Time Verification Tools",
      "News Quiz & Interactive Gamification Modules",
      "Streaming Solutions for News Channels",
      "Multi-Platform Content Management Systems",
    ],
    bgColor: "bg-light",
    border: "custom-border-green",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "NLP-driven personalized news feeds",
      "Real-time topic clustering and trend analysis",
      "AI-based fake news detection",
      "User engagement prediction and content scoring"
    ],
    helperText: "We help media platforms provide meaningful and trustworthy content experiences to modern readers."
  },
  {
    title: "AdTech & Marketing Tech",
    subtitle: "Maximizing Campaign ROI with AI-Powered Marketing Solutions",
    description:
      "MappOptimist Technologies builds advanced AdTech and MarTech platforms that help brands target, analyze, and optimize campaigns with precision.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973399/Advertisement_and_Tech_now7jk.jpg",
    offers: "Solutions We Offer:",
    tags: [
      "Programmatic AdTech App Development",
      "Influencer Collaboration & Campaign Tracking Tools",
      "Performance Marketing Dashboards",
      "Social Media Promotion Management",
      "Real-Time Audience Analytics Tools"
    ],
    bgColor: "bg-light",
    border: "custom-border-blue",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "AI for audience segmentation and targeting",
      "Predictive modeling for campaign optimization",
      "Real-time trend detection and keyword suggestion",
      "Budget allocation using machine learning algorithms"
    ],
    helperText: "We help brands convert clicks into customers with data-driven marketing technology."
  },
  {
    title: "Fashion Tech",
    subtitle: "Empowering Fashion Brands with Personalized & Immersive Technology",
    description:
      "We design interactive and AI-enabled platforms that bring personalization, efficiency, and innovation to the fashion industry.",
    imageSrc: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751973428/Fashion_Tech_vpkssg.png",
    offers: "Solutions We Offer:",
    tags: [
      "Fashion E-Commerce App Development",
      "Virtual Try-On & AR Integration",
      "Fashion Marketplace Platforms",
      "Style Discovery & Social Networking Apps",
      "Smart Inventory & Trend Forecasting Tools"
    ],
    bgColor: "custom-bg-yellow",
    helpText: "How Our AI Expertise Helps:",
    helps: [
      "AI-based size and style recommendations",
      "Visual search and tagging using computer vision",
      "Trend forecasting from social and market data",
      "AI for personalized marketing and product discovery"
    ],
    helperText: "MappOptimist enables fashion brands to blend creativity with cutting-edge digital transformation."
  },
];

export const metadata = {
  title: "Industries We Serve | Driving Digital Transformation Across Global Industries with AI, App Development, and Scalable IT Solutions",
  description: "Delivering Innovative Solutions to Help various industries Explore the Path of Evolution and Growth. At MappOptimist Technologies, we specialize in delivering AI-powered, industry-specific digital solutions that drive business transformation. Our core expertise includes artificial intelligence development, custom mobile app development (iOS & Android), web application development, blockchain solutions, cybersecurity services, digital marketing, and IT staff augmentation. We work closely with startups, enterprises, and government organizations to solve real-world business challenges and fuel growth. Backed by deep domain expertise and a strong focus on AI and automation, we build scalable, secure, and high-performance digital products tailored to each industry's unique needs. Our mission is to help industries evolve through intelligent automation, data-driven insights, and seamless digital transformation—empowering our clients to stay ahead in a competitive, fast-moving market.",
  openGraph: {
    title: "Industries We Serve | Driving Digital Transformation Across Global Industries with AI, App Development, and Scalable IT Solutions",
    description:
      "Delivering Innovative Solutions to Help various industries Explore the Path of Evolution and Growth. At MappOptimist Technologies, we specialize in delivering AI-powered, industry-specific digital solutions that drive business transformation. Our core expertise includes artificial intelligence development, custom mobile app development (iOS & Android), web application development, blockchain solutions, cybersecurity services, digital marketing, and IT staff augmentation. We work closely with startups, enterprises, and government organizations to solve real-world business challenges and fuel growth. Backed by deep domain expertise and a strong focus on AI and automation, we build scalable, secure, and high-performance digital products tailored to each industry's unique needs. Our mission is to help industries evolve through intelligent automation, data-driven insights, and seamless digital transformation—empowering our clients to stay ahead in a competitive, fast-moving market.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/industries-we-serve`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170296/Industries_We_serve_Banner_Images_qgetl0.png",
        width: 1200,
        height: 630,
        alt: "Industries We Serve | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/industries-we-serve`,
  },
};

export default function IndustriesWeServePage() {

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className='industries-serve-container mb-3'>
          <div className='industries-serve-overlay' />
          <Navbar />
          <div className='career-content-container' data-aos="fade-up">
            <h1>Industries We Serve</h1>
            <h6>Delivering Innovative Solutions to Help various industries Explore the Path of Evolution and Growth</h6>
          </div>
        </div>
        <section className="industries-we-serve-container">
          <div className="container" data-aos="fade-up">
            <h2 className="text-center">
              Driving Digital Transformation Across Global Industries with AI, App Development, and Scalable IT Solutions
            </h2>
            <p className="mt-3 text-start" style={{ fontSize: "1.45rem" }}>
              At MappOptimist Technologies, we specialize in delivering AI-powered, industry-specific digital solutions that drive business transformation. Our core expertise includes artificial intelligence development, custom mobile app development (iOS & Android), web application development, blockchain solutions, cybersecurity services, digital marketing, and IT staff augmentation.
              <br />
              <br />
              We work closely with startups, enterprises, and government organizations to solve real-world business challenges and fuel growth. Backed by deep domain expertise and a strong focus on AI and automation, we build scalable, secure, and high-performance digital products tailored to each industry&apos;s unique needs.
              <br />
              <br />
              Our mission is to help industries evolve through intelligent automation, data-driven insights, and seamless digital transformation—empowering our clients to stay ahead in a competitive, fast-moving market.
            </p>
          </div>

          <div className="container mt-5">
            {categories.map((category, index) => (
              <div data-aos="fade-up" key={category.title + category.subtitle} className={`rounded-4 ${category.bgColor} ${category.border} g-0 mb-5 p-4`}>
                <div className="row g-0 position-relative">
                  {/* Conditionally place the image on the right for even indexed cards */}
                  <div className={`col-md-4 ${index % 2 === 0 ? "" : "order-md-2"}`}>
                    <div className="w-100" style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                      <Image
                        src={category.imageSrc}
                        alt={`${category.title} | ${category.subtitle}`}
                        layout="fill"
                        className="img-fluid rounded"
                        objectFit='cover'
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`col-md-8 industries-we-serve-content ${index % 2 === 0 ? "px-4" : "pe-4"}`}>
                    <h1>{category.title}</h1>
                    <h4 className="service-item-h4 mt-3"><strong>{category.subtitle}</strong></h4>
                    <h6 className="service-item-h6 mt-3">{category.description}</h6>
                    <h4 className="service-item-h4 mt-4"><strong>{category.offers}</strong></h4>
                    {/* Tags */}
                    <div className="case-study-card-tags mt-3">
                      {category.tags.map((tag: string) => (
                        <span className="card-tag industries-card-tags" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div>
                      <h4 className="service-item-h4 mt-4"><strong>{category.helpText}</strong></h4>
                    </div>
                    <div className="case-study-card-tags mt-3">
                      {category?.helps?.map((tag: string) => (
                        <span className="card-tag industries-card-tags" key={tag}>{tag}</span>
                      ))}
                    </div>
                    {category?.helperText ? <h6 className="service-item-h6 mt-4">{category.helperText}</h6> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="industries-we-serve-text-container">
        <div className="container" data-aos="fade-up">
          <h1>For every industry, MappOptimist Technologies provides a winning blend of domain knowledge, smart engineering, and AI-first development to help you drive transformation, innovation, and lasting business growth.</h1>
        </div>
      </section>
      <div className='our-services-contaner'>
        <div className='our-services-content'>
          <OurServicesComponent />
        </div>
      </div>
      <QuoteComponent className="industries-serve-quote" title="Ready to Revolutionize Your Industry?" description="Partner with MappOptimist Technologies to turn your industry-specific challenges into intelligent, scalable, and future-ready digital solutions." btnText="Get in Touch With Us Today" />
      <div className="common-footer-container">
        <Footer />
      </div>
    </div>
  );
}

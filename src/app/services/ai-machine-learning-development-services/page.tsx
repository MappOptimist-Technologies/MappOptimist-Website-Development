import React from 'react';
import { StaticImageData } from "next/image";
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
    title: "Custom AI Solutions",
    subtitle: "We build smart, scalable AI software based on your unique business goals.",
    points: [
      "AI Software Development",
      "AI Strategy & Consulting",
      "AI Model Training & Deployment",
      "AI Integration with Mobile Apps & Web Platforms"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171079/Gen_AI_hjwp3x.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Machine Learning Development",
    subtitle: "Extract powerful insights and automate processes using our ML development services.",
    points: [
      "Supervised & Unsupervised Learning",
      "Classification, Regression, Clustering",
      "Predictive Analytics for Sales, Inventory, and Customer Behavior"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171058/AI_mf1wqv.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Natural Language Processing (NLP)",
    subtitle: "Enhance communication and understanding between your systems and users.",
    points: [
      "AI Chatbot Development",
      "Voice Assistants & Sentiment Analysis",
      "Text Summarization & Language Translation",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171077/NLP_cbidhx.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Computer Vision Solutions",
    subtitle: "Enable machines to “see” and analyze visual data in real time.",
    points: [
      "Facial Recognition Systems",
      "Image & Video Analysis",
      "Object Detection & Quality Control"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171081/Computer_Vision_1_ydhwro.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Deep Learning Services",
    subtitle: "Build intelligent systems that learn from complex data patterns.",
    points: [
      "Neural Networks (CNNs, RNNs, GANs)",
      "AI Models for Image, Audio & Text Recognition",
      "Smart Pattern Detection",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171060/Deep_Learning_bdiw6g.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Generative AI Development",
    subtitle: "Create new, unique content with GenAI tools trained for your domain.",
    points: [
      "AI Content Generation (Text, Image, Video)",
      "Product Design & Mockups",
      "Music, Art & Voice Creation"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171079/Gen_AI_hjwp3x.jpg",
    cardIcon: AIIcon
  },
  {
    title: "OCR/ICR Services We Offer:",
    subtitle: "",
    points: [
      "Custom OCR/ICR Engine Development",
      "Document Layout Detection & Data Mapping",
      "AI-Based Data Validation & Error Correction",
      "Integration with ERPs, CRMs, and Legacy Systems",
      "Cloud OCR Solutions with Secure Storage & Retrieval"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171070/OCR_ICR_Document_xvrb8h.jpg",
    cardIcon: AIIcon
  },
  {
    title: "AI for Automation & RPA",
    subtitle: "Reduce human effort and operational costs with AI automation solutions.",
    points: [
      "Robotic Process Automation (RPA)",
      "Workflow Automation",
      "AI-Based Document Processing"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171061/Automation_RPA_wog2qd.jpg",
    cardIcon: AIIcon
  },
  {
    title: "AI Integration & Deployment",
    subtitle: "Seamlessly integrate AI with your current tools and platforms.",
    points: [
      "Cloud & Edge AI Deployment",
      "API-Based AI Integration",
      "Model Optimization & Monitoring"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171067/AI_implementation_wulcxg.jpg",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "Frameworks & Platforms",
    technologies: [
      "TensorFlow 2.x",
      "PyTorch",
      "JAX",
      "MXNet",
      "Caffe / Caffe2",
      "NVIDIA",
      "ONNX",
      "Amazon SageMaker"
    ]
  },
  {
    title: "Toolkits & Modules",
    technologies: [
      "Microsoft Cognitive Toolkit (CNTK)",
      "Apple CoreML / CreateML for on-device AI",
      "OpenVINO Toolkit (Intel)",
      "Kurento Vision Module for video streaming AI",
      "Turi Create for rapid AI prototyping",
      "MediaPipe (Google) for pose, gesture, and face tracking",
      "DeepSpeed & FairScale (for model scaling and training optimization)",
    ]
  },
  {
    title: "AI & ML Libraries",
    technologies: [
      "Hugging Face Transformers (LLMs, BERT, GPT)",
      "TensorFlow Probability",
      "Tensor2Tensor & TF Agents",
      "FastAI",
      "Scikit-Learn",
      "KerasCV & KerasNLP",
      "LangChain (for multi-agent and LLM orchestration)",
      "Diffusers (by Hugging Face, for Stable Diffusion & Denoising models)",
      "DeepLake (database for LLM training)",
      "Pinecone / Weaviate / FAISS (vector databases)",
      "OpenCV & Detectron2 (for computer vision)",
      "Lora, Flux"
    ]
  },
  {
    title: "Algorithms & Deep Learning Architectures",
    technologies: [
      "Supervised / Unsupervised / Semi-Supervised Learning",
      "Neural Networks (ANN, CNN, RNN, LSTM, GRU)",
      "Transformers (BERT, GPT, ViT, Swin Transformer)",
      "Generative Adversarial Networks (GANs)",
      "Autoencoders (VAE, DAE, SAE)",
      "Diffusion Models (Stable Diffusion, Imagen)",
      "Reinforcement Learning (Deep Q-Networks, PPO, A3C)",
      "Neural Radiance Fields (NeRF) for 3D vision",
      "Bayesian Networks & Probabilistic Graphical Models",
      "Federated Learning for privacy-preserving AI",
      "Contrastive Learning (SimCLR, BYOL)",
      "Meta-Learning / Few-Shot Learning / Zero-Shot Learning"
    ]
  },
  {
    title: "Advanced AI Concepts",
    technologies: [
      "Foundation Models (OpenAI GPT-4, Claude, PaLM, LLaMA, Mistral, Mixtral)",
      "LLM Fine-tuning, Prompt Engineering, and RAG Pipelines",
      "Representation Learning & Self-Supervised Learning",
      "Explainable AI (XAI) & Responsible AI",
      "Neurosymbolic AI (Hybrid of ML + Rule-Based Reasoning)",
      "Multi-Agent Systems & Autonomous Agents (AutoGPT, BabyAGI)",
      "AI Agents with Tool Usage & Long-Term Memory (LangChain, LlamaIndex)",
      "Real-time AI Inference on Edge Devices",
      "Speech-to-Text & Text-to-Speech (Whisper, Tacotron)",
      "Graph Neural Networks (GNNs)"
    ]
  },
]

const industriesData = [
  {
    title: "Healthcare & Medical",
    points: [
      "AI for diagnostics & medical image analysis (X-ray, MRI, CT)",
      "Predictive analytics for disease risk & treatment outcomes",
      "NLP for EHR and clinical documentation",
      "AI-based virtual health assistants and symptom checkers",
      "Intelligent claim processing & fraud detection in medical insurance",
      "Remote patient monitoring using AI (eICU software and set up)",
      "AI-Based Hospital Management Software"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171065/Healthcare_Industries_pzg3hx.jpg",
  },
  {
    title: "Finance & Fintech",
    points: [
      "Fraud detection using anomaly detection and transaction monitoring",
      "Credit risk scoring & underwriting automation",
      "AI trading bots & real-time portfolio optimization",
      "Robo-advisors for investment guidance",
      "AI-powered customer support for banking apps",
      "Financial Data Extraction via OCR/ICR"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171038/Fintech_p75a31.jpg",
  },
  {
    title: "Retail & E-commerce",
    points: [
      "AI-driven recommendation engines for upselling & cross-selling",
      "Inventory demand forecasting & stock optimization",
      "Dynamic pricing using competitor & market analysis",
      "Visual search & AI-powered product tagging",
      "AI chatbots for customer service automation",
      "Store layout optimization with heatmap analysis"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171074/AI_Fashion_rawapc.jpg",
  },
  {
    title: "Logistics & Supply Chain",
    points: [
      "Predictive route optimization & delivery time estimation",
      "AI for warehouse robotics and picking optimization",
      "Inventory forecasting and stock level automation",
      "Real-time shipment tracking using AI + IoT",
      "Intelligent dispatch & load planning systems",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171906/AI_in_Transportation_and_logistics_qitijq.png",
  },
  {
    title: "Education & eLearning",
    points: [
      "AI tutors and personalized learning assistants",
      "Adaptive learning systems for skill-based assessments",
      "Auto-grading of assignments and quizzes",
      "Learning content recommendation engines",
      "NLP-based plagiarism checkers & grammar improvement tools",
      "Voice bots for language and speech training"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171041/eductaion_adn_elearning_izj2od.jpg",
  },
  {
    title: "Manufacturing & Industry 4.0",
    points: [
      "Predictive maintenance using IoT sensor data",
      "Computer vision for defect detection in production",
      "Smart scheduling and production optimization",
      "AI for energy consumption optimization",
      "Robotic process automation (RPA) for back-office manufacturing tasks",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171072/Manufacturing_in_AI_rfycet.jpg",
  },
  {
    title: "Real Estate & PropTech",
    points: [
      "AI-based property price prediction",
      "Lead scoring & buyer behavior analytics",
      "Virtual assistants for property recommendations",
      "AI chatbots for site visitors & property inquiries",
      "OCR for lease, title deed, and KYC document extraction"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171077/Real_Estate-_Prop_Tech_o9tefh.jpg",
  },
  {
    title: "Government & Public Sector",
    points: [
      "AI for document classification & citizen record digitization",
      "NLP-based grievance redressal chatbots",
      "AI-powered compliance verification tools",
      "Face recognition systems for public safety & surveillance",
      "AI in smart city infrastructure for traffic & waste management",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171056/AdobeStock_1276034648_cqnr7o.jpg",
  },
  {
    title: "Tax, Legal & Accounting",
    points: [
      "Document OCR/ICR for tax forms, GST invoices, and vouchers",
      "AI-based accounting entry automation",
      "Tax advisory chatbots and legal assistants",
      "Contract clause detection & obligation tracking",
      "Predictive modeling for audit risks",
      "Document classification for compliance filings"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171044/Legal_and_Laws_qb0yrs.jpg",
  },
  {
    title: "Hospitality & FoodTech",
    points: [
      "Smart menu personalization & dynamic pricing",
      "Voice-enabled ordering and table reservation",
      "AI for customer review sentiment analysis",
      "Inventory & ingredient demand forecasting",
      "Facial recognition for loyalty programs and seamless checkout",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171063/FoodTech_r0cqto.jpg",
  },
  {
    title: "Aviation",
    points: [
      "Luggage tracking and security scanning via computer vision",
      "Chatbots for flight booking, queries, and rescheduling"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171053/Aviation_Industries_vrkgvt.jpg",
  },
  {
    title: "Agriculture",
    points: [
      "AI-powered crop disease detection using drone imagery",
      "Yield prediction based on weather and soil analysis",
      "Smart irrigation control with AI and IoT sensors",
      "Agricultural advisory bots for farmers",
      "Agri-market price forecasting tools",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171086/Agriculture_ajw95n.jpg",
  },
  {
    title: "LegalTech",
    points: [
      "AI for contract review and clause extraction",
      "Predictive legal outcome analysis",
      "Case law summarization using NLP",
      "Virtual legal assistants and law firm bots"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752171044/Legal_and_Laws_qb0yrs.jpg",
  },
]

const whyPoints = [
  "Proficient in all major AI frameworks, toolkits, and APIs",
  "Research-backed development approach with industry expertise",
  "End-to-end support: from proof-of-concept to enterprise deployment",
  "Cloud-native and edge-ready AI deployments",
  "Responsible, transparent, and explainable AI solutions"
]

const mainTitle = "Custom AI Development Company";
const mainDescription = "Transforming businesses by offering innovative custom AI solutions development services.";
const title = "Top AI Development Company for Smart, Scalable Business Solutions";
const description = "At MappOptimist Technologies, we offer powerful, AI-driven solutions that help businesses automate operations, boost efficiency, and make smarter decisions. As a leading AI/ML development company, we deliver tailored Artificial Intelligence services and machine learning development for startups, enterprises, and government agencies across the globe.";
const specificServiceSliderTitle = "Our AI/ML Development Services";
const technologyTitle = "AI Development Technologies We Work On";
const serviceIndustriesSliderTitle = "Industries We Helped with AI";
const whyTitle = "Why Choose MappOptimist for AI/ML Development?";
const quoteTitle = "Let's Build Your AI-Powered Future";
const quoteDescription = "Ready to grow your business with smart AI and machine learning solutions? Partner with MappOptimist Technologies - Your Trusted AI Software Development Company."
const quoteBtnText = "Get a Free Consultation Now"

export const metadata = {
  title: "Custom AI & Machine Learning (AI/ML) Development Company",
  description: "Transforming businesses by offering innovative custom AI solutions development services. Top AI Development Company for Smart, Scalable Business Solutions. At MappOptimist Technologies, we offer powerful, AI-driven solutions that help businesses automate operations, boost efficiency, and make smarter decisions. As a leading AI/ML development company, we deliver tailored Artificial Intelligence services and machine learning development for startups, enterprises, and government agencies across the globe.",
  openGraph: {
    title: "Custom AI & Machine Learning (AI/ML) Development Company",
    description:
      "Transforming businesses by offering innovative custom AI solutions development services. Top AI Development Company for Smart, Scalable Business Solutions. At MappOptimist Technologies, we offer powerful, AI-driven solutions that help businesses automate operations, boost efficiency, and make smarter decisions. As a leading AI/ML development company, we deliver tailored Artificial Intelligence services and machine learning development for startups, enterprises, and government agencies across the globe.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/ai-machine-learning-development-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170502/AI-ML_Development_Service_yrgup2.jpg",
        width: 1200,
        height: 630,
        alt: "Custom AI & Machine Learning (AI/ML) Development Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/ai-machine-learning-development-services`,
  },
};

export default function AIMachineLearningPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170502/AI-ML_Development_Service_yrgup2.jpg"
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
      serviceIndustriesSliderTitle={serviceIndustriesSliderTitle}
      whyTitle={whyTitle}
      quoteTitle={quoteTitle}
      quoteDescription={quoteDescription}
      quoteBtnText={quoteBtnText}
    />
  );
}

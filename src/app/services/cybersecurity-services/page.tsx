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
    title: "Network & Infrastructure Security",
    subtitle: "",
    points: [
      "Firewall Configuration, Intrusion Detection & Prevention (IDS/IPS)",
      "Network Traffic Analysis, Packet Inspection, and Data Loss Prevention (DLP)",
      "Network Segmentation and Microsegmentation",
      "Zero Trust Network Access (ZTNA) Implementation"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174409/Infra_security_hhtwsm.png",
    cardIcon: AIIcon
  },
  {
    title: "Endpoint & Device Protection",
    subtitle: "",
    points: [
      "Endpoint Detection and Response (EDR)",
      "Anti-malware, Anti-ransomware, and Vulnerability Shielding",
      "Mobile Device Management (MDM) & IoT Security Solutions",
      "Remote Device Security for Distributed Teams",
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174415/Cyber_security_45_w2xrqz.png",
    cardIcon: AIIcon
  },
  {
    title: "Cloud Security Services",
    subtitle: "",
    points: [
      "Security Hardening for AWS, Azure, GCP",
      "Cloud Access Security Broker (CASB) Implementation",
      "Identity and Access Management (IAM) in Cloud",
      "Secure Cloud Migration, Configuration Monitoring & Encryption"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174410/Cyber_securrity_03_vrho9l.png",
    cardIcon: AIIcon
  },
  {
    title: "Application & API Security",
    subtitle: "",
    points: [
      "Secure SDLC Implementation and Code Reviews",
      "API Security Testing (OWASP Top 10, Postman, Burp Suite)",
      "Web Application Firewalls (WAF), Bot Detection, and DDoS Mitigation",
      "DevSecOps Integration with CI/CD Pipelines"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174415/Cyber_security_45_w2xrqz.png",
    cardIcon: AIIcon
  },
  {
    title: "Identity, Access & Privileged Account Management",
    subtitle: "",
    points: [
      "Multi-Factor Authentication (MFA) Implementation",
      "Identity Governance & Single Sign-On (SSO)",
      "Privileged Access Management (PAM) Tools Deployment",
      "Role-Based Access Control (RBAC) and Audit Logging"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174409/Infra_security_hhtwsm.png",
    cardIcon: AIIcon
  },
  {
    title: "Security Monitoring & Threat Detection",
    subtitle: "",
    points: [
      "24/7 SIEM Monitoring and Real-Time Alerts (Splunk, QRadar, ELK Stack)",
      "Threat Intelligence Feed Integration and Anomaly Detection",
      "User Behavior Analytics (UBA) and Security Information Correlation",
      "Security Automation using SOAR Platforms"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174419/Cyber_security_icsibe.png",
    cardIcon: AIIcon
  },
  {
    title: "Penetration Testing & Vulnerability Assessment",
    subtitle: "",
    points: [
      "Internal & External Pen Testing for Web, Mobile, Networks",
      "Red Team/Blue Team Simulations and Social Engineering Tests",
      "Static & Dynamic Application Security Testing (SAST/DAST)",
      "Risk Scoring and Remediation Planning"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174410/Cyber_securrity_03_vrho9l.png",
    cardIcon: AIIcon
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    subtitle: "",
    points: [
      "Regulatory Compliance Consulting (GDPR, HIPAA, ISO 27001, NIST)",
      "Cybersecurity Policy Design and Implementation",
      "Vendor Risk Assessments and Third-Party Security",
      "Business Continuity Planning & Disaster Recovery Audits"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752174409/Infra_security_hhtwsm.png",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "Threat Protection & Detection",
    technologies: [
      "CrowdStrike",
      "SentinelOne",
      "Cylance",
      "Sophos",
      "Bitdefender",
      "Snort",
      "Suricata",
      "Zeek",
      "Wazuh",
    ]
  },
  {
    title: "Cloud Security & Management",
    technologies: [
      "AWS GuardDuty",
      "Azure Defender",
      "GCP Security Command Center",
      "HashiCorp Vault",
      "Terraform for IAM",
      "CSPM & Secrets Management",
    ]
  },
  {
    title: "Penetration Testing & Audit Tools",
    technologies: [
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "Nikto",
      "OWASP ZAP",
      "Nmap"
    ]
  },
  {
    title: "Monitoring & SIEM Tools",
    technologies: [
      "Splunk",
      "IBM QRadar",
      "Elastic SIEM",
      "AlienVault OSSIM",
      "LogRhythm",
    ]
  },
  {
    title: "DevSecOps & CI/CD Security",
    technologies: [
      "Checkmarx",
      "Snyk",
      "SonarQube",
      "Aqua Security",
      "Prisma Cloud",
    ]
  }
]

const industriesData = [
  {
    title: "Banking & Finance",
    points: ["Secure banking apps", "KYC/AML Compliance", "Fraud Monitoring"],
    img1: Blog1,
  },
  {
    title: "Healthcare",
    points: ["HIPAA Compliant Data Security", "EMR/EHR Protection"],
    img1: Blog2,
  },
  {
    title: "Retail & E-Commerce",
    points: ["PCI DSS Compliance", "Payment Gateway Protection"],
    img1: Blog1,
  },
  {
    title: "SaaS & Tech Startups",
    points: ["Secure DevOps Pipelines", "API & Product Hardening"],
    img1: Blog2,
  },
  {
    title: "Manufacturing & OT",
    points: ["SCADA/ICS Security", "Endpoint Monitoring", "Zero Trust Deployment"],
    img1: Blog1,
  },
  {
    title: "Government & Public Sector",
    points: ["Digital Identity Protection", "Citizen Data Security"],
    img1: Blog2,
  },
  {
    title: "Education",
    points: ["Cloud Data Privacy", "Secure Online Learning Platforms"],
    img1: Blog1,
  },
  {
    title: "Legal & Professional Services",
    points: ["Secure Document Management", "Client Confidentiality Systems"],
    img1: Blog2,
  },
]

const whyPoints = [
  "Proactive Threat Hunting & Incident Response",
  "24/7 Security Operations Center (SOC) as a Service",
  "Compliance Management (ISO 27001, SOC 2, HIPAA, GDPR, PCI-DSS)",
  "Security Architecture for Cloud, On-Prem & Hybrid Infrastructure",
  "Integration of AI/ML for Predictive Threat Analytics",
  "End-to-End Cybersecurity Assessment & Penetration Testing",
  "Cyber Risk Management for Enterprises and Startups",
]

const mainTitle = "Cybersecurity Company";
const mainDescription = "Transforming businesses by offering innovative Cybersecurity services.";
const title = "Comprehensive Cybersecurity Solutions to Protect Your Business from Evolving Digital Threats";
const description = `At MappOptimist Technologies, we offer full-spectrum cybersecurity services designed to protect organizations from cyber threats, data breaches, ransomware, phishing attacks, insider threats, and more. As a globally trusted cybersecurity consulting and managed security service provider (MSSP), we help enterprises across industries secure their infrastructure, data, applications, and operations through proactive monitoring, real-time threat intelligence, and advanced security frameworks.\n\nOur cybersecurity solutions combine AI-powered threat detection, Zero Trust Architecture, compliance enforcement, and cloud-native security tools to safeguard modern digital ecosystems in real-time.`;
const specificServiceSliderTitle = "Our Cybersecurity Services";
const technologyTitle = "Security Tools, Frameworks & Platforms We Work On";
const serviceIndustriesSliderTitle = "Cybersecurity for Industries We Serve";
const whyTitle = "Why Choose MappOptimist for Cybersecurity?";
const quoteTitle = "Secure Your Digital Ecosystem with MappOptimist Technologies";
const quoteDescription = "Partner with MappOptimist to fortify your organization with end-to-end, enterprise-grade cybersecurity services that combine innovation, compliance, and automation."
const quoteBtnText = "Book Your Free Cybersecurity Assessment Today"
const technologySubTitle = ""
const technologyDescription = "";

export const metadata = {
  title: "Cybersecurity Company",
  description: "Transforming businesses by offering innovative Cybersecurity services. Comprehensive Cybersecurity Solutions to Protect Your Business from Evolving Digital Threats. At MappOptimist Technologies, we offer full-spectrum cybersecurity services designed to protect organizations from cyber threats, data breaches, ransomware, phishing attacks, insider threats, and more. As a globally trusted cybersecurity consulting and managed security service provider (MSSP), we help enterprises across industries secure their infrastructure, data, applications, and operations through proactive monitoring, real-time threat intelligence, and advanced security frameworks. Our cybersecurity solutions combine AI-powered threat detection, Zero Trust Architecture, compliance enforcement, and cloud-native security tools to safeguard modern digital ecosystems in real-time.",
  openGraph: {
    title: "Cybersecurity Company",
    description: "Transforming businesses by offering innovative Cybersecurity services. Comprehensive Cybersecurity Solutions to Protect Your Business from Evolving Digital Threats. At MappOptimist Technologies, we offer full-spectrum cybersecurity services designed to protect organizations from cyber threats, data breaches, ransomware, phishing attacks, insider threats, and more. As a globally trusted cybersecurity consulting and managed security service provider (MSSP), we help enterprises across industries secure their infrastructure, data, applications, and operations through proactive monitoring, real-time threat intelligence, and advanced security frameworks. Our cybersecurity solutions combine AI-powered threat detection, Zero Trust Architecture, compliance enforcement, and cloud-native security tools to safeguard modern digital ecosystems in real-time.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/cybersecurity-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170497/Cybwer_Security_-01_qovlmc.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/cybersecurity-services`,
  },
};

export default function CybersecurityServicesPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170497/Cybwer_Security_-01_qovlmc.jpg"
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

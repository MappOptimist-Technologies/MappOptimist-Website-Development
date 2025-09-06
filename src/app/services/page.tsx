// import React from 'react'
// import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
// import Navbar from '@/components/header/navbar';
// import IndustrySpecificExpertiseComponent from '@/components/Home/industrySpecificExpertise';
// import OurBlogComponent from '@/components/Home/OurBlogs';
// import Footer from '@/components/Home/footer';
// import CompanyListSliderComponent from '@/components/Home/companySlider';
// import Link from 'next/link';
// import Image from 'next/image'; // Ensure this import is added

// export const metadata = {
//   title: "Driving Direction Towards Smart Solutions",
//   description: "Serving innovative and exceptional digital solutions for startups to enterprise-level businesses that help them odds out against millions of competitors. Delivering Excellence to Make Global Businesses Excellent. We define, develop, and deploy digital solutions that can help global businesses deliver an awesome user experience. Our smart solutions help businesses enhance conversion and minimize costs while being the best in the industry. Our IT consultation team brings comprehensive technology roadmaps that can help businesses own scalable solutions. We provide end-to-end development services that are significantly designed for your project requirements and business vision.",
//   openGraph: {
//     title: "Driving Direction Towards Smart Solutions",
//     description:
//       "Serving innovative and exceptional digital solutions for startups to enterprise-level businesses that help them odds out against millions of competitors. Delivering Excellence to Make Global Businesses Excellent. We define, develop, and deploy digital solutions that can help global businesses deliver an awesome user experience. Our smart solutions help businesses enhance conversion and minimize costs while being the best in the industry. Our IT consultation team brings comprehensive technology roadmaps that can help businesses own scalable solutions. We provide end-to-end development services that are significantly designed for your project requirements and business vision.",
//     url: `${process.env.NEXT_WEBSITE_BASE_URL}/services`,
//     siteName: "MappOptimist Technologies",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752233791/our%20IT%20services.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Driving Direction Towards Smart Solutions",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   alternates: {
//     canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services`,
//   },
// };

// export default function ServicesPage() {

//   const data = [
//     {
//       id: 1,
//       no: "1",
//       title: "AI & Machine Learning (AI/ML) Project Development",
//       subtitle: "Top AI/ML Development Company - AI Solutions That Transform Business",
//       description: "MappOptimist Technologies offers AI and machine learning project development services that help automate processes, improve decision-making, and scale operations. We deliver AI-powered software solutions tailored to your industry and use case.",
//       chips: [
//         "Custom AI Software Development",
//         "AI Agents & Generative AI Models",
//         "AI Consulting & Strategy",
//         "Machine Learning Model Development",
//         "NLP (Natural Language Processing) Solutions",
//         "Computer Vision Applications",
//         "AI-Powered Recommendation Engines",
//         "Predictive Analytics",
//         "AI Document Extraction",
//         "Big Data Analytics & Data Engineering"
//       ],
//       serviceIncludes: "Our AI Services Include:",
//       serviceOtherText: "Get intelligent AI solutions for smarter operations.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751959114/AI-ML_Development_Service_jui7ob.jpg",
//       bgcolor: "#FFF1F6",
//       routeName: "ai-machine-learning-development-services"
//     },
//     {
//       id: 2,
//       no: "2",
//       title: "Mobile App Development Services",
//       subtitle: "Custom Mobile App Development for iOS & Android",
//       description: "As a leading mobile app development company, we build secure, scalable, and user-friendly iOS, Android, and cross-platform applications powered by AI. Whether you're launching a startup app or an enterprise mobile platform, we bring your idea to life.",
//       chips: [
//         "iOS App Development Services",
//         "Android App Development Services",
//         "Cross-Platform Mobile App Development (Flutter, React Native)",
//         "Hybrid App Development",
//         "AI-Powered Mobile Applications"
//       ],
//       serviceIncludes: "We Offer:",
//       serviceOtherText: "Launch feature-rich mobile apps that drive user engagement and business growth.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958374/Mobile_Application_Devel_opment_qglm1o.jpg",
//       bgcolor: "#FFFCE7",
//       routeName: "mobile-app-development-services"
//     },
//     {
//       id: 3,
//       no: "3",
//       title: "Website Development Services",
//       subtitle: "Best Website Development Company - Build Fast, SEO-Ready Websites",
//       description: "MappOptimist Technologies offers high-performance website development services for startups, SMBs, and enterprises. We create responsive, SEO-optimized websites that load fast and convert visitors into customers.",
//       chips: [
//         "Custom Website Development",
//         "E-Commerce Website Development",
//         "WordPress Development",
//         "SEO-Optimized Websites",
//         "Mobile-Optimized Web Design",
//         "Web App Development",
//         "Responsive Web Design"
//       ],
//       serviceIncludes: "We Specialize In:",
//       serviceOtherText: "Get a professionally built website that ranks, engages, and converts.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958379/Website_Development_wxfx4u.jpg",
//       bgcolor: "#EDF5FC",
//       routeName: "website-development-services"
//     },
//     {
//       id: 4,
//       no: "4",
//       title: "Custom Software Development",
//       subtitle: "Tailor-Made Software Development Services for Modern Businesses",
//       description: "Looking for a custom software development company? MappOptimist delivers powerful, secure, and scalable AI-powered software designed for your unique needs.",
//       chips: [
//         'Business-Specific Software Development',
//         "Enterprise Software Development",
//         "AI-Integrated Software Solutions",
//         "Big Data Software Architecture",
//         "Cross-Platform Software Development",
//         "Industry-Focused Applications"
//       ],
//       serviceIncludes: "Our Software Solutions Include:",
//       serviceOtherText: "Develop custom software that streamlines operations and scales effortlessly.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958402/Custom_Software_Development_myahel.jpg",
//       bgcolor: "#EAF7EF",
//       routeName: "custom-software-development-services"
//     },
//     {
//       id: 5,
//       no: "5",
//       title: "Blockchain Development Services",
//       subtitle: "Secure Blockchain Development for Smart, Transparent Business Operations",
//       description: "MappOptimist is a trusted blockchain development company offering custom blockchain apps, smart contracts, and dApp solutions that deliver decentralization, security, and transparency.",
//       chips: [
//         "Blockchain App Development",
//         "Decentralized Application (dApp) Development",
//         "Smart Contract Development",
//         "Private & Public Blockchain Networks",
//         "Token Development (NFTs, Utility, Security Tokens)",
//         "Crypto Wallet & Cryptocurrency Development",
//         "Blockchain for Supply Chain Management"
//       ],
//       serviceIncludes: "Our Blockchain Expertise:",
//       serviceOtherText: "Leverage blockchain for secure and automated digital transactions.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752057946/AdobeStock_443059242_Editorial_Use_Only_1_ig114z.jpg",
//       bgcolor: "#FFF2EC",
//       routeName: "blockchain-solution-development-services"
//     },
//     {
//       id: 6,
//       no: "6",
//       title: "Cybersecurity Services",
//       subtitle: "Advanced Cybersecurity Services to Protect Your Business",
//       description: "Our enterprise-grade cybersecurity solutions ensure your data, networks, and applications are safe from ever-evolving threats. We help businesses stay secure and compliant across industries.",
//       chips: [
//         "Network Security",
//         "Endpoint Protection",
//         "Threat Detection & Response",
//         "Risk Assessment & Compliance",
//         "Security Audits & Penetration Testing"
//       ],
//       serviceIncludes: "Cybersecurity Services We Offer:",
//       serviceOtherText: "Keep your business secure with real-time protection and threat intelligence.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958375/BlockChian_Services_yschoh.jpg",
//       bgcolor: "#FFF1F6",
//       routeName: "cybersecurity-services"
//     },
//     {
//       id: 7,
//       no: "7",
//       title: "Digital Marketing Services",
//       subtitle: "Results-Driven Digital Marketing to Grow Your Online Presence",
//       description: "We offer complete digital marketing services that help increase website traffic, generate leads, and grow revenue. Our strategies focus on SEO, social media, PPC, and content marketing.",
//       chips: [
//         "SEO Services (On-Page, Off-Page, Technical SEO)",
//         "Social Media Marketing (Facebook, Instagram, LinkedIn)",
//         "Content Marketing & Blogging",
//         "Pay-Per-Click Advertising (Google Ads, Bing Ads)",
//         "Email Marketing Campaigns",
//         "Search Engine Marketing (SEM)"
//       ],
//       serviceIncludes: "Marketing Services Include:",
//       serviceOtherText: "Rank higher, reach more customers, and grow online with MappOptimist.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958381/Digital_Marketting_qlvjob.jpg",
//       bgcolor: "#FCFAE6",
//       routeName: "digital-marketing-solution-services"
//     },
//     {
//       id: 8,
//       no: "8",
//       title: "IT Staff Augmentation Services",
//       subtitle: "Flexible IT Staff Augmentation - Hire Skilled Developers On-Demand",
//       description: "MappOptimist offers IT staff augmentation services to help you hire experienced tech professionals on a short-term or long-term basis. We make scaling your team fast, cost-effective, and reliable.",
//       chips: [
//         "Remote IT Staffing Solutions",
//         "Contract-Based Hiring",
//         "Full-Time Dedicated Resources",
//         "Project-Based Resource Allocation",
//         "Quick Deployment of Skilled IT Professionals"
//       ],
//       serviceIncludes: "Staffing Models We Offer:",
//       serviceOtherText: "Build a high-performing tech team with expert developers when and where you need them.",
//       limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751959515/It_Staffonmg_jum0hp.jpg",
//       bgcolor: "#EDF5FC",
//       routeName: "it-staff-augmentation-services"
//     },
//   ]

//   return (
//     <div className="bg-white">
//       <div className="w-100 position-relative">
//         <div className='services-container'>
//           <div className='services-overlay'></div>
//           <Navbar />
//           <div className='events-content-container' data-aos="fade-up">
//             <h1>Driving Direction Towards Smart Solutions</h1>
//             <h6>Serving innovative and exceptional digital solutions for startups to enterprise-level businesses that help them odds out against millions of competitors.</h6>
//           </div>
//         </div>
//         <div className='my-5' data-aos="fade-up">
//           <CompanyListSliderComponent />
//         </div>
//         <div data-aos="fade-up" className='d-flex flex-column px-4 pt-4 pb-5 justify-content-center align-items-center services-content text-center' >
//           <h2>Delivering Excellence to Make Global Businesses Excellent</h2>
//           <h6>We define, develop, and deploy digital solutions that can help global businesses deliver an awesome user experience. Our smart solutions help businesses enhance conversion and minimize costs while being the best in the industry. Our IT consultation team brings comprehensive technology roadmaps that can help businesses own scalable solutions. We provide end-to-end development services that are significantly designed for your project requirements and business vision.</h6>
//         </div>
//         {/* <section className="industries-list-container1">
//   {data?.map((item, index) => (
//     <div
//       key={item?.title}
//       className="industries-list-card1 shadow-lg"
//       style={{ backgroundColor: item?.bgcolor || `#f${index}f${index}f${index}` }} // Dynamic background color
//     >
//       <div className="industries-list-content1">
//         <div className="text-content1">
//           <h1 style={{ textAlign: "center" }}>{item?.title}</h1>
//           <h3 className="service-item-h3 mt-3">{item.subtitle}</h3>
//           <h3 style={{ whiteSpace: 'pre-line' }}>{item?.description}</h3>
//           <h4 className="service-item-h4 mt-4">{item.serviceIncludes}</h4>
//           <ul className="custom-bullets1 mt-2">
//             {item?.chips?.map((i, a) => (
//               <li key={i + a}>{i}</li>
//             ))}
//           </ul>
//           <h6 className="service-item-h6 mt-3 mb-4">{item.serviceOtherText}</h6>
//           <Link href={`/services/${item.routeName}`}>
//             <ButtonWithIcon btnText="Explore" />
//           </Link>
//         </div>
//         <div className="image-content1">
//           <img
//             src={item?.limage}
//             alt={item?.title}
//             className="card-image1"
//           />
//         </div>
//       </div>
//     </div>
//   ))}
// </section> */}
// <section
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     gap: "2rem",
//     width: "95%",
//     margin: "0 auto", // centers the whole section
//   }}
// >
//   {data?.map((item, index) => (
//     <div
//       key={item?.title}
//       style={{
//         display: "flex",
//         flexDirection: index % 2 === 0 ? "row" : "row-reverse", // alternate layout
//         borderRadius: "16px",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//         overflow: "hidden",
//         backgroundColor: item?.bgcolor || `#f${index}f${index}f${index}`,
//         color: "#000",
//       }}
//     >
//       {/* Left Image */}
//       <div style={{ flex: "1", minWidth: "40%" }}>
//       <Image
//     src={item?.limage}
//     alt={item?.title || "image"}
//     fill
//     style={{ objectFit: "cover" }}
//   />
//       </div>

//       {/* Right Content */}
//       <div
//         style={{
//           flex: "1",
//           padding: "24px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "2rem", // ✅ Increased font size
//             fontWeight: "bold",
//             textAlign: "center",
//             marginBottom: "1rem",
//           }}
//         >
//           {item?.title}
//         </h1>

//         <h3 style={{ marginTop: "12px", fontSize: "1.1rem", fontWeight: 500 }}>
//           {item?.subtitle}
//         </h3>

//         <h3
//           style={{
//             marginTop: "8px",
//             color: "#555",
//             whiteSpace: "pre-line",
//           }}
//         >
//           {item?.description}
//         </h3>

//         <h4 style={{ marginTop: "16px", fontWeight: "600" }}>
//           {item?.serviceIncludes}
//         </h4>

//         <ul
//           style={{
//             marginTop: "8px",
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "8px",
//             padding: 0,
//             listStyle: "none",
//           }}
//         >
//           {item?.chips?.map((i, a) => (
//             <li
//               key={i + a}
//               style={{
//                 padding: "6px 12px",
//                 border: "1px solid #ccc",
//                 borderRadius: "20px",
//                 fontSize: "0.9rem",
//                 color: "#333",
//               }}
//             >
//               {i}
//             </li>
//           ))}
//         </ul>

//         <h6
//           style={{
//             marginTop: "12px",
//             marginBottom: "16px",
//             fontSize: "0.85rem",
//             color: "#666",
//           }}
//         >
//           {item?.serviceOtherText}
//         </h6>

//         <Link
//           href={`/services/${item.routeName}`}
//           style={{ marginTop: "8px", display: "inline-block" }}
//         >
//           <ButtonWithIcon btnText="Explore" />
//         </Link>
//       </div>
//     </div>
//   ))}
// </section>



//         <IndustrySpecificExpertiseComponent />
//         <OurBlogComponent />
//         <div className="common-footer-container">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   )
// }




import React from 'react'
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import Navbar from '@/components/header/navbar';
import IndustrySpecificExpertiseComponent from '@/components/Home/industrySpecificExpertise';
import OurBlogComponent from '@/components/Home/OurBlogs';
import Footer from '@/components/Home/footer';
import CompanyListSliderComponent from '@/components/Home/companySlider';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Driving Direction Towards Smart Solutions",
  description: "Serving innovative and exceptional digital solutions for startups to enterprise-level businesses that help them odds out against millions of competitors. Delivering Excellence to Make Global Businesses Excellent. We define, develop, and deploy digital solutions that can help global businesses deliver an awesome user experience. Our smart solutions help businesses enhance conversion and minimize costs while being the best in the industry. Our IT consultation team brings comprehensive technology roadmaps that can help businesses own scalable solutions. We provide end-to-end development services that are significantly designed for your project requirements and business vision.",
  openGraph: {
    title: "Driving Direction Towards Smart Solutions",
    description:
      "Serving innovative and exceptional digital solutions for startups to enterprise-level businesses that help them odds out against millions of competitors. Delivering Excellence to Make Global Businesses Excellent. We define, develop, and deploy digital solutions that can help global businesses deliver an awesome user experience. Our smart solutions help businesses enhance conversion and minimize costs while being the best in the industry. Our IT consultation team brings comprehensive technology roadmaps that can help businesses own scalable solutions. We provide end-to-end development services that are significantly designed for your project requirements and business vision.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752233791/our%20IT%20services.jpg",
        width: 1200,
        height: 630,
        alt: "Driving Direction Towards Smart Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services`,
  },
};

export default function ServicesPage() {

  const data = [
    {
      id: 1,
      no: "1",
      title: "AI & Machine Learning (AI/ML) Project Development",
      subtitle: "Top AI/ML Development Company - AI Solutions That Transform Business",
      description: "MappOptimist Technologies offers AI and machine learning project development services that help automate processes, improve decision-making, and scale operations. We deliver AI-powered software solutions tailored to your industry and use case.",
      chips: [
        "Custom AI Software Development",
        "AI Agents & Generative AI Models",
        "AI Consulting & Strategy",
        "Machine Learning Model Development",
        "NLP (Natural Language Processing) Solutions",
        "Computer Vision Applications",
        "AI-Powered Recommendation Engines",
        "Predictive Analytics",
        "AI Document Extraction",
        "Big Data Analytics & Data Engineering"
      ],
      serviceIncludes: "Our AI Services Include:",
      serviceOtherText: "Get intelligent AI solutions for smarter operations.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751959114/AI-ML_Development_Service_jui7ob.jpg",
      bgcolor: "custom-bg-pink",
      routeName: "ai-machine-learning-development-services"
    },
    {
      id: 2,
      no: "2",
      title: "Mobile App Development Services",
      subtitle: "Custom Mobile App Development for iOS & Android",
      description: "As a leading mobile app development company, we build secure, scalable, and user-friendly iOS, Android, and cross-platform applications powered by AI. Whether you're launching a startup app or an enterprise mobile platform, we bring your idea to life.",
      chips: [
        "iOS App Development Services",
        "Android App Development Services",
        "Cross-Platform Mobile App Development (Flutter, React Native)",
        "Hybrid App Development",
        "AI-Powered Mobile Applications"
      ],
      serviceIncludes: "We Offer:",
      serviceOtherText: "Launch feature-rich mobile apps that drive user engagement and business growth.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958374/Mobile_Application_Devel_opment_qglm1o.jpg",
      bgcolor: "bg-light",
      routeName: "mobile-app-development-services"
    },
    {
      id: 3,
      no: "3",
      title: "Website Development Services",
      subtitle: "Best Website Development Company - Build Fast, SEO-Ready Websites",
      description: "MappOptimist Technologies offers high-performance website development services for startups, SMBs, and enterprises. We create responsive, SEO-optimized websites that load fast and convert visitors into customers.",
      chips: [
        "Custom Website Development",
        "E-Commerce Website Development",
        "WordPress Development",
        "SEO-Optimized Websites",
        "Mobile-Optimized Web Design",
        "Web App Development",
        "Responsive Web Design"
      ],
      serviceIncludes: "We Specialize In:",
      serviceOtherText: "Get a professionally built website that ranks, engages, and converts.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958379/Website_Development_wxfx4u.jpg",
      bgcolor: "custom-bg-yellow",
      routeName: "website-development-services"
    },
    {
      id: 4,
      no: "4",
      title: "Custom Software Development",
      subtitle: "Tailor-Made Software Development Services for Modern Businesses",
      description: "Looking for a custom software development company? MappOptimist delivers powerful, secure, and scalable AI-powered software designed for your unique needs.",
      chips: [
        'Business-Specific Software Development',
        "Enterprise Software Development",
        "AI-Integrated Software Solutions",
        "Big Data Software Architecture",
        "Cross-Platform Software Development",
        "Industry-Focused Applications"
      ],
      serviceIncludes: "Our Software Solutions Include:",
      serviceOtherText: "Develop custom software that streamlines operations and scales effortlessly.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958402/Custom_Software_Development_myahel.jpg",
      bgcolor: "bg-light",
      routeName: "custom-software-development-services"
    },
    {
      id: 5,
      no: "5",
      title: "Blockchain Development Services",
      subtitle: "Secure Blockchain Development for Smart, Transparent Business Operations",
      description: "MappOptimist is a trusted blockchain development company offering custom blockchain apps, smart contracts, and dApp solutions that deliver decentralization, security, and transparency.",
      chips: [
        "Blockchain App Development",
        "Decentralized Application (dApp) Development",
        "Smart Contract Development",
        "Private & Public Blockchain Networks",
        "Token Development (NFTs, Utility, Security Tokens)",
        "Crypto Wallet & Cryptocurrency Development",
        "Blockchain for Supply Chain Management"
      ],
      serviceIncludes: "Our Blockchain Expertise:",
      serviceOtherText: "Leverage blockchain for secure and automated digital transactions.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752057946/AdobeStock_443059242_Editorial_Use_Only_1_ig114z.jpg",
      bgcolor: "custom-bg-blue",
      routeName: "blockchain-solution-development-services"
    },
    {
      id: 6,
      no: "6",
      title: "Cybersecurity Services",
      subtitle: "Advanced Cybersecurity Services to Protect Your Business",
      description: "Our enterprise-grade cybersecurity solutions ensure your data, networks, and applications are safe from ever-evolving threats. We help businesses stay secure and compliant across industries.",
      chips: [
        "Network Security",
        "Endpoint Protection",
        "Threat Detection & Response",
        "Risk Assessment & Compliance",
        "Security Audits & Penetration Testing"
      ],
      serviceIncludes: "Cybersecurity Services We Offer:",
      serviceOtherText: "Keep your business secure with real-time protection and threat intelligence.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958375/BlockChian_Services_yschoh.jpg",
      bgcolor: "bg-light",
      routeName: "cybersecurity-services"
    },
    {
      id: 7,
      no: "7",
      title: "Digital Marketing Services",
      subtitle: "Results-Driven Digital Marketing to Grow Your Online Presence",
      description: "We offer complete digital marketing services that help increase website traffic, generate leads, and grow revenue. Our strategies focus on SEO, social media, PPC, and content marketing.",
      chips: [
        "SEO Services (On-Page, Off-Page, Technical SEO)",
        "Social Media Marketing (Facebook, Instagram, LinkedIn)",
        "Content Marketing & Blogging",
        "Pay-Per-Click Advertising (Google Ads, Bing Ads)",
        "Email Marketing Campaigns",
        "Search Engine Marketing (SEM)"
      ],
      serviceIncludes: "Marketing Services Include:",
      serviceOtherText: "Rank higher, reach more customers, and grow online with MappOptimist.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751958381/Digital_Marketting_qlvjob.jpg",
      bgcolor: "custom-bg-yellow",
      routeName: "digital-marketing-solution-services"
    },
    {
      id: 8,
      no: "8",
      title: "IT Staff Augmentation Services",
      subtitle: "Flexible IT Staff Augmentation - Hire Skilled Developers On-Demand",
      description: "MappOptimist offers IT staff augmentation services to help you hire experienced tech professionals on a short-term or long-term basis. We make scaling your team fast, cost-effective, and reliable.",
      chips: [
        "Remote IT Staffing Solutions",
        "Contract-Based Hiring",
        "Full-Time Dedicated Resources",
        "Project-Based Resource Allocation",
        "Quick Deployment of Skilled IT Professionals"
      ],
      serviceIncludes: "Staffing Models We Offer:",
      serviceOtherText: "Build a high-performing tech team with expert developers when and where you need them.",
      limage: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751959515/It_Staffonmg_jum0hp.jpg",
      bgcolor: "custom-bg-blue",
      routeName: "it-staff-augmentation-services"
    },
  ]

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className='services-container'>
          <div className='services-overlay'></div>
          <Navbar />
          <div className='events-content-container' data-aos="fade-up">
            <h1>Driving Direction Towards Smart Solutions</h1>
            <h6>Serving innovative and exceptional digital solutions for startups to enterprise-level businesses that help them odds out against millions of competitors.</h6>
          </div>
        </div>
        <div className='my-5' data-aos="fade-up">
          <CompanyListSliderComponent />
        </div>
        <div data-aos="fade-up" className='d-flex flex-column px-4 pt-4 pb-5 justify-content-center align-items-center services-content text-center' >
          <h2>Delivering Excellence to Make Global Businesses Excellent</h2>
          <h6>We define, develop, and deploy digital solutions that can help global businesses deliver an awesome user experience. Our smart solutions help businesses enhance conversion and minimize costs while being the best in the industry. Our IT consultation team brings comprehensive technology roadmaps that can help businesses own scalable solutions. We provide end-to-end development services that are significantly designed for your project requirements and business vision.</h6>
        </div>
        
        {/* <section className="industries-list-contaner">
          {data?.map((item, index) => (
            <div key={item?.title} className={`industries-list-bg-image ${index % 2 === 0 ? "align-card-to-left" : ""}`}
              style={{
                backgroundImage: `url(${item?.limage})`,
                backgroundSize: 'cover',
              }}
            >
              <div className='industries-list-card shadow-lg'>
                <div className='industries-list-content'>
                  <h1>{item?.title}</h1>
                  <h3 className='service-item-h3 mt-3'>{item.subtitle}</h3>
                  <h3 style={{ whiteSpace: 'pre-line' }}>{item?.description}</h3>
                  <h4 className='service-item-h4 mt-4'>{item.serviceIncludes}</h4>
                  <ul className="custom-bullets mt-2">
                    {item?.chips?.map((i, a) => (
                      <li key={i + a} >
                        {i}
                      </li>
                    ))}
                  </ul>
                  <h6 className='service-item-h6 mt-3 mb-4'>{item.serviceOtherText}</h6>
                  <Link href={`/services/${item.routeName}`}>
                    <ButtonWithIcon btnText="Explore" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section> */}


        
        <div className="container mt-5">
            {data.map((category, index) => (
              <div data-aos="fade-up" key={category.title + category.subtitle} className={`rounded-4 ${category.bgcolor} g-0 mb-5 p-4 `}>
                <div className="row g-0 position-relative">
                  {/* Conditionally place the image on the right for even indexed cards */}
                  <div className={`col-md-4 ${index % 2 === 0 ? "" : "order-md-2"}`}>
                    <div className="w-100" style={{ position: 'relative', aspectRatio: '4 / 3' }}>
                      <Image
                        src={category.limage}
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
                    <h4 className="service-item-h4 mt-4"><strong>{category.serviceIncludes}</strong></h4>
                    {/* Tags */}
                    <div className="case-study-card-tags mt-3">
                      {category.chips.map((tag: string) => (
                        <span className="card-tag industries-card-tags" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div>
                      <h4 className="service-item-h4 mt-4">{category.serviceOtherText}</h4>
                    </div>
                    <div className='mt-3'>
                    <Link href={`/services/${category.routeName}`}>
                    <ButtonWithIcon btnText="Explore" />
                  </Link>
                  </div>
                    {/* <div className="case-study-card-tags mt-3">
                      {category?.helps?.map((tag: string) => (
                        <span className="card-tag industries-card-tags" key={tag}>{tag}</span>
                      ))}
                    </div> */}
                    {/* {category?.helperText ? <h6 className="service-item-h6 mt-4">{category.helperText}</h6> : null} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        <IndustrySpecificExpertiseComponent />
        <OurBlogComponent />
        <div className="common-footer-container">
          <Footer />
        </div>
      </div>
    </div>
  )
}
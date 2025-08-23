// "use client"
// import { Pagination, Navigation, FreeMode } from 'swiper/modules';
// import SwiperCore from 'swiper';
// import Image from 'next/image'
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/free-mode';
// import { useRouter } from 'next/navigation'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import AIMLIcon from "../../../public/assets/images/AI-ML.png"
// import WebDevIcon from "../../../public/assets/images/WebDev.png"
// import MobileDev from "../../../public/assets/images/mobileDev.png"
// import CSD from "../../../public/assets/images/CSD.png"
// import blockChain from "../../../public/assets/images/blockchain.png"
// import DigitalMarketing from "../../../public/assets/images/digitalMarketing.png"
// import Staff from "../../../public/assets/images/staff.png"
// import React, { useRef } from 'react';
// import ButtonWithIcon from '../Buttons/ButtonWithIcon';
// import './slider.css';

// const data = [
//   // {
//   //   title: "AI-as-a-Service", subTitle: "(AIaaS)", description: "Our AIaaS (Artificial Intelligence as a Service) offerings provide businesses with scalable, ready-to-use AI solutions that can be easily integrated into your existing systems.", icon: APIIcon, bg: "https://res.cloudinary.com/ddg5dxpsl/image/upload/v1751798481/animatecard3_gbldyi.jpg",
//   //   points: ["AI-Agents", "Generative AI (Gen AI)", "AI Consultation", "Machine Learning Model Development", "Natural Language Processing (NLP)", "Computer Vision", "AI-powered solutions as Recommendation Systems, Predictive Analysis, AI-document extraction system", "Data Services, Big Data Analysis, Data Engineering"],
//   //   routeName: "ai-machine-learning-development-services"
//   // },
//   {
//     title: "AI/ML Project", subTitle: "Development", description: "Revolutionize your operations with our AI-driven projects and artificial intelligence software solutions.", icon: AIMLIcon, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887702/AI-ML_development_thypt5.jpg",
//     points: ["AI-Agents", "Generative AI (Gen AI)", "AI Consultation", "Machine Learning Model Development", "Natural Language Processing (NLP)", "Computer Vision", "AI-powered solutions as Recommendation Systems, Predictive Analysis, AI-document extraction system", "Data Services, Big Data Analysis, Data Engineering"],
//     routeName: "ai-machine-learning-development-services"
//   },
//   {
//     title: "Mobile Application", subTitle: "Development", description: "Transform your business with our custom mobile app development services for iOS, Android, and cross-platform solutions. From sleek iOS apps to robust Android applications, we deliver scalable, secure, and AI-powered mobile apps tailored to your needs.", icon: MobileDev, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887703/Mobile_Application_Devel_opment_t2btno.jpg",
//     points: ["Custom iOS App Development", "Android App Development", "Cross-Platform App Development", "Hybrid App Development", "AI-Powered Mobile Application Development"],
//     routeName: "mobile-app-development-services"
//   },
//   {
//     title: "Website ", subTitle: "Development", description: "Elevate your online presence with our professional website development services. we create fast, secure, and scalable websites tailored to your business needs.", icon: WebDevIcon, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887703/Website_Development_fdczid.jpg",
//     points: ["Custom Website Development", "E-Commerce Website Development", "WordPress Development", "Responsive Web Design", "SEO-Optimized Websites", "Mobile-Optimized Websites", "Web App Development"],
//     routeName: "website-development-services"
//   },
//   {
//     title: "Custom Software", subTitle: "Development", description: "We specialize in custom software development to meet the unique demands of your business. Whether you're looking for enterprise-grade software or cutting-edge AI-powered solutions, we bring your vision to life.", icon: CSD, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751956237/Custom_Software_Development_qqrsew.jpg",
//     points: ["Tailored Software Solutions", "Enterprise Software Development", "AI-Powered Software Solutions", "Big Data Software Development", "Cross-Platform Software Development", "Industry-Specific Solutions"],
//     routeName: "custom-software-development-services"
//   },
//   {
//     title: "BlockChain", subTitle: "Development", description: "From custom blockchain app development to creating secure and scalable decentralized applications (dApps), we deliver innovative solutions tailored to your needs.", icon: blockChain, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751957295/Our_services_banner_images_mhn0rc.jpg",
//     points: ["Custom Blockchain Solutions", "Decentralized Applications (dApps)", 'Smart Contract Development', "Blockchain Integration", "Private and Public Blockchain Development", "Cryptocurrency Development", "Blockchain for Supply Chain Management", "Token Development"],
//     routeName: "blockchain-solution-development-services"
//   },
//   // {
//   //   title: "Cybersecurity", subTitle: "Services", description: "We offer comprehensive cybersecurity services to protect your data, networks, and systems from potential breaches and attacks.", icon: CyberSecurity, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751833762/AdobeStock_556551385_vgiz3r.jpg",
//   //   points: ["Network Security", "Endpoint Protection", "Threat Detection and Response", "Compliance and Risk Management", "Security Audits and Assessments"],
//   //   routeName: "cybersecurity-services"
//   // },
//   {
//     title: "Digital Marketing", subTitle: "Services", description: "We offer a full suite of digital marketing solutions designed to enhance your brand's visibility and drive targeted traffic. Our expertise encompasses SEO services, social media marketing, content marketing, PPC advertising, and email marketing, ensuring a holistic approach to your online growth.", icon: DigitalMarketing, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887702/Digital_Marketting_bongzc.jpg",
//     points: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Marketing", "Pay-Per-Click (PPC) Advertising", "Email Marketing", "SEM"],
//     routeName: "digital-marketing-solution-services"
//   },
//   {
//     title: "IT Staff Augmentation", subTitle: "Services", description: "We offer flexible IT staff augmentation services to help you meet your project goals without the long-term commitment of hiring full-time employees.", icon: Staff, bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887705/Staff-Agumentation_Services_zrds8j.jpg",
//     points: ["Scalable IT Staffing Solutions", "Short-term/Contract Engagement", "Long Term Engagement Model", "Cost-Effective", "Ready to  Deployment"],
//     routeName: "it-staff-augmentation-services"
//   },
// ]

// function OurServicesComponent() {
//   const swiperRef = useRef<SwiperCore | null>(null);
//   const router = useRouter()
//   return (
//     <div className="w-100">
//       <div className='d-flex flex-column text-center'>
//         <h1 data-aos="fade-up" className='our-services-title mt-5'>Our Services</h1>
//       </div>
//       <div className='d-flex' data-aos="fade-up">
//         <Swiper
//           className="swiper swiper-container"
//           modules={[Navigation, Pagination, FreeMode]}
//           slidesPerView={3}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             320: { slidesPerView: 1.1, spaceBetween: 20 },
//             576: { slidesPerView: 1.1, spaceBetween: 15 },
//             768: { slidesPerView: 2.1, spaceBetween: 20 },
//             1024: { slidesPerView: 2.1, spaceBetween: 30 },
//             1440: { slidesPerView: 3.1, spaceBetween: 30 },
//             2560: { slidesPerView: 3.1, spaceBetween: 30 },
//           }}
//           loop={false}
//           freeMode={true}
//         >
//           {data.map((item, index) => (
//             <SwiperSlide key={item.title + index} className={`d-flex justify-content-center`}>
//               <div className="animatedcard card-custom-shadow shadow-lg"
//                 onClick={() => { router.push(`/services/${item?.routeName}`) }}
//                 style={{
//                   backgroundImage: `linear-gradient(10deg, rgba(0, 0, 0, 0.3) 30%, rgba(30, 35, 100, 0.95) 90%), url(${item.bg})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   opacity: 0.4, // Change this value to control background opacity
//                   zIndex: 0,
//                 }}
//               >
//                 <div className="animated-card-content">
//                   <div className="animated-card-header">
//                     <div>
//                       <h2>{item.title}</h2>
//                       <h2>{item.subTitle}</h2>
//                     </div>
//                     <Image
//                       src={item.icon.src}
//                       width={45}
//                       height={45}
//                       alt={item?.title} />
//                   </div>
//                   <div className="animated-line my-4"></div>
//                   <p>{item.description}</p>
//                 </div>
//                 <div>
//                   <div className="animated-card-extra">
//                     <ul>
//                       {item?.points?.map((point) => (
//                         <li key={point}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="animated-circle-view" >
//                     <div className="animated-circle-icon">
//                       <div className="animated-circle-border"></div>
//                       <svg viewBox="0 0 24 24">
//                         <path d="M7 17L17 7M7 7h10v10" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       {/* <div className="w-full flex justify-center">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
//     {data.map((item, index) => (
//       <div
//         key={index}
//         className="animatedcard card-custom-shadow shadow-lg rounded-xl h-[450px] w-full flex flex-col justify-end p-6 text-white overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(10deg, rgba(0, 0, 0, 0.5) 30%, rgba(30, 35, 100, 0.95) 90%), url(${item.bg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="animated-card-content relative z-10">
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold">{item.title}</h2>
//               <h2 className="text-xl font-medium">{item.subTitle}</h2>
//             </div>
//             <Image
//               src={item.icon}
//               width={45}
//               height={45}
//               alt={item?.title}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="h-[2px] w-1/4 bg-white/50 my-4" />
//           <p className="text-sm">{item.description}</p>
//           <ul className="text-sm mt-4 space-y-1">
//             {item?.points?.slice(0, 3).map((point, i) => (
//               <li key={i}>• {point}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     ))}
//   </div>
//       </div> */}




//       <div className="d-flex position-relative mb-5">
//         <div className="d-flex justify-content-center align-items-center w-100">
//           <ButtonWithIcon btnText={`Explore`} onClick={() => { router.push('/services') }} />
//         </div>
//         <div className="custom-navigation-btn">
//           <button
//             className="custom-prev-btn text-white p-2"
//             onClick={() => swiperRef.current?.slidePrev()}
//           >
//             <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0.777448 11.126L10.7457 1.15784C10.9763 0.927123 11.284 0.800003 11.6122 0.800003C11.9403 0.800003 12.2482 0.927123 12.4788 1.15784L13.2128 1.89172C13.6905 2.36996 13.6905 3.14724 13.2128 3.62478L4.84221 11.9954L13.222 20.3752C13.4526 20.6059 13.58 20.9135 13.58 21.2415C13.58 21.5698 13.4526 21.8776 13.222 22.1084L12.488 22.8422C12.2573 23.0729 11.9497 23.2 11.6216 23.2C11.2934 23.2 10.9855 23.0729 10.755 22.8422L0.777448 12.8649C0.546308 12.6335 0.419469 12.3244 0.420169 11.9959C0.419469 11.6661 0.546308 11.3573 0.777448 11.126Z" fill="white" />
//             </svg>
//           </button>
//           <button
//             className="custom-next-btn bg-gray-800 text-white p-2 ml-2"
//             onClick={() => swiperRef.current?.slideNext()}
//           >
//             <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M13.2226 11.126L3.25427 1.15784C3.02369 0.927123 2.71597 0.800003 2.38781 0.800003C2.05965 0.800003 1.75179 0.927123 1.52121 1.15784L0.787192 1.89172C0.309512 2.36996 0.309512 3.14724 0.787192 3.62478L9.15779 11.9954L0.777952 20.3752C0.547372 20.6059 0.419971 20.9135 0.419971 21.2415C0.419971 21.5698 0.547372 21.8776 0.777952 22.1084L1.51197 22.8422C1.74269 23.0729 2.05027 23.2 2.37843 23.2C2.70659 23.2 3.01445 23.0729 3.24503 22.8422L13.2226 12.8649C13.4537 12.6335 13.5805 12.3244 13.5798 11.9959C13.5805 11.6661 13.4537 11.3573 13.2226 11.126Z" fill="white" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default OurServicesComponent;




"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AIMLIcon from "../../../public/assets/images/AI-ML.png";
import WebDevIcon from "../../../public/assets/images/WebDev.png";
import MobileDev from "../../../public/assets/images/mobileDev.png";
import CSD from "../../../public/assets/images/CSD.png";
import blockChain from "../../../public/assets/images/blockchain.png";
import DigitalMarketing from "../../../public/assets/images/digitalMarketing.png";
import Staff from "../../../public/assets/images/staff.png";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import "./slider.css"; // keep your existing card styles/animations

const data = [
  {
    title: "AI/ML Project",
    subTitle: "Development",
    description:
      "Revolutionize your operations with our AI-driven projects and artificial intelligence software solutions.",
    icon: AIMLIcon,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887702/AI-ML_development_thypt5.jpg",
    points: [
      "AI-Agents",
      "Generative AI (Gen AI)",
      "AI Consultation",
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Recommendation Systems",
      "Predictive Analysis",
    ],
    routeName: "ai-machine-learning-development-services",
  },
  {
    title: "Mobile Application",
    subTitle: "Development",
    description:
      "Custom mobile app development for iOS, Android, and cross-platform solutions.",
    icon: MobileDev,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887703/Mobile_Application_Devel_opment_t2btno.jpg",
    points: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform",
      "Hybrid Apps",
      "AI-Powered Apps",
    ],
    routeName: "mobile-app-development-services",
  },
  {
    title: "Website ",
    subTitle: "Development",
    description:
      "Fast, secure, and scalable websites tailored to your business needs.",
    icon: WebDevIcon,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887703/Website_Development_fdczid.jpg",
    points: [
      "Custom Websites",
      "E-Commerce",
      "WordPress",
      "Responsive Design",
      "SEO-Optimized",
    ],
    routeName: "website-development-services",
  },
  {
    title: "Custom Software",
    subTitle: "Development",
    description:
      "Enterprise-grade and AI-powered custom software to match your workflow.",
    icon: CSD,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751956237/Custom_Software_Development_qqrsew.jpg",
    points: [
      "Tailored Solutions",
      "Enterprise Software",
      "AI-Powered Software",
      "Cross-Platform",
    ],
    routeName: "custom-software-development-services",
  },
  {
    title: "BlockChain",
    subTitle: "Development",
    description:
      "Secure and scalable blockchain solutions and decentralized applications.",
    icon: blockChain,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751957295/Our_services_banner_images_mhn0rc.jpg",
    points: [
      "Apps",
      "Smart Contracts",
      "Blockchain Integration",
      "Token Development",
    ],
    routeName: "blockchain-solution-development-services",
  },
  {
    title: "Digital Marketing",
    subTitle: "Services",
    description:
      "Full-funnel digital marketing to grow your brand and revenue.",
    icon: DigitalMarketing,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887702/Digital_Marketting_bongzc.jpg",
    points: ["SEO", "Social Media", "Content Marketing", "PPC", "Email"],
    routeName: "digital-marketing-solution-services",
  },
  {
    title: "IT Staff Augmentation",
    subTitle: "Services",
    description:
      "Flexible staffing to meet project goals without long-term hiring.",
    icon: Staff,
    bg: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751887705/Staff-Agumentation_Services_zrds8j.jpg",
    points: [
      "Scalable Teams",
      "Short-term/Contract",
      "Long-Term Engagement",
      "Cost-Effective",
    ],
    routeName: "it-staff-augmentation-services",
  },
];

function OurServicesComponent() {
  const router = useRouter();

  return (
    <div className="w-100">
      <div className="d-flex flex-column text-center">
        <h1 data-aos="fade-up" className="our-services-title mt-5 mb-5">
          Our Services
        </h1>
      </div>

      {/* Bootstrap Grid: 3 cards per row on lg+ */}
      <div className="container">
        <div className="row g-4 justify-content-center" data-aos="fade-up">
          {data.map((item, index) => (
            <div
              key={item.title + index}
              className="col-12 col-md-6 col-lg-4 d-flex "
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => router.push(`/services/${item.routeName}`)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  router.push(`/services/${item.routeName}`)
                }
                className="animatedcard card-custom-shadow shadow-lg rounded-2 text-white w-100 h-100 d-flex flex-column justify-content-between p-4"
                style={{
                  backgroundImage: `linear-gradient(10deg, rgba(0,0,0,0.45) 30%, rgba(30,35,100,0.95) 90%), url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                  minHeight: "300px",
                  maxHeight: "400px"
                }}
              >
                <div className="animated-card-content">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h2 className="h4 mb-1 ">{item.title}</h2>
                      <h3 className="h5 fw-normal m-0 ">{item.subTitle}</h3>
                    </div>
                    <Image
                      src={item.icon}
                      width={45}
                      height={45}
                      alt={item.title}
                    />
                  </div>
                  <div
                    className="my-3"
                    style={{ height: 2, width: "25%", background: "rgba(255,255,255,0.5)" }}
                  />
                  <p className="mb-0 small">{item.description}</p>
                </div>

                {/* Points (show top 4) */}
                <div className="animated-card-extra mt-3">
                  <ul className="mb-0 small ps-3">
                    {item.points.slice(0, 4).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="d-flex justify-content-center my-5">
          <ButtonWithIcon
            btnText="Explore"
            onClick={() => router.push("/services")}
          />
        </div>
      </div>
    </div>
  );
}

export default OurServicesComponent;

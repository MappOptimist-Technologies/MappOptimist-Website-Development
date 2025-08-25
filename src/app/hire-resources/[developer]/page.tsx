export async function generateStaticParams() {
  const developerSlugs = [
    "frontend-developer",
    "backend-developer",
    "fullstack-developer",
    "ui-ux-designer",
    "devops-engineer"
    // add all your developer slugs here
  ];

  return developerSlugs.map(developer => ({ developer }));
}

import React from 'react';
import Navbar from '@/components/header/navbar';
import Image from "next/image";
import Footer from '@/components/Home/footer';
import SocialButton from '@/components/Buttons/SocialButtons';
import scrollGIF from "../../../../public/assets/images/scrollGIF.gif";
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import CompanyListSliderComponent from '@/components/Home/companySlider';
import careerPt1 from "../../../../public/assets/images/careerPt1.png";
import careerPt2 from "../../../../public/assets/images/careerPt2.png";
import careerPt3 from "../../../../public/assets/images/careerPt3.png";
import careerPt4 from "../../../../public/assets/images/careerPt4.png";
import careerPt5 from "../../../../public/assets/images/careerPt5.png";
import careerPt6 from "../../../../public/assets/images/careerPt6.png";
import monthly from "../../../../public/assets/images/monthly.jpg";
import quarterly from "../../../../public/assets/images/quarterly.jpg";
import yearly from "../../../../public/assets/images/yearly.jpg";
import OurExperienceComponent from '@/components/Home/ourExperience';
import OurExperienceTwo from "@/components/Home/ourExperienceTwo";
import WhyMappoptimistComponent from '@/components/Home/whyMappoptimistics';

const data = [
  { title: "Junior Developers", description: `Experience: 1-3 Years\nIdeal for basic application development and task-specific coding. Skilled in understanding client requirements and delivering efficient solutions.`, icon: careerPt1 },
  { title: "Mid-Level Developers", description: "Experience: 3-5 Years\nProficient in handling complex tasks and implementing advanced features. Strong understanding of industry best practices and scalability solutions.", icon: careerPt2 },
  { title: "Senior Developers", description: "Experience: 5+ Years\nHighly skilled in advanced Android technologies, ensuring robust and secure applications. Capable of providing leadership and mentoring other team members during the project lifecycle.", icon: careerPt3 },
  { title: "Dedicated Project Managers", description: "Oversee the entire development process for seamless execution. Maintain clear communication and ensure timely delivery.", icon: careerPt4 },
  { title: "UI/UX Designers", description: "Craft visually appealing and user-friendly designs tailored to your brand. Ensure a seamless user experience that enhances engagement and satisfaction.", icon: careerPt5 },
  { title: "Web Designers", description: "Specializing in creating responsive and adaptive designs for web integration. Focus on futuristic development trends to deliver cutting-edge solutions.", icon: careerPt6 },
  { title: "Testers (Quality Assurance)", description: "Deliver bug-free applications by rigorously testing functionality and performance. Ensure the final product meets the highest quality standards.", icon: careerPt6 },
]

const costData = [
  { title: "Monthly", price: "$ 2890.00", description: "Hire dedicated developers on a monthly basis to build a reliable and budget-friendly long-term relationship. Our developers seamlessly integrate into your team to meet your evolving project demands.\nEvery project is backed by a signed NDA to ensure confidentiality.", icon: monthly },
  { title: "Quarterly", price: "$ 7999.00", description: "Opt for our quarterly hiring model to secure expert Android development services with consistent support and guidance for your dynamic requirements.\nEvery project is backed by a signed NDA to ensure confidentiality.", icon: quarterly },
  { title: "Yearly", price: "$ 23999.00", description: "For long-term projects, hire our dedicated Android developers to achieve scalable and budget-conscious solutions that drive results.\nEvery project is backed by a signed NDA to ensure confidentiality.", icon: yearly },
]

const whyPoints = [
  "Flexible Engagement Models: Choose from hourly, monthly, or project-based hiring.",
  "Agile Methodology: Rapid, iterative development to adapt to changing requirements.",
  "NDA for Confidentiality: Every project is protected by a signed NDA.",
  "Cost-Effective Solutions: Competitive pricing ensures you get maximum value.",
  "24/7 Support: Dedicated support throughout the project lifecycle and beyond."
]

const whyTitle = "Why Choose MappOptimist Technologies?";
const quoteTitle = "Let's Build Something Amazing Together!";
const quoteDescription = `Whether you need a simple app or a complex solution, MappOptimist Technologies is your trusted partner. Hire developers who deliver excellence and turn your vision into reality.\nContact us today and take the first step toward innovation!`
const quoteBtnText = "Hire Now"

export const metadata = {
  title: "Hire MappOptimist Technologies Resources",
  description: "Flexible Engagement Models: Choose from hourly, monthly, or project-based hiring. Agile Methodology: Rapid, iterative development to adapt to changing requirements. NDA for Confidentiality: Every project is protected by a signed NDA. Cost-Effective Solutions: Competitive pricing ensures you get maximum value. 24/7 Support: Dedicated support throughout the project lifecycle and beyond.",
  openGraph: {
    title: "Hire MappOptimist Technologies Resources",
    description:
      "Flexible Engagement Models: Choose from hourly, monthly, or project-based hiring. Agile Methodology: Rapid, iterative development to adapt to changing requirements. NDA for Confidentiality: Every project is protected by a signed NDA. Cost-Effective Solutions: Competitive pricing ensures you get maximum value. 24/7 Support: Dedicated support throughout the project lifecycle and beyond.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/hire-resources/data-engineering`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752554893/Contact_us_cover_image_ktiqtu.png",
        width: 1200,
        height: 630,
        alt: "Hire MappOptimist Technologies Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/hire-resources/data-engineering`,
  },
};

export default function HiringPage() {

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className='hiring-container'>
          <div className='hiring-overlay' />
          <Navbar />
          <div className='hiring-content-container'>
            <h1>Hire Mobile App developers</h1>
            <h6>Hire app developers team to create top-notch and user-friendly app development solutions for your project requirements.</h6>
            <div className='hiring-info-container'>
              <div className='hiring-info'>
                <h1>12+</h1>
                <h6>Years of Experience</h6>
              </div>
              <div className='hiring-info'>
                <h1>1200+</h1>
                <h6>Developers</h6>
              </div>
              <div className='hiring-info'>
                <h1>2700+</h1>
                <h6>Clients</h6>
              </div>
            </div>
            <div className='hiring-hourly-rate-container'>
              <div className='hiring-hourly-rate'>
                <h3>Hourly : $23.00/hour </h3>
              </div>
              <div>
                <ButtonWithIcon btnText="Hire now" />
              </div>
            </div>
          </div>
          <div className="container" style={{ zIndex: 2 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "45px 0px",
                zIndex: 2,
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <SocialButton icon={"linkedIn"} width={20} height={20} />
                <SocialButton icon={"youtube"} width={18} />
                <SocialButton icon={"instagram"} />
              </div>
              <div className="d-flex gap-3">
                <h5 className="text-white">Scroll</h5>
                <Image src={scrollGIF}
                  alt="Scroll GIF"
                  width={24}
                  height={24} />
              </div>
            </div>
          </div>
        </div>
        <CompanyListSliderComponent />
        <section className="container mt-0">
          <div className='d-flex flex-column align-items-center justify-content-center text-center hiring-content'>
            <h1 className='hiring-content-h1'>Hire Top Tech Talent at MappOptimist Technologies</h1>
            <h3 className='hiring-content-h3'>
              Elevate your digital landscape with our expert front-end developers at MappOptimist Technologies. We bring a dynamic combination of creativity, technical expertise, and innovation to break the boundaries and maximize your project&apos;s potential. Our developers are ready to deploy cutting-edge solutions with a wide range of technologies and frameworks to deliver tailored, high-performance web applications.
            </h3>
            <div className='d-flex flex-column align-items-center justify-content-center mt-2'>
              <ButtonWithIcon btnText="Get a quote" />
            </div>
          </div>
        </section>
        <section className="container my-5">
          <div className='mb-5'>
            <h1 className="career-fresher-title">Approximate Cost to Hire Dedicated Android Developers from MappOptimist Technologies</h1>
            <h3 className='hiring-content-h3 text-center'>
              At MappOptimist Technologies, we offer highly skilled and experienced Android developers tailored to your project needs. Our flexible hiring models ensure cost-effective solutions with a commitment to quality and confidentiality.
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 justify-content-center pb-5">
            {costData.map((item) => (
              <div key={item.title} className="career-unique-col">
                <div className="career-unique-card">
                  <Image src={item.icon} className="price-card-img-icon" alt={`${item.title} image`} />
                  <div className="price-unique-body">
                    <h5 style={{ whiteSpace: 'pre-line' }} className="price-title">{item.title}</h5>
                    <h6 className="price-monthly">{item.price}</h6>
                    <p className="price-description" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    <div className='hire-now-btn mt-2'>
                      <span>Hire now</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <OurExperienceTwo />
        <section className="container mt-0 mb-5">
          <div className='d-flex flex-column align-items-center justify-content-center text-center hiring-content'>
            <h1 className='hiring-content-h1'>Hire Android Developers to Empower Your Business with MappOptimist Technologies</h1>
            <h3 className='hiring-content-h3 text-center'>
              Accelerate your business growth with our expert Android developers, known for delivering high-quality, scalable, and innovative mobile solutions. Our team combines technical expertise with a client-first approach to ensure your project&apos;s success.
            </h3>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th className="bg-table-blue py-4 thead-th fw-500 text-center align-middle">Developer</th>
                  <th className="bg-custom-1 py-4 thead-th fw-500 text-center align-middle">Junior Developer</th>
                  <th className="bg-custom-2 py-4 thead-th fw-500 text-center align-middle">Mid-Level Developer</th>
                  <th className="bg-custom-3 py-4 thead-th fw-500 text-center align-middle">Senior Level Developer</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Charges (Per Hour)</td><td className="py-4 thead-th fw-400 text-center align-middle"></td><td className="py-4 thead-th fw-400 text-center align-middle"></td><td className="py-4 thead-th fw-400 text-center align-middle"></td></tr>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Experience (in years)</td><td className="py-4 thead-th fw-400 text-center align-middle">2-3</td><td className="py-4 thead-th fw-400 text-center align-middle">4-6</td><td className="py-4 thead-th fw-400 text-center align-middle">6+</td></tr>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Development Methodology</td><td className="py-4 thead-th fw-400 text-center align-middle">Agile</td><td className="py-4 thead-th fw-400 text-center align-middle">Agile</td><td className="py-4 thead-th fw-400 text-center align-middle">Agile</td></tr>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Dedicated Project Manager</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td></tr>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Time Zone Flexibility</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td></tr>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Quality Guarantee</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td><td className="py-4 thead-th fw-400 text-center align-middle">Yes</td></tr>
                <tr><td className="bg-table-blue py-4 thead-th fw-400 text-center align-middle">Working Hours( Per Week )</td><td className="py-4 thead-th fw-400 text-center align-middle">50 Hours</td><td className="py-4 thead-th fw-400 text-center align-middle">50 Hours</td><td className="py-4 thead-th fw-400 text-center align-middle">50 Hours</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="container my-5">
          <div className='mb-5 pt-5'>
            <h1 className="hiring-content-h1 text-center">Leverage World-Class Talent</h1>
            <h6 className="hiring-content-h3 text-center">Our Android developers are experts in their fields, equipped with dynamic problem-solving skills and the ability to deliver innovative solutions that stand out in the competitive market.</h6>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 justify-content-center pb-5">
            {data.map((item) => (
              <div key={item.title} className="career-unique-col">
                <div className="career-unique-card">
                  <Image src={item.icon} className="career-unique-card-img-icon" alt={item.title} width={64} height={64} />
                  <div className="career-unique-body">
                    <h5 className="career-unique-title">{item.title}</h5>
                    <p className="career-unique-text" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-0">
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h1 className='hiring-content-h1 px-3'>Create Outstanding On-Demand Teams</h1>
            <h3 className='hiring-content-h3 text-center px-3'>
              Get the Team or Team Member you want for your project.
            </h3>
            <div className='d-flex flex-column align-items-center justify-content-center mt-5 hire-cover-img'
              style={{ aspectRatio: '4 / 3', position: 'relative' }}>
              <Image layout='fill'
                src={"https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752776204/Hiring_process_kmdl2x.png"}
                alt="Create Outstanding On-Demand Teams with MappOptimist Technologies | Hire Dedicated Developers"
                objectFit='cover'
              />
            </div>
          </div>
        </section>
        <OurExperienceComponent />
        <WhyMappoptimistComponent
          whyPoints={whyPoints}
          whyTitle={whyTitle}
          quoteTitle={quoteTitle}
          quoteDescription={quoteDescription}
          quoteBtnText={quoteBtnText}
        />
        <div className="common-footer-container mt-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

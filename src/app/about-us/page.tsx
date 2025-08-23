import React from "react";
import Image from "next/image"; // ✅ Use Next.js Image
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/header/navbar";
import WhoWeAre from "./WhoWeAre";
import Who1 from "../../assests/Who1.png";
import Who2 from "../../assests/who2.png";
import CoreValues from "./coreValues";
import OurMission from "./ourMissionVision";
import "./index.css";
import QuoteComponent from "@/components/Home/getQuote";
import Footer from "@/components/Home/footer";
import OurServicesComponent from "@/components/Home/ourServices";
import IndustrySpecificExpertiseComponent from "@/components/Home/industrySpecificExpertise";
import CompanyListSliderComponent from "@/components/Home/companySlider";
import OurBlogComponent from "@/components/Home/OurBlogs";

export const metadata = {
  title: "Who we are",
  description: "MappOptimist: Your partner in digital transformation. MappOptimist Technologies is a leading IT solutions provider specializing in Artificial Intelligence (AI) project development, AI-powered iOS Application, and Android application development, web application development, website development, custom WordPress development, blockchain development, cybersecurity solutions, digital marketing solutions, and IT staff augmentation services. Our team of experts is dedicated to delivering innovative and customized solutions that drive business success.",
  openGraph: {
    title: "Who we are",
    description:
      "MappOptimist: Your partner in digital transformation. MappOptimist Technologies is a leading IT solutions provider specializing in Artificial Intelligence (AI) project development, AI-powered iOS Application, and Android application development, web application development, website development, custom WordPress development, blockchain development, cybersecurity solutions, digital marketing solutions, and IT staff augmentation services. Our team of experts is dedicated to delivering innovative and customized solutions that drive business success.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/who-we-are`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751961079/Let_s_creat_together_vr0lbz.jpg",
        width: 1200,
        height: 630,
        alt: "Who we are | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/who-we-are`,
  },
};

export default function Home() {

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className="background-image"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751961079/Let_s_creat_together_vr0lbz.jpg")`,
            backgroundSize: "cover",
            height: "75vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "75vh",
              zIndex: 1,
            }}
          ></div>
          <Navbar />
          <div data-aos="fade-up" style={{ margin: "auto", display: 'flex', flexDirection: 'column', alignItems: "center" }} >
            <p className='text-white wo-title' >Who we are</p>
          </div>
        </div>
        {/* Content Section */}
        <section className="container">
          <div className="row text-container my-5" data-aos="fade-up">
            <div className="col-md-6">
              <h2 className="text-black mb-3 wo-title-text">
                MappOptimist: <br /> Your partner in digital transformation!
              </h2>
            </div>
            <div className="col-md-6 my-2">
              <p className="text-black wo-paragraph-text">
                MappOptimist Technologies is a leading IT solutions provider specializing in Artificial Intelligence (AI) project development, AI-powered iOS Application, and Android application development, web application development, website development, custom WordPress development, blockchain development, cybersecurity solutions, digital marketing solutions, and IT staff augmentation services. Our team of experts is dedicated to delivering innovative and customized solutions that drive business success.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Image data-aos="fade-right"
                src={Who1}
                alt="Teamwork"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <Image data-aos="fade-left"
                src={Who2}
                alt="Reading a Magazine"
                className="img-fluid responsive-img"
              />
            </div>
          </div>
          <div className="text-center my-5" data-aos="zoom-in-up">
            <p className="wo-quote-text" >
              “Our only Aim, <span className="wo-quote-span-text">Happy Clients</span>”
            </p>
          </div>
        </section>
        <WhoWeAre />
        <CoreValues />
        <OurMission />
        <div className='our-services-contaner'>
          <div className='our-services-content'>
            <OurServicesComponent />
          </div>
        </div>
        <IndustrySpecificExpertiseComponent />
        <CompanyListSliderComponent />
        <OurBlogComponent />
        <QuoteComponent title="Let&apos;s Collaborate and Innovate" description="Together, we can transform your ideas into real-world solutions. Let&apos;s bring your vision to life with creativity, expertise, and a commitment to excellence." btnText="Get a Quote" />
        <div className="common-footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

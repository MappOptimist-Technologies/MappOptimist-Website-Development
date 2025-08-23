'use client';
import React from 'react';
import Navbar from '@/components/header/navbar';
import Image from "next/image";
import Footer from '@/components/Home/footer';
import SocialButton from '@/components/Buttons/SocialButtons';
import scrollGIF from "../../../public/assets/images/scrollGIF.gif";
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import CompanyListSliderComponent from '@/components/Home/companySlider';
import SpecificServiceSliderComponent from '@/components/Home/specificServiceSlider';
import OurServicesComponent from '@/components/Home/ourServices';
import ServiceIndustriesSliderComponent from '@/components/Home/serviceIndustriesSlider';
import WhyMappoptimistComponent from '@/components/Home/whyMappoptimistics';
import { TechnologiesDataType } from '@/app/services/ai-machine-learning-development-services/page';

export default function ServicesCommonComponents({ specificServiceSlider, technologiesData, industriesData, whyPoints,
  mainTitle, mainDescription, title, description, specificServiceSliderTitle, technologyTitle, technologySubTitle,
  serviceIndustriesSliderTitle, whyTitle, quoteTitle, quoteDescription, quoteBtnText, technologyDescription, coverImage,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  displayIndustriesSlider = true }: any) {

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className='service-specifc-container'
          style={{
            backgroundImage: `url(${coverImage})`,
          }}
        >
          <div className='service-specifc-overlay' />
          <Navbar />
          <div className='hiring-content-container'>
            <h1>{mainTitle}</h1>
            <h6>{mainDescription}</h6>
            <div className='hiring-info-container'>
              <div className='hiring-info'>
                <h1>12+</h1>
                <h6>Years of Experience</h6>
              </div>
              <div className='hiring-info'>
                <h1>300+</h1>
                <h6>Developers</h6>
              </div>
              <div className='hiring-info'>
                <h1>97%</h1>
                <h6>Success ratio</h6>
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
                  alt="icon4"
                  width={24}
                  height={24} />
              </div>
            </div>
          </div>
        </div>
        <CompanyListSliderComponent />
        <section className="container mt-0">
          <div className='d-flex flex-column align-items-center justify-content-center text-center service-specifc-content'>
            <h1 data-aos="fade-up">{title}</h1>
            <h3 data-aos="fade-up" style={{ whiteSpace: 'pre-line' }}>
              {description}
            </h3>
          </div>
        </section>
        <section className="mt-0 mb-5 ">
          <SpecificServiceSliderComponent
            data={specificServiceSlider}
            title={specificServiceSliderTitle} />
        </section>
        <section className="mt-0 technology-section">
          <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h1 data-aos="fade-up" className='technology-title'>{technologyTitle}</h1>
            {technologySubTitle ? <h3 className='technology-subtitle my-5 font-weight-bold' data-aos="fade-up" style={{ whiteSpace: 'pre-line' }}>
              {technologySubTitle}
            </h3> : null}
            {technologyDescription ? <h3 className='technology-subtitle mb-5' data-aos="fade-up" style={{ whiteSpace: 'pre-line' }}>
              {technologyDescription}
            </h3> : null}
          </div>
          <div className='d-flex flex-column mt-5 gap-5 w-100'>
            {technologiesData?.map((item: TechnologiesDataType) => (
              <div data-aos="fade-up" className='technology-content' key={item.title}>
                <div className='technology-title-container'>
                  <div className='technology-title-bg'>
                    {item?.title}
                  </div>
                </div>
                <div className='d-flex flex-wrap gap-4 mt-3 technology-items-container'>
                  {item?.technologies?.map((item, index) => (
                    <div key={item + index} className="technology-card">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className='our-services-contaner'>
          <div className='our-services-content'>
            <OurServicesComponent />
          </div>
        </div>
        {displayIndustriesSlider ? <section className="mt-0 mb-5 ">
          <ServiceIndustriesSliderComponent
            data={industriesData}
            title={serviceIndustriesSliderTitle} />
        </section> : null}
        <WhyMappoptimistComponent
          whyPoints={whyPoints}
          whyTitle={whyTitle}
          quoteTitle={quoteTitle}
          quoteDescription={quoteDescription}
          quoteBtnText={quoteBtnText}
        />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

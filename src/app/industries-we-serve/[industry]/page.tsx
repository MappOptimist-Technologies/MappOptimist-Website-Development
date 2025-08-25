export async function generateStaticParams() {
  const industriesRoutes = [
    "retail-e-commerce","healthcare","finance-banking","logistics-transportation",
    "fashion-apparel","agriculture","education","technology-startups",
    "qsr-fb","tax-legal","government-public-sector","business-process-automation",
    "ai-in-construction-real-estate"
  ];

  return industriesRoutes.map(industry => ({ industry }));
}

import React from 'react';
import Navbar from '@/components/header/navbar';
import Image from "next/image";
import Footer from '@/components/Home/footer';
import SocialButton from '@/components/Buttons/SocialButtons';
import scrollGIF from "../../../../public/assets/images/scrollGIF.gif";
import ButtonWithIcon from '@/components/Buttons/ButtonWithIcon';
import { AgricultureData, BusinessProcessAutomationData, ConstructionRealEstateData, EducationData, FashionApparelData, FinanceBankingData, GovernmentPublicSectorData, HealthcareData, LogisticsTransportationData, QSRFBData, RetailEcommerceData, TaxLegalData, TechnologyStartupData } from '@/constants';
import OurServicesComponent from '@/components/Home/ourServices';
import QuoteComponent from '@/components/Home/getQuote';
import ClientsReviewComponent from '@/components/Home/clientsReview';
import { TechnologiesDataType } from '@/app/services/ai-machine-learning-development-services/page';
import OurBlogComponent from '@/components/Home/OurBlogs';
import WhyMappoptimistComponent from '@/components/Home/whyMappoptimistics';
import IndustriesForm from '@/components/Home/industriesForm';

interface IndustriesPageProps {
  params: Promise<{ industry: string }>;
}

const industriesList = {
  "retail-e-commerce": RetailEcommerceData,
  "healthcare": HealthcareData,
  "finance-banking": FinanceBankingData,
  "logistics-transportation": LogisticsTransportationData,
  "fashion-apparel": FashionApparelData,
  "agriculture": AgricultureData,
  "education": EducationData,
  "technology-startups": TechnologyStartupData,
  "qsr-fb": QSRFBData,
  "tax-legal": TaxLegalData,
  "government-public-sector": GovernmentPublicSectorData,
  "business-process-automation": BusinessProcessAutomationData,
  "ai-in-construction-real-estate": ConstructionRealEstateData,
  // "ai-powered-finTech-software-solutions": AIEmergingTechnologiesData,
  // "political": PoliticalData,
  // "ai-powered-advertising-marketing-tech": AdMerTechData
}

// Dynamic Metadata Function
export async function generateMetadata({ params }: IndustriesPageProps) {
  const { industry } = await params || {};
  const industriesData = industriesList[industry as keyof typeof industriesList] || industriesList["fashion-apparel"];
  return {
    title: industriesData?.landingTitle,
    description: industriesData?.landingDescription + " " + industriesData?.title + " " + industriesData?.description,
    openGraph: {
      title: industriesData?.landingTitle,
      description:
        industriesData?.landingDescription + " " + industriesData?.title + " " + industriesData?.description,
      url: `${process.env.NEXT_WEBSITE_BASE_URL}/industries-we-serve/${industry}`,
      siteName: "MappOptimist Technologies",
      images: [
        {
          url: (industriesData as { coverImage: string }).coverImage,
          width: 1200,
          height: 630,
          alt: industriesData?.landingTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/industries-we-serve/${industry}`,
    },
  };
}

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const { industry } = await params || "";

  const industriesData = industriesList[industry as keyof typeof industriesList] || industriesList["fashion-apparel"];

  return (
    <div className="bg-white">
      <div className="w-100 position-relative">
        <div className='industries-container'
          style={{
            backgroundImage: `url(${(industriesData as { coverImage: string }).coverImage})`,
          }}
        >
          <div className='industries-overlay' />
          <Navbar />
          <div className='industries-content-container'>
            <h1>{industriesData?.landingTitle}</h1>
            <h6 style={{ whiteSpace: 'pre-line' }}>{industriesData?.landingDescription}</h6>
            <div className='industries-hourly-rate-container'>
              <div className='industries-hourly-rate'>
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
                  alt="Scroll gif"
                  width={24}
                  height={24} />
              </div>
            </div>
          </div>
        </div>
        <section className="industries-bg-contaner">
          <div className='container mt-0'>
            <div className='d-flex flex-column align-items-center justify-content-center industries-content'>
              <h1>{industriesData?.title}</h1>
              <h3 style={{ whiteSpace: 'pre-line' }}>{industriesData?.description}</h3>
            </div>
          </div>
        </section>
        <IndustriesForm />
        <section className="industries-list-contaner">
          {industriesData?.list?.map((item, index) => (
            <div key={item?.title} className={`industries-list-bg-image ${index % 2 === 0 ? "align-card-to-left" : ""}`}
              style={{
                backgroundImage: `url(${item?.img})`,
                backgroundSize: 'cover',
              }}
            >
              <div className='industries-list-card shadow-lg'>
                <div className='industries-list-content'>
                  <h1>{item?.title}</h1>
                  <h3 style={{ whiteSpace: 'pre-line' }}>{item?.description}</h3>
                  <ul className="custom-bullets">
                    {item?.points?.map((i, a) => (
                      <li key={i + a} >
                        {i}
                      </li>
                    ))}
                  </ul>
                  {'useCase' in item ? <h3 className='mt-4' style={{ whiteSpace: 'pre-line' }}>{item?.useCase}</h3> : null}
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-0 technology-section">
          <div className='container'>
            <div className='d-flex flex-column align-items-center justify-content-center text-center'>
              <h1 data-aos="fade-up" className='technology-title'>{industriesData?.technology?.title}</h1>
            </div>
            <div className='d-flex flex-column mt-5 gap-5 w-100'>
              {industriesData?.technology?.data?.map((item: TechnologiesDataType) => (
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
          </div>
        </section>
        <div className='our-services-contaner'>
          <div className='our-services-content'>
            <OurServicesComponent />
          </div>
        </div>
        {'whyPoints' in industriesData && 'whyTitle' in industriesData ? <WhyMappoptimistComponent
          whyPoints={'whyPoints' in industriesData ? industriesData?.whyPoints : []}
          whyTitle={'whyTitle' in industriesData ? industriesData?.whyTitle : ""}
          hideQuote={false}
        /> : null}
        <OurBlogComponent />
        <ClientsReviewComponent />
        <QuoteComponent
          className='my-5'
          title={industriesData?.quote?.title}
          description={industriesData?.quote?.description}
          btnText={industriesData?.quote?.btnText} />
        <div className="common-footer-container mt-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import QuoteComponent from "@/components/Home/getQuote";
import CompanyAccomplishmentComponent from "@/components/Home/companyAccomplishment";
import OurExperienceComponent from "@/components/Home/ourExperience";
import AutoCompanySlideComponent from "@/components/Home/autoCompanySlide";
import IndustrySpecificExpertiseComponent from "@/components/Home/industrySpecificExpertise";
import OurBlogComponent from "@/components/Home/OurBlogs";
import OurServicesComponent from "@/components/Home/ourServices";
import ClientsReviewComponent from "@/components/Home/clientsReview";
import CompanyListSliderComponent from "@/components/Home/companySlider";
import PublicPlanProcessComponent from "@/components/Home/PPPSection";
import CompanyOverviewComponent from "@/components/Home/companyOverview";
import LandingComponent from '@/components/Home/landing';
import Footer from "@/components/Home/footer";
import FinalFooter from "@/components/Footer/FinalFooter";

export const metadata = {
  title: "Transforming Businesses with Innovation and Technology",
  description: "Artificial Intelligence (AI), Mobile Application, Website Development, Custom Software, Blockchain Solutions, Digital Marketing, IoT & Embedded Solutions",
  openGraph: {
    title: "Transforming Businesses with Innovation and Technology",
    description:
      "Artificial Intelligence (AI), Mobile Application, Website Development, Custom Software, Blockchain Solutions, Digital Marketing, IoT & Embedded Solutions",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1751961079/Let_s_creat_together_vr0lbz.jpg",
        width: 1200,
        height: 630,
        alt: "MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/`,
  },
};

export default function Home() {

  return (
    <div>
      <LandingComponent />
      <CompanyListSliderComponent />
      <div className='our-services-contaner'>
        <div className='our-services-content'>
          <OurServicesComponent />
        </div>
      </div>
      <AutoCompanySlideComponent />
      <CompanyOverviewComponent />
      <PublicPlanProcessComponent />
      <IndustrySpecificExpertiseComponent />
      <CompanyAccomplishmentComponent />
      <OurExperienceComponent />
      <ClientsReviewComponent />
      {/* <section className="media-coverage-container">
        <MediaCoverageComponent />
      </section> */}x
      <OurBlogComponent />
      {/* <OurResearchComponent />
      <OurPodcastComponent /> */}
      <QuoteComponent />
      <div className="common-footer-container">
        <Footer />
      </div>
      <FinalFooter />
    </div>
  );
}

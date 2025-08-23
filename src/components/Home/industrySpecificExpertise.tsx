"use client"
import { Pagination, Navigation, FreeMode, Mousewheel } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import './slider.css';
import { useRouter } from 'next/navigation';

const data = [
  {
    title: "Retail & E-Commerce",
    description: "Scale up your retail store to meet the growing demand of future consumers",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168943/Retail_and_Ecommerce_ma9ett.jpg",
    route: "/industries-we-serve/retail-e-commerce"
  },
  {
    title: "Healthcare & fitness",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168947/Healthcare_h9rxx8.jpg",
    route: "/industries-we-serve/healthcare"
  },
  {
    title: "Finance & Banking",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168944/Bankinng_and_Finnace_-002_ow5m2f.png",
    route: "/industries-we-serve/finance-banking"
  },
  {
    title: "Logistics & Transportation",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168948/Transpotation_vcvphs.jpg",
    route: "/industries-we-serve/logistics-transportation"
  },
  {
    title: "Fashion & Apparel",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168944/Fashion_Tech_lcu9id.png",
    route: "/industries-we-serve/fashion-apparel"
  },
  {
    title: "Agriculture",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168949/Agriculture_p3hxuo.jpg",
    route: "/industries-we-serve/agriculture"
  },
  {
    title: "Education & E-learning",
    description: "Enhance the learning experience for a global learning through tech driven solutions",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168943/education_srg3ds.png",
    route: "/industries-we-serve/education"
  },
  {
    title: "Technology & Startups",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168944/Fintech_industries_it3xu5.png",
    route: "/industries-we-serve/technology-startups"
  },
  {
    title: "Food & restaurant",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168950/QSR_F_b_1_fuv2un.jpg",
    route: "/industries-we-serve/qsr-fb"
  },
  {
    title: "Tax & Legal",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168946/Legal_and_Laws_fbmvqe.jpg",
    route: "/industries-we-serve/tax-legal"
  },
  {
    title: "Government & Public Sector",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168944/E_governence_hvynfx.jpg",
    route: "/industries-we-serve/government-public-sector"
  },
  {
    title: "Business Process Automation",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168949/Business_and_Automation_tcm5wy.jpg",
    route: "/industries-we-serve/business-process-automation"
  },
  {
    title: "AI in Construction & Real Estate",
    description: "Leveraging smart technologies like AI/ML, IOT and more to empower global health organizations",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752168944/Construction_icajnr.jpg",
    route: "/industries-we-serve/ai-in-construction-real-estate"
  },
]

function IndustrySpecificExpertiseComponent() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const router = useRouter();

  const exploreIndustries = () => {
    router.push("/industries-we-serve");
  }

  const viewIndustry = (route: string) => {
    router.push(route);
  }

  return (
    <div className="industry-specific-expertise-container">
      <div className='d-flex flex-column text-center'>
        <h1 data-aos="fade-up" className='industry-expertise-title'>Industries We serve with Customized Solutions</h1>
        <p data-aos="fade-up" className='industry-expertise-description'>In today&apos;s digital age, our expert IT team delivers tailored digital solutions to businesses across industries worldwide, ensuring their unique needs are met and driving success in a competitive environment.</p>
        <div data-aos="fade-up" className="d-flex mt-3 position-relative">
          <div className="d-flex justify-content-center align-items-center w-100">
            <ButtonWithIcon btnText={`Explore`} onClick={() => { exploreIndustries() }} />
          </div>
          <div className="custom-navigation-btn">
            <button
              className="custom-prev-btn text-white p-2"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.777448 11.126L10.7457 1.15784C10.9763 0.927123 11.284 0.800003 11.6122 0.800003C11.9403 0.800003 12.2482 0.927123 12.4788 1.15784L13.2128 1.89172C13.6905 2.36996 13.6905 3.14724 13.2128 3.62478L4.84221 11.9954L13.222 20.3752C13.4526 20.6059 13.58 20.9135 13.58 21.2415C13.58 21.5698 13.4526 21.8776 13.222 22.1084L12.488 22.8422C12.2573 23.0729 11.9497 23.2 11.6216 23.2C11.2934 23.2 10.9855 23.0729 10.755 22.8422L0.777448 12.8649C0.546308 12.6335 0.419469 12.3244 0.420169 11.9959C0.419469 11.6661 0.546308 11.3573 0.777448 11.126Z" fill="white" />
              </svg>
            </button>
            <button
              className="custom-next-btn bg-gray-800 text-white p-2 ml-2"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2226 11.126L3.25427 1.15784C3.02369 0.927123 2.71597 0.800003 2.38781 0.800003C2.05965 0.800003 1.75179 0.927123 1.52121 1.15784L0.787192 1.89172C0.309512 2.36996 0.309512 3.14724 0.787192 3.62478L9.15779 11.9954L0.777952 20.3752C0.547372 20.6059 0.419971 20.9135 0.419971 21.2415C0.419971 21.5698 0.547372 21.8776 0.777952 22.1084L1.51197 22.8422C1.74269 23.0729 2.05027 23.2 2.37843 23.2C2.70659 23.2 3.01445 23.0729 3.24503 22.8422L13.2226 12.8649C13.4537 12.6335 13.5805 12.3244 13.5798 11.9959C13.5805 11.6661 13.4537 11.3573 13.2226 11.126Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      {/* Swiper Slider Start */}
      <div className='d-flex' data-aos="fade-up">
        <Swiper
          className="swiper swiper-container"
          modules={[Navigation, Pagination, FreeMode]}
          slidesPerView={3}
          mousewheel={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 1.8, spaceBetween: 10 },
            768: { slidesPerView: 1.8, spaceBetween: 20 },
            1024: { slidesPerView: 2.8, spaceBetween: 30 },
            1440: { slidesPerView: 2.8, spaceBetween: 50 },
            2560: { slidesPerView: 3.8, spaceBetween: 50 },
          }}
          loop={false}
          freeMode={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.title + index} className={`d-flex justify-content-center margin-right-industry`}>
              <div className="card">
                <div className="card_image" onClick={() => { viewIndustry(item?.route) }}>
                  <Image src={item.icon} height={200} width={300} className='fit-image' alt={item.title} />
                </div>
                <div className="card_content" onClick={() => { viewIndustry(item?.route) }}>
                  <h2 className="card_title">{item.title}</h2>
                  <p className="card_text">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >
  );
}

export default IndustrySpecificExpertiseComponent;
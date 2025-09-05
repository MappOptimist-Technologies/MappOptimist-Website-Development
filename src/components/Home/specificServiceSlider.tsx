import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import './slider.css';
import { ServiceDataType } from '@/app/services/ai-machine-learning-development-services/page';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SpecificServiceSliderComponent({ data, title }: any) {

  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="industry-specific-expertise-container">
      <div className='d-flex flex-column text-center service-title-margin'>
        <h1 data-aos="fade-up" className='industry-expertise-title'>{title}</h1>
      </div>
      {/* Swiper Slider Start */}
      <div className='d-flex position-relative' data-aos="fade-up">
        <Swiper
          className="swiper service-swiper-margin-container"
          modules={[Navigation, Pagination, FreeMode]}
          slidesPerView={3}
          mousewheel={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 30 },
            1440: { slidesPerView: 1, spaceBetween: 50 },
            2560: { slidesPerView: 1, spaceBetween: 50 },
          }}
          loop={false}
          freeMode={false}
        >
          {data?.map((item: ServiceDataType) => (
            <SwiperSlide key={item.title}>
              <div className="service-specifc-card">
                <div className='service-specifc-card-left'>
                  <Image width={72} height={72} src={item?.cardIcon} className='fluid-image' alt='image' />
                  <h2 className="service-specifc-card-title">{item.title}</h2>
                  {item.subtitle ? <h6 className='service-specifc-card-subtitle'>{item.subtitle}</h6> : null}
                  <ul className="service-specifc-card-points">
                    {item.points.map((point: string) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-specifc-card-middle">
                  <Image layout='fill' src={item.img1} className='fit-image rounded-5' alt='image' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="custom-prev-btn btn-margin-left text-white p-2 no-hover position-absolute top-50 translate-middle-y d-none d-lg-block z-1"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.777448 11.126L10.7457 1.15784C10.9763 0.927123 11.284 0.800003 11.6122 0.800003C11.9403 0.800003 12.2482 0.927123 12.4788 1.15784L13.2128 1.89172C13.6905 2.36996 13.6905 3.14724 13.2128 3.62478L4.84221 11.9954L13.222 20.3752C13.4526 20.6059 13.58 20.9135 13.58 21.2415C13.58 21.5698 13.4526 21.8776 13.222 22.1084L12.488 22.8422C12.2573 23.0729 11.9497 23.2 11.6216 23.2C11.2934 23.2 10.9855 23.0729 10.755 22.8422L0.777448 12.8649C0.546308 12.6335 0.419469 12.3244 0.420169 11.9959C0.419469 11.6661 0.546308 11.3573 0.777448 11.126Z" fill="white" />
          </svg>
        </button>
        <button
          className="custom-next-btn btn-margin-right text-white p-2  no-hover position-absolute top-50 end-0 translate-middle-y d-none d-lg-block z-1"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2226 11.126L3.25427 1.15784C3.02369 0.927123 2.71597 0.800003 2.38781 0.800003C2.05965 0.800003 1.75179 0.927123 1.52121 1.15784L0.787192 1.89172C0.309512 2.36996 0.309512 3.14724 0.787192 3.62478L9.15779 11.9954L0.777952 20.3752C0.547372 20.6059 0.419971 20.9135 0.419971 21.2415C0.419971 21.5698 0.547372 21.8776 0.777952 22.1084L1.51197 22.8422C1.74269 23.0729 2.05027 23.2 2.37843 23.2C2.70659 23.2 3.01445 23.0729 3.24503 22.8422L13.2226 12.8649C13.4537 12.6335 13.5805 12.3244 13.5798 11.9959C13.5805 11.6661 13.4537 11.3573 13.2226 11.126Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SpecificServiceSliderComponent;
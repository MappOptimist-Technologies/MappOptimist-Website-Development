import { Pagination, Navigation, FreeMode, Mousewheel } from 'swiper/modules';
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
function ServiceIndustriesSliderComponent({ data, title }: any) {

  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <div className="industry-specific-expertise-container">
      <div className='d-flex flex-column text-center'>
        <h1 data-aos="fade-up" className='industry-expertise-title'>{title}</h1>
      </div>
      {/* Swiper Slider Start */}
      <div className='d-flex position-relative swiper-margin-top' data-aos="fade-up">
        <Swiper
          className="swiper px-4"
          modules={[Navigation, Pagination, FreeMode, Mousewheel]}
          slidesPerView={2}
          mousewheel={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 10 },
            576: { slidesPerView: 1.1, spaceBetween: 10 },
            768: { slidesPerView: 1.1, spaceBetween: 20 },
            1024: { slidesPerView: 1.3, spaceBetween: 30 },
            1440: { slidesPerView: 1.3, spaceBetween: 50 },
            2560: { slidesPerView: 1.3, spaceBetween: 50 },
          }}
          loop={false}
          freeMode={true}
        >
          {data?.map((item: ServiceDataType) => (
            <SwiperSlide key={item.title}>
              <div className="service-industry-card">
                <div className="service-industry-card-left">
                  <Image src={item.img1} layout='fill' className='fit-image rounded-5' alt='image' />
                </div>
                <div className='service-industry-card-right'>
                  <h2 className="service-industry-card-title mt-0">{item.title}</h2>
                  <div className='service-item-chips mt-3' >
                    {item?.points?.map((i, a) => (
                      <p key={i + a} className='service-chip industries-card-tags' >
                        {i}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceIndustriesSliderComponent;
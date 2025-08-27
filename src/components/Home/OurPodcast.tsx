import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import Blog1 from "../../../public/assets/images/blog1.jpeg";
import Blog2 from "../../../public/assets/images/blog2.png";
import Blog3 from "../../../public/assets/images/blog3.png";
import './slider.css';

const data = [
  { title: "How Much Does It Cost to Develop an App Like Doctolib?...", icon: Blog1 },
  { title: "Integration of AI and Blockchain: Impact, Benefits, and Usecases...", icon: Blog2 },
  { title: "Artificial Intelligence in Pharmaceutical: Use Cases, Benefits, and More...", icon: Blog3 },
  { title: "Integration of AI and Blockchain: Impact, Benefits, and Usecases...", icon: Blog2 },
  { title: "Artificial Intelligence in Pharmaceutical: Use Cases, Benefits, and More...", icon: Blog3 },
]

function OurPodcastComponent () {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  useEffect(() => {
    if (swiperRef?.current) {
      const slidesPerView = swiperRef.current.params.slidesPerView;
      if (typeof slidesPerView === 'number') {
        setSlidesPerView(slidesPerView);
      }
      swiperRef?.current.on("resize", () => {
        if (swiperRef.current) {
          const slidesPerView = swiperRef.current.params.slidesPerView;
          if (typeof slidesPerView === 'number') {
            setSlidesPerView(slidesPerView);
          }
        }
      });
    }
  }, []);

  return (
    <div className="podcast-container">
      <div className='d-flex flex-column text-center'>
        <h1 className='industry-expertise-title'>Our podcasts</h1>
      </div>
      {/* Swiper Slider Start */ }
      <div className='d-flex position-relative'>
        <Swiper
          className="swiper swiper-margin-container"
          modules={ [Navigation, Pagination, FreeMode] }
          slidesPerView={ 3 }
          onSlideChange={ (swiper) => {
            setActiveIndex(swiper.realIndex % data.length)
          } }
          onSwiper={ (swiper) => (swiperRef.current = swiper) }
          breakpoints={ {
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1440: { slidesPerView: 3, spaceBetween: 50 },
            2560: { slidesPerView: 4, spaceBetween: 50 },
          } }
          loop={ false }
          freeMode={ true }
        >
          { data.map((item, index) => (
            <SwiperSlide key={ item.title + index } className={ `d-flex justify-content-center` }>
              <div className="blog-card">
                <div className="card_image">
                  <Image src={ item.icon } className='fit-image object-contain' fill unoptimized alt='image' />
                </div>
                <div className="blog-card-content">
                  <h2 className="blog-card-title">{ item.title }</h2>
                  <div className='mt-5 pb-2'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_322_10341)">
                        <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#41479B" />
                        <path d="M30.9305 22.6666L20.9162 16.2893C20.63 16.1026 20.304 16.0028 19.9714 16C19.4485 16 18.9471 16.2289 18.5774 16.6364C18.2077 17.0439 18 17.5966 18 18.1729V31.8596C18.0001 32.2421 18.0931 32.6175 18.2694 32.9469C18.4456 33.2763 18.6988 33.5476 19.0024 33.7327C19.306 33.9177 19.6491 34.0098 19.9959 33.9992C20.3427 33.9886 20.6807 33.8758 20.9745 33.6725L31.0005 26.691C31.3123 26.4759 31.5682 26.1755 31.7432 25.8191C31.9183 25.4626 32.0067 25.0622 31.9996 24.6569C31.9926 24.2516 31.8904 23.8553 31.703 23.5065C31.5157 23.1577 31.2495 22.8683 30.9305 22.6666Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_322_10341">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
      {/* Pagination  Start*/ }
      <div className="d-flex mt-4 pagination-container">
        <div className="d-flex">
          { [...Array(data?.length - Math.ceil(slidesPerView) + 1)].map((_, index) => (
            <div
              key={ "pagination-" + index }
              className="mx-1"
              style={ {
                backgroundColor: activeIndex === index ? "#000" : "#ECECEC",
                width: activeIndex === index ? "35px" : "18px",
                height: "4px",
              } }
            ></div>
          )) }
        </div>
      </div>
    </div >
  );
}

export default OurPodcastComponent;
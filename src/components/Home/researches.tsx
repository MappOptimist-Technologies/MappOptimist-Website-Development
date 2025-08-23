import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import Blog1 from "../../../public/assets/images/blog1.jpeg";
import Blog2 from "../../../public/assets/images/blog2.png";
import Blog3 from "../../../public/assets/images/blog3.png";
import './slider.css';

const data = [
  { title: "All You Need to Know About DevOps: A Complete Guid ...", icon: Blog1 },
  { title: "How AI Is Transforming Businesses: A Complete Guide ...", icon: Blog2 },
  { title: "How to Hire PHP Developers in 2024: Everything You ...", icon: Blog3 },
  { title: "How AI Is Transforming Businesses: A Complete Guide ...", icon: Blog2 },
  { title: "How to Hire PHP Developers in 2024: Everything You ...", icon: Blog3 },
]

function OurResearchComponent () {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="research-container">
      <div
        style={ {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 1,
        } }
      ></div>
      <div className='d-flex flex-column text-center z-2'>
        <h1 className='industry-expertise-title'>Researches</h1>
        <p className='industry-expertise-description'>Our team of dedicated developers has provided well-researched articles that help to build future-ready organizations using technology innovation.</p>
        <div className="d-flex mt-3 position-relative">
          <div className="d-flex justify-content-center align-items-center w-100">
            <ButtonWithIcon btnText={ `Get AI insights` } />
          </div>
        </div>
      </div>
      {/* Swiper Slider Start */ }
      <div className='d-flex'>
        <Swiper
          className="swiper swiper-margin-container"
          modules={ [Navigation, Pagination, FreeMode] }
          slidesPerView={ 3 }
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
                  <Image src={ item.icon } className='fit-image' alt='image' />
                </div>
                <div className="blog-card-content">
                  <h2 className="blog-card-title">{ item.title }</h2>
                </div>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
    </div >
  );
}

export default OurResearchComponent;
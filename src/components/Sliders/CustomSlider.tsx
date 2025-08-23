"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
interface SwiperComponentProps {
  type: 1 | 2 | 3 | 4 | 5;
  textStyles?: object;
  speed?: number;
  loop?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
}
const CustomSlider: React.FC<SwiperComponentProps> = ({
  type,
  textStyles = { color: "#000" },
  loop = true,
  data = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const showTopNavigation = [1, 2].includes(type);
  const showSideNavigation = type === 3;
  const showPagination = [1, 3, 4].includes(type);
  return (
    <div className="w-100 py-1">
      {/* Top Navigation Start */ }
      { showTopNavigation && (
        <div className="navigation">
          <button className="btn custom-prev no-hover navigation-button d-none d-lg-block">
            <FontAwesomeIcon size="xl" color="#fff" icon={ faChevronLeft } />
          </button>
          <button className="btn custom-next no-hover navigation-button d-none d-lg-block">
            <FontAwesomeIcon size="xl" color="#fff" icon={ faChevronRight } />
          </button>
        </div>
      ) }
      {/* Side Navigation Start */ }
      { showSideNavigation && (
        <>
          <button
            style={ { zIndex: 10 } }
            className="btn navigation-button custom-prev no-hover position-absolute top-50 start-0 translate-middle-y d-none d-lg-block"
          >
            <FontAwesomeIcon size="xl" color="#fff" icon={ faChevronLeft } />
          </button>
          <button
            style={ { zIndex: 10 } }
            className="btn navigation-button custom-next no-hover position-absolute top-50 end-0 translate-middle-y d-none d-lg-block"
          >
            <FontAwesomeIcon size="xl" color="#fff" icon={ faChevronRight } />
          </button>
        </>
      ) }
      {/* Swiper Slider Start */ }
      <Swiper
        className="swiper mx-lg-5"
        modules={ [Navigation, Autoplay] }
        slidesPerView={ 1 }
        onSlideChange={ (swiper) =>
          setActiveIndex(swiper.realIndex % data.length)
        }
        breakpoints={ {
          320: { slidesPerView: 1.2, spaceBetween: 20 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 3, spaceBetween: 30 },
          2560: { slidesPerView: 3, spaceBetween: 30 },
        } }
        loop={ loop }
        navigation={ {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        } }
      >
        { data.map((item, index) => (
          <SwiperSlide key={ index }>
            <div
              className="card mx-auto"
              style={ {
                width: "100%",
                margin: "0 auto",
                border: "1",
                borderRadius: "none",
              } }
            >
              <Image
                src={ item.image }
                key={ index }
                alt={ `Slide ${item}` }
                style={ {
                  border: "none",
                  width: "100%",
                  height: "40vh",
                  borderRadius: "none",
                  objectFit: "cover",
                } }
                className=" img-fluid"
              />
              <div
                className="px-3"
                style={ {
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "10vh",
                } }
              >
                <h5 style={ textStyles }>{ item.text }</h5>
              </div>
              <div></div>
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
      {/* Pagination  Start*/ }
      { showPagination && (
        <div className="d-flex mt-4 mx-lg-5">
          <div className="d-flex">
            { data.map((_, index) => (
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
      ) }
    </div>
  );
};
export default CustomSlider;
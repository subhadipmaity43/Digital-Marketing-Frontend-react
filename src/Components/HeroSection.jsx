import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

function HeroSection() {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Autoplay]}
        // spaceBetween={100}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        <div className="main">
          <SwiperSlide className="wrapper">
            <div className="slide">
              <img
                className="image"
                src="/images/slider/carousel-1.jpg"
                alt=""
              />
              <div className="image-data">
                <span className="text">Welcome to n. Agency</span>
                <h4 className="sub-heading">#1 digital solution in the city</h4>
                <a href="/" className="btn-1">
                  view projects
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="wrapper">
            <div className="slide">
              <img
                className="image"
                src="/images/slider/carousel-2.jpg"
                alt=""
              />
              <div className="image-data">
                <span className="text-2">Creative & Digital</span>
                <h4 className="sub-heading-2">
                  Particular unaffected projection sentiments no my. Music marry
                  as at cause
                  <br />
                  party worth weeks. Saw how marianne graceful dissuade new
                  outlived.
                  <br />
                  Uneasy no settle whence nature narrow.
                </h4>
                <a href="/" className="btn-1">
                  view projects
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="wrapper">
            <div className="slide">
              <img
                className="image"
                src="/images/slider/carousel-4.avif"
                alt=""
              />
              <div className="image-data">
                <span className="text">create beautiful site</span>
                <h4 className="sub-heading">100% responsive.</h4>
                <a href="/" className="btn-1">
                  purchase now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default HeroSection;

import React from "react";
import Image from "next/image";
import HamidArianAvatar from "../../../../public/images/hamid_arian.png";
import LuisSecoAvatar from "../../../../public/images/luis_seco.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const UseCaseSlider = () => {
  return (
    <section className="section case-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center items-gap">
                <div className="col-12 col-lg-5">
                  <h2 className="h2">Leadership</h2>
                </div>
                {/* <div className="col-12 col-lg-7">
                  <div className="case-pagination cmn-pagination"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="case__slider">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                slidesPerGroup={1}
                freeMode={true}
                speed={1200}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: ".case-pagination",
                  clickable: true,
                }}
                className="case__slider"
                breakpoints={{
                  300: {
                    slidesPerGroup: 3,
                  },
                  1400: {
                    slidesPerGroup: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="case__slider-single case-one-in">
                    <Image
                      className="case__slider_single_background_image"
                      src={LuisSecoAvatar}
                      alt="Luis Seco"
                    />
                    {/* <div className="thumb">
                      <i className="tech-camera"></i>
                    </div> */}
                    <div className="content">
                      <h5 className="h5">Luis Seco</h5>
                      <p>University of Toronto</p>
                      {/* <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="case__slider-single case-one-in">
                    <Image
                      className="case__slider_single_background_image"
                      src={HamidArianAvatar}
                      alt="Hamid Arian"
                    />
                    {/* <div className="thumb">
                      <i className="tech-camera"></i>
                    </div> */}
                    <div className="content">
                      <h5 className="h5">Hamid Arian</h5>
                      <p>York Univversity</p>
                      {/* <Link href="/use-case-single">
                        View Details
                        <i className="fa-solid fa-angles-right"></i>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSlider;

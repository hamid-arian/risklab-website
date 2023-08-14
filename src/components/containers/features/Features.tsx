import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/feature-thumb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const Features = () => {
  return (
    <section className="section features">
      <div className="feature-wrapper">
        <div className="container" data-aos="fade-up" data-aos-duration="600">
          <div className="row justify-content-center">
            <div className="col-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".next-feature",
                  prevEl: ".prev-feature",
                }}
                autoplay={{
                  delay: 3000,
                }}
                pagination={false}
                className="features__slider"
              >
                <SwiperSlide>
                  <div className="features__slider-single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 01</span>
                          <div className="content">
                            <h2 className="h2">
                              Write Factual Trending Content
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/register">
                              get started free
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 d-none d-xl-block">
                        <div className="feature__thumb text-center">
                          <Image src={Thumb} alt="Image" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 02</span>
                          <div className="content">
                            <h2 className="h2">
                              Write anywhere and everywhere
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/sign-in">
                              Request A Demo
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="features__slider-single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 03</span>
                          <div className="content">
                            <h2 className="h2">
                              Write Factual Trending Content
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/register">
                              get started free
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 d-none d-xl-block">
                        <div className="feature__thumb text-center">
                          <Image src={Thumb} alt="Image" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 04</span>
                          <div className="content">
                            <h2 className="h2">
                              Write anywhere and everywhere
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/sign-in">
                              Request A Demo
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="features__slider-single">
                    <div className="row items-gap align-items-center">
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 05</span>
                          <div className="content">
                            <h2 className="h2">
                              Write Factual Trending Content
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/register">
                              get started free
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 d-none d-xl-block">
                        <div className="feature__thumb text-center">
                          <Image src={Thumb} alt="Image" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="features__single-item">
                          <span className="tag"> features 06</span>
                          <div className="content">
                            <h2 className="h2">
                              Write anywhere and everywhere
                            </h2>
                            <p>
                              tech AI is trained and powered by &apos;Google Search&apos;
                              to chat with you on current events and trending
                            </p>
                            <Link href="/sign-in">
                              Request A Demo
                              <i className="tech-arrow-top"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="feature__arrows">
                <button
                  aria-label="previous slide"
                  className="slide-btn prev-feature"
                >
                  <i className="tech-left-angle"></i>
                </button>
                <button
                  aria-label="next slide"
                  className="slide-btn next-feature"
                >
                  <i className="tech-right-angle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

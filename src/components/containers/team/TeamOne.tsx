import React from "react";
import Image from "next/image";
import IconOne from "public/images/review/icon-one.png";
import IconTwo from "public/images/review/icon-two.png";
import IconThree from "public/images/review/icon-three.png";
import ThumbOne from "public/images/review/one.png";
import ThumbTwo from "public/images/review/two.png";
import ThumbThree from "public/images/review/three.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

const TeamOne = () => {
  return (
    <section className="section pb-0 testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h4 className="h2">professionals & teams choose tech ai.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial__slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={1200}
          loop={true}
          roundLengths={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".next-testimonial",
            prevEl: ".prev-testimonial",
          }}
          autoplay={{
            delay: 3000,
          }}
          pagination={false}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="testimonial__slider"
        >
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconTwo} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Nicholas Natteau</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconThree} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Jeremy Moser</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbThree} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Angela R. Nolan</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbOne} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Rex A. Munoz</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconTwo} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Nicholas Natteau</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconThree} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Jeremy Moser</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbThree} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Angela R. Nolan</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbOne} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Rex A. Munoz</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconTwo} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Nicholas Natteau</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconThree} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbTwo} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Jeremy Moser</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review__single">
              <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" />
              </div>
              <div className="review-content">
                <p className="fw-7">
                  tech ai saves us thousands of dollars a week. We create
                  content briefs and write 50-100 unique SEO-driven pieces per
                  month. With tech.ai, we now craft briefs, outlines, and full
                  first.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={ThumbThree} alt="Image" />
                </div>
                <div className="content">
                  <p className="h6">Angela R. Nolan</p>
                  <p>CEO, uSERP</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="testimonial__arrows">
          <button
            aria-label="previous slide"
            className="slide-btn prev-testimonial"
          >
            <i className="tech-left-angle"></i>
          </button>
          <button
            aria-label="next slide"
            className="slide-btn next-testimonial"
          >
            <i className="tech-right-angle"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamOne;

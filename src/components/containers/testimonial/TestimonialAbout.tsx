import React from "react";
import Image from "next/image";
import IconOne from "public/images/review/icon-one.png";
import IconTwo from "public/images/review/icon-two.png";
import IconThree from "public/images/review/icon-three.png";
import ThumbOne from "public/images/review/one.png";
import ThumbTwo from "public/images/review/two.png";
import ThumbThree from "public/images/review/three.png";
import HamidArianAvatar from "public/images/hamid_arian.png";
import LuisSecoAvatar from "public/images/luis_seco.jpg";

const TestimonialAbout = () => {
  return (
    <section className="section review review-light pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="section__header">
              <h2 className="h2">our Leadership</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          {/* luis seco */}
          <div className="col-12 col-lg-6">
            <div className="review__single">
              {/* <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconOne} alt="Image" priority />
              </div> */}
              <div className="review-content">
                <p className="fw-7">
                  Luis Seco is a professor of mathematics at the university of
                  Toronto, Ontario, Canada. He has obtained his phd at the
                  Princeton University under the supervision of Professor
                  Charles Fefferman. He is the Director of the RiskLab and the
                  MMF program at the University of Toronto.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={LuisSecoAvatar} alt="Luis Seco" priority />
                </div>
                <div className="content">
                  <p className="h6">Luis Seco</p>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
          {/* hamid arian */}
          <div className="col-12 col-lg-6">
            <div className="review__single">
              {/* <div className="review-head">
                <div className="review__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <Image src={IconTwo} alt="Image" priority />
              </div> */}
              <div className="review-content">
                <p className="fw-7">
                  Hamid Arian is an assistant professor of Finance at your
                  university Toronto Ontario Canada. Haven’t obtained his phd at
                  the University of Toronto under the supervision of Professor
                  Luis Seco. RiskLab AI is a startup that spinned off of RiskLab
                  Middle East which he founded in 2018.
                </p>
              </div>
              <div className="review-meta">
                <div className="thumb">
                  <Image src={HamidArianAvatar} alt="Hamid Arian" priority />
                </div>
                <div className="content">
                  <p className="h6">Hamid Arian</p>
                  <p>Co Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAbout;

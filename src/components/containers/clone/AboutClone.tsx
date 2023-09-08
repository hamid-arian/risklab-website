import React from "react";
import Link from "next/link";
import Image from "next/image";
import Thumb from "public/images/about-thumb.png";

const AboutClone = () => {
  return (
    <section className="section clone about-main">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div className="about__thumb">
              <Image src={Thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="clone__content section__content">
              <h2 className="h2">
                A pioneering platform providing high-performance financial
                intelligence.
              </h2>
              <div className="paragraph">
                <p className="fw-5 text-lg">
                  Founded by a team of expert quantitative researchers and data
                  scientists.
                </p>
                <p>
                  The inception of RiskLab AI was driven by the realization that
                  traditional financial models were insufficient to address the
                  rapidly changing financial landscape. Inspired by AI and
                  machine learning advancements, we embarked on a journey to
                  create a platform that seamlessly integrates academic research
                  with direct industrial practice and applications.
                </p>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  AI
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  machine learning
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Financial Intelligence
                </li>
              </ul>
              {/* <div className="tour__content-cta">
                <div className="trust">
                  <div className="review">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="fw-7">Rated Excellent on Trustpilot</p>
                </div>
                <div className="action">
                  <Link href="/contact-us" className="btn btn--primary">
                    request A Demo - its free
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClone;

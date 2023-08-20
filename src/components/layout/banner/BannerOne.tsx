import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/banner/banner-one-thumb.png";

const BannerOne = () => {
  return (
    <section className="section banner-one bg-img">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-one__content">
              <p className="h6">
                <span>AI</span>
                Toward Reproducible Research
              </p>
              <h1 className="h1">
                High-Performance Cutting-Edge Financial Intelligence
              </h1>
              <div className="section__content-cta">
                <Link href="/register" className="btn btn--primary">
                  Open-source Solutions
                </Link>
                <Link href="/contact-us" className="btn btn--secondary">
                  Request Consulting
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="banner-one__thumb text-start text-lg-end">
              <Image src={Thumb} priority alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;

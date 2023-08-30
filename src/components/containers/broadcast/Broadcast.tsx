import React from "react";
import Image from "next/image";
import Link from "next/link";
import animeOne from "public/images/anime-three.png";
import animeTwo from "public/images/anime-two.png";
import Logo from "../../../../public/images/logo.png";
import broadCastOne from "public/images/broadcast-thumb.png";
import broadCastTwo from "public/images/broadcast-thumb-two.png";
import broadCastThree from "public/images/broadcast-thumb-three.png";
import broadCastFour from "public/images/broadcast-thumb-four.png";

const Broadcast = () => {
  return (
    <section className="section broadcast pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 fix-scroll">
            {/* library */}
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">RiskLab AI</h2>
                    <div className="paragraph">
                      <p>
                        Welcome to RiskLab AI, where high-performance,
                        cutting-edge financial intelligence meets academic
                        rigor. Our mission is to bridge the gap between academic
                        research and practical applications in the financial
                        industry. We focus on transparent, data-driven, and
                        innovative approaches to quantitative research that
                        provide actionable insights for businesses and
                        individuals alike. By leveraging state-of-the-art
                        technology and financial expertise, we aim to
                        revolutionize the financial landscape with actionable,
                        sustainable, and intelligent strategies.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/researches" className="btn btn--secondary">
                        Get Library
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={Logo} alt="Image" priority />
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            {/* researches */}
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={broadCastTwo} alt="Image" priority />
                  </div>
                </div>
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">Research Focus</h2>
                    <div className="paragraph">
                      <p>
                        Our research has led to groundbreaking insights in the
                        field of quantitative finance.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/researches" className="btn btn--secondary">
                        See Our Researches
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
            {/* request consulting */}
            <div className="broadcast__inner">
              <div className="row align-items-center items-gap-two">
                <div className="col-12 col-xl-8 col-xxl-7">
                  <div className="section__content broadcast__inner-content">
                    <h2 className="h2">Get In Touch</h2>
                    <div className="paragraph">
                      <p>
                        Fill out the contact form below, and our team will
                        respond to your query as soon as possible.
                      </p>
                    </div>
                    <div className="section__content-cta">
                      <Link href="/contact-us" className="btn btn--secondary">
                        Request Consulting
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4 col-xxl-5">
                  <div className="broadcast__thumb text-xl-center">
                    <Image src={broadCastThree} alt="Image" priority />
                  </div>
                </div>
              </div>
              <div className="anime">
                <Image
                  src={animeOne}
                  alt="Image"
                  priority
                  className="anime-one"
                />
                <Image
                  src={animeTwo}
                  alt="Image"
                  priority
                  className="anime-two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadcast;

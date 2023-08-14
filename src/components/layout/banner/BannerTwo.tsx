import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/images/banner/anime-one.png";
import Two from "public/images/banner/anime-two.png";
import Three from "public/images/banner/anime-three.png";
import Four from "public/images/banner/anime-four.png";
import Five from "public/images/banner/anime-five.png";

import TypedText from "./TypedText";

const BannerTwo = () => {
  const strings = ["facebook posts", "twitter posts", "instagram posts"];

  return (
    <section className="section banner-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="banner-two__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="h1">best ai writer for creating</h1>
              <h2 className="h1">
                <span id="textTyped">
                  <TypedText
                    strings={strings}
                    loop={true}
                    startDelay={50}
                    backDelay={1000}
                    backSpeed={50}
                  />
                </span>
              </h2>
              <p className="text-lg">
                Create human-quality blog posts, SEO articles, news, press
                releases, and more in seconds
              </p>
              <div className="section__content-cta">
                <Link href="/register" className="btn btn--senary">
                  start writing free
                </Link>
                <p>7-day trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={One} alt="Image" className="one" />
        <Image src={Two} alt="Image" className="two" />
        <Image src={Three} alt="Image" className="three" />
        <Image src={Four} alt="Image" className="four" />
        <Image src={Five} alt="Image" className="five" />
      </div>
    </section>
  );
};

export default BannerTwo;

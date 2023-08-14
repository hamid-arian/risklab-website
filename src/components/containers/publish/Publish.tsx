import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame from "public/images/frame-three.png";

const Publish = () => {
  return (
    <section className="section publish">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="publish__inner">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div
                    className="section__header"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <h2 className="h2">
                      Instruct our AI, generate and publish.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row items-gap">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="publish__single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="thumb">
                      <i className="fa-solid fa-square-check"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">Write better content faster</h5>
                      <p>
                        create unique and well organized full length articles
                        from start to finish
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="publish__single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <div className="thumb">
                      <i className="fa-solid fa-square-check"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">Goodbye’ to the blank page</h5>
                      <p>
                        create unique and well organized full length articles
                        from start to finish
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="publish__single"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    <div className="thumb">
                      <i className="fa-solid fa-square-check"></i>
                    </div>
                    <div className="content">
                      <h5 className="h5">90+ tools and templates</h5>
                      <p>
                        create unique and well organized full length articles
                        from start to finish
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section__content-cta text-center"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Link href="/contact-us" className="btn btn--senary">
                  try a free demo
                </Link>
                <Image src={Frame} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publish;

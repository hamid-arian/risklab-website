import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimeOne from "public/images/footer-anime-one.png";
import AnimeTwo from "public/images/footer-anime-two.png";
import LogoTwo from "public/images/logo.gif";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer section pb-0">
      <div className="container">
        <div className="row items-gap-two">
          {/* researches */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h5 className="h5">our Researches</h5>
              <ul>
                <li>
                  <Link href="/"> Data Analysis</Link>
                </li>
                <li>
                  <Link href="/"> Feature Engineering</Link>
                </li>
                <li>
                  <Link href="/"> Modeling</Link>
                </li>
                <li>
                  <Link href="/"> Back-testing</Link>
                </li>
                <li>
                  <Link href="/"> Deep Learning</Link>
                </li>
                <li>
                  <Link href="/"> Financial Derivatives</Link>
                </li>
                <li>
                  <Link href="/"> Natural Language Processing</Link>
                </li>
                <li>
                  <Link href="/"> Large Language Models</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* latest news */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">Latest News</h5>
              <ul>
                <li>
                  <Link href="/about-us">RSE Computational Workshop</Link>
                </li>
                <li>
                  <Link href="/about-us">RSE Computational Workshop</Link>
                </li>
                <li>
                  <Link href="/about-us">RSE Computational Workshop</Link>
                </li>
                <li>
                  <Link href="/use-case">RSE Computational Workshop</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* leadership */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <h5 className="h5">Leadership</h5>
              <ul>
                <li>
                  <Link href="/use-case"> Luis Seco</Link>
                </li>
                <li>
                  <Link href="/use-case"> Hamid Arian</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* about */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="footer__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <h5 className="h5">About RiskLabAI</h5>
              <ul>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer bottom section */}
        <div className="row">
          <div className="col-12">
            <div className="copyright-inner">
              <div className="row items-gap align-items-center">
                <div className="col-12 col-lg-3">
                  <div
                    className="logo text-center text-lg-start"
                    id="footer_logo"
                  >
                    <Link href="/">
                      <Image src={LogoTwo} alt="Image" />
                      <span className="logo_name">
                        RiskLab<div>AI</div>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="text-center">
                    Copyright &copy;
                    <span id="copyYear"> {currentYear} </span>
                    <Link href="/"> RiskLabAI </Link>.
                  </p>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={AnimeOne} alt="Image" className="one" />
        <Image src={AnimeTwo} alt="Image" className="two" />
      </div>
    </footer>
  );
};

export default Footer;

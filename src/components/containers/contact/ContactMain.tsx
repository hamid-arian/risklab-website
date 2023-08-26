import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "public/images/arrow-contact.png";

const ContactMain = () => {
  return (
    <section className="section contact-main">
      <div className="container">
        <div className="row items-gap flex-column align-items-center">
          <div className="col-12 col-lg-6 col-xxl-6">
            <div
              className="contact-main__content w-100"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h3 text-center">
                <span>Let&apos;s talk</span>
              </h2>
              <p className="w-100 text-center">
                Fill out the contact form below, and our team will respond to
                your query as soon as possible.
              </p>
              {/* <div className="arrow">
                <Image src={Arrow} alt="Image" />
              </div>
              <div className="cta-contact">
                <Link href="tel:223-087-9756">
                  Schedule a call
                  <i className="fa-solid fa-angle-right"> </i>
                </Link>
                <span>OR</span>
                <Link href="mailto:support@techai.com">
                  Request a feature
                  <i className="fa-solid fa-angle-right"> </i>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-6">
            <div
              className="contact-main__form"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <form action="#" method="post">
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <input
                    type="text"
                    name="contact-name"
                    id="contactName"
                    placeholder="enter full name"
                  />
                </div>
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <input
                    type="email"
                    name="contact-email"
                    id="contactEmail"
                    placeholder="enter Your Email"
                  />
                </div>
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <select className="subject">
                    <option data-display="Select Subject">
                      Select Subject
                    </option>
                    <option value="1">Account</option>
                    <option value="2">Service</option>
                    <option value="3">Pricing</option>
                    <option value="4">Support</option>
                  </select>
                </div>
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <textarea
                    name="contact-message"
                    id="contactMessage"
                    placeholder="Write a message"
                  ></textarea>
                </div>
                <div className="form-cta justify-content-start">
                  <button type="submit" className="btn btn--nonary">
                    Send
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;

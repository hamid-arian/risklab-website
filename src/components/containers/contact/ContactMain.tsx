import useContact from "@/hooks/useContact";
import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Arrow from "public/images/arrow-contact.png";

const ContactMain = () => {
  const { contactController } = useContact();

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
                <span>Let&apos;s be in touch</span>
              </h2>
              <p className="w-100 text-center">
                Fill out the contact form below, and our team will respond to
                your query as soon as possible.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-6">
            <div
              className="contact-main__form"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <form onSubmit={contactController.handleSubmit}>
                {/* fullname */}
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <input
                    value={contactController.values.contactName}
                    onChange={contactController.handleChange}
                    type="text"
                    name="contactName"
                    id="contactName"
                    placeholder="enter full name"
                    style={
                      contactController.touched.contactName &&
                      contactController.errors.contactName
                        ? { borderBottom: "1px solid red" }
                        : {}
                    }
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -30,
                      fontSize: 12,
                      color: "red",
                    }}
                  >
                    {contactController.errors.contactName}
                  </span>
                </div>
                {/* email */}
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <input
                    value={contactController.values.contactEmail}
                    onChange={contactController.handleChange}
                    name="contactEmail"
                    id="contactEmail"
                    placeholder="enter Your Email"
                    style={
                      contactController.touched.contactEmail &&
                      contactController.errors.contactEmail
                        ? { borderBottom: "1px solid red" }
                        : {}
                    }
                  />
                  {contactController.touched.contactEmail &&
                  contactController.errors.contactEmail ? (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: -30,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {contactController.errors.contactEmail}
                    </span>
                  ) : null}
                </div>
                {/* subject */}
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <input
                    value={contactController.values.contactSubject}
                    onChange={contactController.handleChange}
                    type="text"
                    name="contactSubject"
                    id="contactSubject"
                    placeholder="enter a subject"
                    style={
                      contactController.touched.contactSubject &&
                      contactController.errors.contactSubject
                        ? { borderBottom: "1px solid red" }
                        : {}
                    }
                  />
                  {contactController.touched.contactSubject &&
                  contactController.errors.contactSubject ? (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: -30,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {contactController.errors.contactSubject}
                    </span>
                  ) : null}
                </div>
                {/* message */}
                <div
                  className="group-input"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <textarea
                    value={contactController.values.contactMessage}
                    onChange={contactController.handleChange}
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Write a message"
                    style={
                      contactController.touched.contactMessage &&
                      contactController.errors.contactMessage
                        ? { borderBottom: "1px solid red" }
                        : {}
                    }
                  ></textarea>
                  {contactController.touched.contactMessage &&
                  contactController.errors.contactMessage ? (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: -30,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {contactController.errors.contactMessage}
                    </span>
                  ) : null}
                </div>
                {/* submit */}
                <div className="form-cta justify-content-start">
                  <button
                    type="submit"
                    className="w-100 btn btn--nonary d-flex justify-content-center"
                  >
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

import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import AboutClone from "@/components/containers/clone/AboutClone";
import UseCaseSlider from "@/components/containers/use-case/UseCaseSlider";
import AboutSponsor from "@/components/containers/sponsor/AboutSponsor";
import EraserTwo from "@/components/containers/eraser/EraserTwo";
import FaqLight from "@/components/containers/faq/FaqLight";
import TestimonialAbout from "@/components/containers/testimonial/TestimonialAbout";
import CtaAbout from "@/components/containers/cta/CtaAbout";

const AboutUs = () => {
  return (
    <Layout header={true} footer={1}>
      <Banner title="About RiskLabAi" />
      <AboutClone />
      {/* <UseCaseSlider /> */}
      {/* <AboutSponsor /> */}
      {/* <EraserTwo /> */}
      {/* <FaqLight /> */}
      <TestimonialAbout />
      {/* <CtaAbout /> */}
    </Layout>
  );
};

export default AboutUs;

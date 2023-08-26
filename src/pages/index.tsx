import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOnelight from "@/components/layout/banner/BannerOnelight";
import OverviewOne from "@/components/containers/overview/OverviewOne";
import CloneLight from "@/components/containers/clone/CloneLight";

import BannerOne from "@/components/layout/banner/BannerOne";
import VoiceSlider from "@/components/containers/voice/VoiceSlider";
import Clone from "@/components/containers/clone/Clone";
import Sponsor from "@/components/containers/sponsor/Sponsor";
import Tour from "@/components/containers/tour/Tour";
import UseCaseSlider from "@/components/containers/use-case/UseCaseSlider";
import Broadcast from "@/components/containers/broadcast/Broadcast";
import Faq from "@/components/containers/faq/Faq";
import TestimonialOne from "@/components/containers/testimonial/TestimonialOne";
import CtaOne from "@/components/containers/cta/CtaOne";
import LanguageSlider from "@/components/containers/language/LanguageSlider";
const Home = () => {
  return (
    <Layout header={true} footer={1}>
      <BannerOnelight />
      <OverviewOne />
      <CloneLight />
      <Sponsor />
      <Tour />
      <UseCaseSlider />
      <Broadcast />
    </Layout>
  );
};

export default Home;

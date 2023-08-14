import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOne from "@/components/layout/banner/BannerOne";
import OverviewOne from "@/components/containers/overview/OverviewOne";
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
      <BannerOne />
      <OverviewOne />
      <VoiceSlider />
      <Clone />
      <Sponsor />
      <Tour />
      <UseCaseSlider />
      <Broadcast />
      <Faq />
      <LanguageSlider />
      <TestimonialOne />
      <CtaOne />
    </Layout>
  );
};

export default Home;

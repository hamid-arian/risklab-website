import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Banner from "../../components/layout/banner/Banner";
import ResearchCard from "@/components/research_card";

const Researches = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <Layout header={true} footer={1}>
      {/* banner section */}
      <section className="section">
        <Banner title={"Researches"} />
        <div className="library_description">
          <h6 data-aos="fade-up" data-aos-duration="600">
            Our research has led to groundbreaking insights in the field of
            quantitative finance.
          </h6>
        </div>
      </section>
      {/* researches list */}
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="accordion" id="accordion">
            <ResearchCard imgTab={imgTab} setImgTab={setImgTab} />
            <ResearchCard imgTab={imgTab} setImgTab={setImgTab} />
            <ResearchCard imgTab={imgTab} setImgTab={setImgTab} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Researches;

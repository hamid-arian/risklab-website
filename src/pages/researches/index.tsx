import { Fragment, useState } from "react";
import Layout from "@/components/layout/Layout";
import Banner from "../../components/layout/banner/Banner";
import ResearchCard from "@/components/research_card";
import { researches } from "@/data/researches.js";

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
      <div className="researches_slider">
        {researches?.map((research, index): any => (
          <Fragment key={index}>
            <ResearchCard research={research} />
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};
export default Researches;

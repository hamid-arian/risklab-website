import { Fragment } from "react";
import Layout from "@/components/layout/Layout";
import Banner from "../../components/layout/banner/Banner";
import NEWS from "@/data/news.json";
import NewsCard from "@/components/news_card";

const News = () => {
  return (
    <Layout header={true} footer={1}>
      {/* banner section */}
      <section className="section">
        <Banner title={"News & Updates"} />
        <div className="library_description">
          <h6 data-aos="fade-up" data-aos-duration="600">
            Stay informed with our latest developments in quantitative research
            in finance. At RiskLab AI, we’re constantly pushing the boundaries
            of financial intelligence, delivering cutting-edge insights and
            innovations in financial data science, feature engineering,
            financial modeling, and more. Check back regularly for updates on
            our recent papers, breakthroughs, and findings that are shaping the
            future of quantitative finance.
          </h6>
        </div>
      </section>
      {/* researches list */}
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="accordion" id="accordion">
            {NEWS?.map((news, index): any => (
              <Fragment key={index}>
                <NewsCard news={news} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default News;

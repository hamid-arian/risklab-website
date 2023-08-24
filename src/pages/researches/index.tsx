import Layout from "@/components/layout/Layout";
import Banner from "../../components/layout/banner/Banner";

const Researches = () => {
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
      <section></section>
    </Layout>
  );
};
export default Researches;

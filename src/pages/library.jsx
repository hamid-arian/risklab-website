import Layout from "@/components/layout/Layout";
import Banner from "../components/layout/banner/Banner";

const Library = () => {
  return (
    <Layout header={true} footer={1}>
      <section className="section">
        <Banner title={"RiskLabAI Library"} />
      </section>
    </Layout>
  );
};
export default Library;

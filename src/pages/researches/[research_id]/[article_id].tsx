import Layout from "@/components/layout/Layout";
import Banner from "../../../components/layout/banner/Banner";

const Article = () => {
  return (
    <Layout header={true} footer={1}>
      <section className="section">
        <Banner title={"Article"} />
      </section>
    </Layout>
  );
};
export default Article;

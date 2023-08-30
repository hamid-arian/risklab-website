import Layout from "@/components/layout/Layout";
import Banner from "../../../components/layout/banner/Banner";
import { researches } from "../../../data/researches";
import Vscode from "../../../components/vscode";
import { getSortedPostsData } from "../../../../lib/posts";

export async function getStaticProps(staticProps: any) {
  const params = staticProps.params;
  const research_id = parseFloat(params.research_id);
  const researchData = researches.find((rs) => rs.id == research_id);
  let insidePathName = "";
  if (researchData?.path) {
    insidePathName = researchData.path;
  }
  const allPostsData = getSortedPostsData(insidePathName);
  return {
    props: {
      allPostsData,
      researchData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: researches.map((item) => {
      return { params: { research_id: `${item.id}` } };
    }),
    fallback: false,
  };
}

const ViewResearch = ({ allPostsData, researchData }: any) => {
  if (researchData) {
    return (
      <Layout header={true} footer={1}>
        <section className="section">
          <Banner title={researchData.title} />
          <div className="library_description">
            <h6 data-aos="fade-up" data-aos-duration="600">
              {researchData?.content}
            </h6>
          </div>
          <div className="researches_code_base">
            <Vscode data={researchData} />
          </div>
          <div className="researches_articles">
            <h5>Research Articles</h5>
            <div></div>
          </div>
        </section>
      </Layout>
    );
  }
};
export default ViewResearch;
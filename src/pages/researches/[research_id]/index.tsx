import Layout from "@/components/layout/Layout";
import Banner from "../../../components/layout/banner/Banner";
import { researches } from "../../../data/researches";
import Vscode from "../../../components/vscode";
import { getSortedPostsData } from "../../../../lib/posts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setBlogPost } from "@/features/reducer";

export async function getStaticProps(staticProps: any) {
  const params = staticProps.params;
  const research_id = parseFloat(params.research_id);
  const researchData = researches.find((rs) => rs.id == research_id);
  let insidePathName = "";
  if (researchData?.path) {
    insidePathName = researchData.path;
  }
  let allPostsData = null;
  allPostsData = getSortedPostsData(insidePathName);
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
      return { params: { research_id: `${item.id.toString()}` } };
    }),
    fallback: false,
  };
}

const ViewResearch = ({ allPostsData, researchData }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (researchData) {
    return (
      <Layout header={true} footer={1}>
        <section className="section">
          <Banner title={researchData.title} />
          <div className="library_description">
            <h6>{researchData?.content}</h6>
          </div>
          <div className="researches_code_base">
            <Vscode data={researchData} />
          </div>
          <div className="researches_articles">
            <h5>Research Articles</h5>
            {allPostsData?.length === 0 ? (
              <h6 style={{ color: "rgb(150,150,150)" }}>Any Article Yet!</h6>
            ) : (
              <div className="researches_articles_list">
                {allPostsData
                  .filter((item: any) => item.id !== "Figs")
                  .map((article: any, index: number) => (
                    <article key={index}>
                      <h6>{article?.id}</h6>
                      <span>
                        {article?.fileContents
                          ?.substring(0, 150)
                          .replace(/\#/g, "")}{" "}
                        ...
                      </span>
                      <button
                        onClick={() => {
                          router.push(
                            `/researches/${researchData?.id}/${article.id}`
                          );
                          dispatch(setBlogPost(article));
                        }}
                        type="button"
                        className="btn btn--primary"
                      >
                        Read More
                      </button>
                    </article>
                  ))}
              </div>
            )}
          </div>
        </section>
      </Layout>
    );
  }
};
export default ViewResearch;

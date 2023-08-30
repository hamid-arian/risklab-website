import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Banner from "../../../components/layout/banner/Banner";
import { researches } from "../../../data/researches";
import Vscode from "../../../components/vscode";

const ViewResearch = () => {
  const router = useRouter();
  const { research_id } = router.query;

  const researchData = researches.find((rs) => rs.id == research_id);

  useEffect(() => {
    console.log(research_id);
  }, [router.isReady]);

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
          <div style={{ padding: "0 50px", marginTop: 30 }}>
            <Vscode data={researchData} />
          </div>
        </section>
      </Layout>
    );
  }
};
export default ViewResearch;

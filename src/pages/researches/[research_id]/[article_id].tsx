import Layout from "@/components/layout/Layout";
import Banner from "../../../components/layout/banner/Banner";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Article = () => {
  const router = useRouter();
  const blogPost = useSelector((state: any) => state.app.blogPost);

  useEffect(() => {
    if (!blogPost) {
      router.push("/researches/");
    }
  }, []);

  if (blogPost) {
    return (
      <Layout header={true} footer={1}>
        <section className="section">
          <Banner title={blogPost?.title} />
        </section>
        <div className="view_article_markdown">
          <div>
            <ReactMarkdown
              children={blogPost.fileContents}
              skipHtml={true}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
      </Layout>
    );
  }
};
export default Article;

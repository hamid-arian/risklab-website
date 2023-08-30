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
    // eslint-disable-next-line
    const redirectToPrev = () => {
      // eslint-disable-next-line
      if (!blogPost) {
        // eslint-disable-next-line
        router.push("/researches/");
      }
    };
    // eslint-disable-next-line
    redirectToPrev();
  }, [router.isReady]);

  if (blogPost) {
    return (
      <Layout header={true} footer={1}>
        <section className="section">
          <Banner title={blogPost?.title} />
        </section>
        <div className="view_article_markdown">
          <div>
            {/* eslint-disable-next-line */}
            <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
              {blogPost.fileContents}
            </ReactMarkdown>
          </div>
        </div>
      </Layout>
    );
  }
};
export default Article;

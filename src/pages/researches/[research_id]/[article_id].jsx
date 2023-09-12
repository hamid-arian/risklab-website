import Layout from "@/components/layout/Layout";
import Banner from "../../../components/layout/banner/Banner";
import "katex/dist/katex.min.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import supersub from "remark-supersub";
import rehypeRaw from "rehype-raw";
import styles from "@/styles/markdown.module.css";

const Article = () => {
  const router = useRouter();
  const blogPost = useSelector((state) => state.app.blogPost);

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
            <ReactMarkdown
              children={blogPost.fileContents}
              skipHtml={false}
              escapeHtml={false}
              transformImageUri={(uri) =>
                uri.startsWith("http") ? uri : `${uri}`
              }
              remarkPlugins={[remarkMath, supersub, remarkBreaks, remarkGfm]}
              rehypePlugins={[
                [rehypeHighlight, { detect: true, ignoreMissing: true }],
                rehypeRaw,
              ]}
              className={styles.reactMarkDown}
              linkTarget="_blank"
            />
          </div>
        </div>
      </Layout>
    );
  }
};
export default Article;

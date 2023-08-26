import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import BlogLayoutOne from "@/components/containers/blog/BlogLayoutOne";

const Blog = () => {
  return (
    <Layout header={true} footer={1}>
      <Banner desc="Latest Blog" page="Latest Blog" />
      <BlogLayoutOne />
    </Layout>
  );
};

export default Blog;

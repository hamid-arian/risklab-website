import React from "react";
import ErrorContent from "@/components/containers/error/ErrorContent";
import Layout from "@/components/layout/Layout";

const Error = () => {
  return (
    <Layout header={true} footer={1}>
      <ErrorContent />
    </Layout>
  );
};

export default Error;

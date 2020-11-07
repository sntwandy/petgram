import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

export default ({ detailId }) => (
  <Layout title={`This photography is ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />;
  </Layout>
);

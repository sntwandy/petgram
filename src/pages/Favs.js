import React from "react";
import { FavsWithQuery } from "../container/GetFavorite";
import { Layout } from "../components/Layout";

export const Favs = () => (
  <Layout title="Your favorites" subtitle="You can find here your favorites">
    <FavsWithQuery />
  </Layout>
);

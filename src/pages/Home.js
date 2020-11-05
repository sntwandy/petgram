import React from "react";

// Components
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCardsWithQuery } from "../container/ListOfPhotoCardsWithQuery";
import { Layout } from "../components/Layout";

const HomePage = ({ id }) => (
  <Layout
    title="Your favorite app about pets"
    subtitle="With Petgram you can find photos about domestics animals so cute"
  >
    <ListOfCategories />
    <ListOfPhotoCardsWithQuery categoryId={id} />
  </Layout>
);

export const Home = React.memo(HomePage, (prevPros, props) => {
  return prevPros.id === props.id;
});

import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// Components
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards";

const query = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={query} variables={{ categoryId }}>
    {({ loading, error, data = { photos: [] } }) => {
      // console.log(data);
      return <ListOfPhotoCardsComponent data={data} />;
    }}
  </Query>
);

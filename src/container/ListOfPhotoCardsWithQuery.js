import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// Components
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards";

const GET_SINGLE_PHOTO = gql`
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

const renderProp = ({ loading, error, data = { photos: [] } }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  // console.log(data);
  return <ListOfPhotoCardsComponent data={data} />;
};

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ categoryId }}>
    {renderProp}
  </Query>
);

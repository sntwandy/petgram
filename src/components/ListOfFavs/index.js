import React from "react";

// Styles
import { Link, Grid, Img } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Img src={fav.src} />)
        </Link>
      ))}
    </Grid>
  );
};

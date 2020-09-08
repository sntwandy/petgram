import React from "react";

// Components
import { Category } from "../Category";

// Styles
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map((category) => (
        <Item key={category}>
          <Category />
        </Item>
      ))}
    </List>
  );
};

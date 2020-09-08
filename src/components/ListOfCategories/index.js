import React from "react";

// Components
import { Category } from "../Category";

// Styles
import { List, Item } from "./styles";

// Data
import { categories } from "../../../api/db.json";

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};

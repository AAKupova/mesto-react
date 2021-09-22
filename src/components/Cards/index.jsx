import React from "react";

import { List } from "./List";

export const Cards = ({children}) => (
  <section className="cards">
    <List>{children}</List>
  </section>
);

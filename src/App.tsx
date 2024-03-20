import React from "react";
import Header from "./components/Header";

export const App = (): JSX.Element => (
  <Header
    navigate={() => {
      console.log("click");
    }}
  />
);

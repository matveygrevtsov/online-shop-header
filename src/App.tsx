import React from "react";
import Header from "./components/Header";

export const App = (): JSX.Element => (
  <Header items={[]} onLogout={console.log} />
);

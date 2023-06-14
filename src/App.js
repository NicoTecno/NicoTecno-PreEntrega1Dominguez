import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
// import "./App.css";

// import React from "react";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Esto es un prop" />
    </>
  );
};

export default App;

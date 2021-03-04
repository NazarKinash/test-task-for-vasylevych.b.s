import React from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <div className="App">
      <Filter />
      <ProductsList />
    </div>
  );
}

export default App;

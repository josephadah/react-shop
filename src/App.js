import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import ProductList from "./components/products/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-2">
            <h4>Categories</h4>
          </div>
          <div className="col-10">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

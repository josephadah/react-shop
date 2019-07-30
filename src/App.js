import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import ProductList from "./components/products/ProductList";
import { categories } from "./services/fakeServices/categories";

class App extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.setState({ categories: categories.rows });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-2">
              <h4>Categories</h4>
              <ul className="list-group">
                {this.state.categories.map(category => (
                  <li
                    key={category.category_id}
                    className="list-group-item cursor-pointer"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-10">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

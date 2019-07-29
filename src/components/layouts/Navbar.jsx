import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="fixed-top d-flex justify-content-between bg-white pt-2">
          <p className="ml-3">
            Hi! <a href="#">Sign in</a> or <a href="#">Register</a>
          </p>
          <div>
            <a href="#">Daily Deals</a>
            <a href="#">Sell</a>
            <a href="#">Help & Contact</a>
          </div>
          <div className="mr-3">
            <i className="fas fa-bag" />
            Your Bag: <strong>$0.00</strong>
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-5">
          <a className="navbar-brand" href="#">
            Tur-Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;

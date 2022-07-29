import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbarStyle ">
        <Link className=" h1 navbar-brand" to="/">
          COLLECTION
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productDetails/:id">
                ProductDetails
              </Link>
            </li>
          </ul>

          <div className="buttons">
            <Link className="btn btn-outline-dark ml-2" to="/Login">
              <i className="fa fa-sign-in "></i> Login
            </Link>
            <Link className="btn btn-outline-dark ml-2" to="/Register">
              <i className="fa fa-user-plus "></i> Register
            </Link>
            <Link className="btn btn-outline-dark ml-2" to="/Cart">
              <i className="fa fa-shopping-cart "></i> Cart (0)
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = ({ post }) => {
  return (
    <div>
      <Navbar />
      <div className="h1 mt-3 text-center">Latest Product</div>
      <hr />
      <div className="container">
        <div className="row">
          {post.map((newPost, id) => {
            return (
              <div className="col-md-4 mt-2" key={id}>
                <div className="card content">
                  <img
                    className="card-img-top m-auto image pt-2"
                    src={newPost.image}
                    alt="Card_image_cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title p-1 title">{newPost.title}</h5>
                    <div className="overflow-hidden  description">
                      <p className="card-text p-1  ">{newPost.description}</p>
                    </div>
                    <Link
                      to={`/productDetails/${newPost.id}`}
                      className="btn btn-outline-dark mt-3"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

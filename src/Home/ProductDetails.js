import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const ProductDetails = () => {
  // console.log(post);
  const params = useParams();
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();

  const handleAddtoCart = (details) => {
    dispatch(addToCart(details));
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
        document.title = res.data.title;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 border border-outline-dark">
          <img
            src={details.image}
            alt={details.title}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{details.category}</h4>
          <h1 className="display-5">{details.title}</h1>
          <p className="lead font-weight-bold">
            Rating {details.rating && details.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h1 className="display-6 font-weight-bold m-4">$ {details.price}</h1>
          <p className="lead">{details.description}</p>
          <button
            className="btn btn-outline-dark mr-2"
            onClick={() => handleAddtoCart(details)}
          >
            Add to Cart
          </button>
          <Link to="/Cart" className="btn btn-outline-dark">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

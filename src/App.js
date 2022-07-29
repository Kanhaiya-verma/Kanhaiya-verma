import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import About from "./About";
import axios from "axios";
import Products from "./Home/Products";
import ProductDetails from "./Home/ProductDetails";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const response = async () => {
      const resData = await axios.get("https://fakestoreapi.com/products/");
      setPost(resData.data);
    };
    response();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home post={post} />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route
          path="/productDetails/:id"
          element={<ProductDetails post={post} />}
        />
      </Routes>
    </div>
  );
}

export default App;

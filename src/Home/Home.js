import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
import Filter from "./Filter";
const Home = ({ post, filter, setFilter, setPost }) => {
  const filterProduct = (cat) => {
    const updateList = post.filter((filteredData) => {
      return filteredData.category === cat;
    });
    setFilter(updateList);
  };

  const filterProductSelected = (product) => {
    if (product === "All Items") {
      setFilter(post);
    } else {
      const updateList = post.filter((filteredData) => {
        return filteredData.category === product;
      });
      setFilter(updateList);
    }
  };

  return (
    <div>
      <Navbar />
      <Filter filterProductSelected={filterProductSelected} />

      <div className="container mr-1 mt-2">
        <button
          type="button"
          className="btn btn-outline-dark mr-2 "
          onClick={() => setFilter(post)}
        >
          All Items
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mr-2"
          onClick={() => {
            filterProduct("men's clothing");
          }}
        >
          men's clothing
        </button>

        <button
          type="button"
          className="btn btn-outline-dark mr-2"
          onClick={() => {
            filterProduct("jewelery");
          }}
        >
          jewelery
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mr-2"
          onClick={() => {
            filterProduct("electronics");
          }}
        >
          electronics
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mr-2"
          onClick={() => {
            filterProduct("women's clothing");
          }}
        >
          women's clothing
        </button>
      </div>

      <div className="container">
        <div className="row">
          {filter.map((newPost, id) => {
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

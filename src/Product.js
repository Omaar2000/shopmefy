import { Alert } from "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product, showButton = true } = props;
  // const [cart, setCart] = useState([]);
  // const addToCart = () => {
  //   setCart(product);
  //   <Alert>Item Added To Cart ..</Alert>;
  // };
  return (
    <>
      <div className="card p-3 mb-2" style={{ height: 770 }}>
        <img src={product.image} class="img-fluid img-thumbnail d-block" />
        <h5 className="card-title">{product.title}</h5>
        <div className="card-text">
          {product.description.length <= 100
            ? product.description
            : `${product.description.slice(1, 200)} ..........`}
        </div>
        <p className="price">Price: {product.price}</p>
        {showButton && (
          <Link
            className="btn btn-primary mt-auto ms-auto"
            to={`/products/${product.id}`}
          >
            Details
          </Link>
        )}
        {!showButton && (
          <button className="btn btn-primary mt-3 ms-auto">Add</button>
        )}
      </div>
    </>
  );
};

export default Product;

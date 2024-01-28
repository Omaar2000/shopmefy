import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
  const url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${url}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <img src={product.image} alt="d" className="col-6" />
        <div className="ms-4">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-text">{product.description}</div>
          <p className="price">Price: {product.price}</p>
          <button className="btn btn-primary mt-3 ms-auto">Add</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

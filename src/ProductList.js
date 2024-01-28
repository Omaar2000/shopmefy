import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllProducts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductsInCategory = (catName) => {
    fetch(`${url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3 ">Our Products</h2>
      <div className="container ">
        <button className="btn btn-primary" onClick={() => getAllProducts()}>
          All
        </button>

        {categories.map((cat) => (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                getProductsInCategory(cat);

                console.log(cat);
              }}
            >
              {cat}
            </button>
          </>
        ))}
        <div className="row">
          {products.map((product) => (
            <div className="col-3">
              <Product product={product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

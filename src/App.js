import About from "./About";
import NavBar from "./NavBar";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Slider from "./Slider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />

        <Route path="/products/:productID" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

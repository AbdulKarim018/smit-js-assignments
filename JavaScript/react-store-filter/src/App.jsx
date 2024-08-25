import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-6xl">
        <CardList
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </>
  );
}

export default App;

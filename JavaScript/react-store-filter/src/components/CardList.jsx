import React, { useEffect, useMemo, useState } from "react";
import Card from "./Card";

export default function CardList({
  products,
  filteredProducts,
  setFilteredProducts,
}) {
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const [selectedCategory, setSelectedCategory] = useState("");

  const [userPrice, setUserPrice] = useState("");

  // console.log(categories);

  // console.log("selectedCategory ====> ", selectedCategory);
  // console.log("userPrice ===> ", userPrice);

  useEffect(() => {
    let cat = selectedCategory || "";
    const uprice = userPrice || 99999999;

    console.log(cat, uprice);

    if (cat === "Show All") cat = "";

    setFilteredProducts(
      products.filter((p) => p.category.includes(cat) && uprice >= p.price)
    );
  }, [selectedCategory, userPrice]);

  return (
    <div>
      <h2 className="text-2xl font-extrabold py-4">Our Products</h2>
      <div className="w-full flex flex-col items-center py-6 gap-4">
        <input
          value={userPrice}
          onChange={(e) => setUserPrice(e.target.value)}
          type="text"
          placeholder="Search by Price"
          className="input input-bordered w-full max-w-md"
        />
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full max-w-md"
        >
          <option disabled selected>
            Select a category
          </option>
          <option>Show All</option>
          {/* <option>Greedo</option> */}
          {categories.map((c, i) => {
            return (
              <option key={i} value={c.toLowerCase()}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredProducts.length === 0 && <h1>No Products Found</h1>}
        {filteredProducts.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

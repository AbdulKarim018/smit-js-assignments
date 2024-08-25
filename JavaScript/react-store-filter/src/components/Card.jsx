import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function Card({ product }) {
  const { title, price, description, category, image } = product;

  return (
    <div className="relative h-[300px] w-[300px] rounded-md">
      <img
        src={image}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-scale-down"
      />

      <div className="rounded-md absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <div className="badge badge-neutral">{category}</div>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-white line-clamp-2">
          <span className="text-white">Price: </span>${price}
        </p>
        <p className="mt-2 text-sm text-gray-300 line-clamp-2">{description}</p>
        {/* <button className="btn btn-primary">
          <p>Add to Cart</p>
          <FaCartPlus size={20} />
        </button> */}
      </div>
    </div>
  );
}

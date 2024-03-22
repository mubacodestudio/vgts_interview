"use client";

import { Producttype } from "@/data/type";
import Link from "next/link";
import AddToCartButton from "./add-to-cart-button";

const ProductCard = ({ data }: { data: Producttype }) => {
  return (
    <div className="border-2 border-blue-700">
      <Link href={`/product/${data.idMeal}`}>
        <img src={data.strMealThumb} />
      </Link>

      <div className="p-2 border-t-2 border-blue-700 space-y-2">
        <h1 className="">{data.strMeal}</h1>
        <h1 className="my-2 text-2xl font-semibold">₹{data.amount}</h1>
        <AddToCartButton data={data} />
      </div>
    </div>
  );
};

export default ProductCard;

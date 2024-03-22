"use client";

import { Categorytype } from "@/data/type";
import Link from "next/link";

const CategoryCard = ({ data }: { data: Categorytype }) => {
  return (
    <Link
      href={`/product-by-category/${data.strCategory}`}
      className="border-blue-700 border-2"
    >
      <div>
        <img src={data.strCategoryThumb} />
      </div>

      <h1 className="border-t-2 border-blue-700 p-2">{data.strCategory}</h1>
    </Link>
  );
};

export default CategoryCard;

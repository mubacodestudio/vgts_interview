"use client";

import { useStore } from "@/hooks/useStore";
import CategoryCard from "./category-card";
import { Categorytype } from "@/data/type";

const Category = () => {
  const { category } = useStore();

  return (
    <main className="py-5 px-10">
      <h1 className="text-2xl font-semibold">Categories</h1>

      <section className="mt-5 grid grid-cols-4 gap-5">
        {category.map((item: Categorytype) => (
          <CategoryCard data={item} key={item.idCategory} />
        ))}
      </section>
    </main>
  );
};

export default Category;

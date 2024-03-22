"use client";

import { useStore } from "@/hooks/useStore";
import ProductCard from "./product-card";

interface ProductType {
  id: string;
}

const Product = ({ id }: ProductType) => {
  const { product } = useStore();

  const finalProducts = product.filter((item) => item.strCategory === id);

  return (
    <main className="py-5 px-10">
      <h1 className="text-2xl font-semibold">{id}</h1>

      {finalProducts.length <= 0 ? (
        <div className="flex items-center justify-center mt-5 text-red-500 font-bold">
          No products Found try Beef
        </div>
      ) : (
        <section className="mt-5 grid grid-cols-4 gap-5">
          {finalProducts.map((item) => (
            <ProductCard data={item} key={item.idMeal} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Product;

"use client";

import { Producttype } from "@/data/type";
import { useStore } from "@/hooks/useStore";
import AddToCartButton from "./add-to-cart-button";

const ProductDetail = ({ id }: { id: string }) => {
  const { getProductById } = useStore();

  const finalProduct = getProductById(id);

  if (finalProduct) {
    return (
      <main className="py-5 px-10">
        <h1 className="text-2xl font-semibold">
          {finalProduct.strCategory} / {finalProduct.strMeal}
        </h1>

        <section className="mt-5 grid grid-cols-2 gap-5">
          <div>
            <img src={finalProduct.strMealThumb} />
          </div>

          <div>
            <p>{finalProduct.strInstructions}</p>
            <h1 className="my-2 text-2xl font-semibold">
              ₹{finalProduct.amount}
            </h1>
            <div className="mt-5 w-[40%]">
              <AddToCartButton data={finalProduct} />
            </div>
          </div>
        </section>
      </main>
    );
  }

  return <main className="py-5 px-10">No Product Found</main>;
};

export default ProductDetail;

"use client";

import { Producttype } from "@/data/type";
import { useStore } from "@/hooks/useStore";
import IconComponent from "../UI/icon-component";

const AddToCartButton = ({ data }: { data: Producttype }) => {
  const { addToCart, cart, removeFromCart } = useStore();

  const filtedCart = cart.filter((item) => item.idMeal === data.idMeal).length;

  const handleAddToCart = () => {
    addToCart(data);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(data);
  };

  return (
    <>
      {filtedCart >= 1 ? (
        <div className="flex justify-center space-x-1">
          <div
            className="border-2 border-blue-500 p-1 cursor-pointer"
            onClick={handleAddToCart}
          >
            <IconComponent icon="ic:baseline-plus" fontSize={"1.8rem"} />
          </div>
          <h1 className="text-xl border-2 border-blue-500 p-1 w-[100px] text-center">
            {filtedCart}
          </h1>
          <div
            className="border-2 border-blue-500 p-1"
            onClick={handleRemoveFromCart}
          >
            <IconComponent icon="ic:baseline-minus" fontSize={"1.8rem"} />
          </div>
        </div>
      ) : (
        <button
          className="bg-violet-700 text-white p-2 w-full rounded-md"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;

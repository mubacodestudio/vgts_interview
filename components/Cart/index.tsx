"use client";

import { useStore } from "@/hooks/useStore";
import CartCard from "./cart-card";
import { useRouter } from "next/navigation";
import { CartArrtype } from "@/data/type";
import { generateUniqueCode } from "@/utils/generateUniqueCode";

const Cart = () => {
  const route = useRouter();
  const { cart, createOrder } = useStore();

  const uniqueIdMeals = new Set<string>();
  cart.forEach((item) => uniqueIdMeals.add(item.idMeal));

  const newArr: CartArrtype[] = [];
  uniqueIdMeals.forEach((idMeal) => {
    const count = cart.filter((item) => item.idMeal === idMeal).length;
    const { strMeal, amount, strMealThumb } = cart.find(
      (item) => item.idMeal === idMeal
    ) || {
      strMeal: "",
      amount: 0,
      strMealThumb: "",
    };
    newArr.push({ idMeal, strMeal, amount, count, strMealThumb });
  });

  const totalAmount = newArr.reduce(
    (total, item) => total + item.count * item.amount,
    0
  );

  const handlePlaceOrder = () => {
    createOrder({
      orderId: generateUniqueCode(),
      items: newArr,
      total: totalAmount,
    });
    route.push("/order");
  };

  return (
    <main className="py-5 px-10">
      <h1 className="text-2xl font-semibold">Cart Items</h1>

      {cart.length <= 0 ? (
        <div className="mt-5 flex items-center justify-center text-red-500 font-semibold">
          Please Add Products to Cart
        </div>
      ) : (
        <section className="grid grid-cols-3 gap-x-5">
          <div className="col-span-2">
            {newArr.map((item) => (
              <CartCard id={item.idMeal} />
            ))}
          </div>

          <aside className="h-fit">
            <div className="border-2 border-blue-400 p-2">
              <h1 className="text-xl font-semibold">Summary</h1>

              <div className="mt-5 space-y-2">
                {newArr.map((item) => (
                  <div
                    key={item.idMeal}
                    className="flex items-center justify-between"
                  >
                    <h1>{item.strMeal}</h1>
                    <h1>
                      {item.amount} X {item.count} = {item.amount * item.count}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-end">
                Total = ₹{totalAmount}
              </div>
            </div>

            <button
              className="bg-green-600 text-white mt-5 p-2 w-full text-center rounded"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </aside>
        </section>
      )}
    </main>
  );
};

export default Cart;

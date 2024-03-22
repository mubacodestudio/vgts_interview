"use client";

import { useStore } from "@/hooks/useStore";
import OrderCard from "./order-card";

const Order = () => {
  const { order } = useStore();

  return (
    <main className="py-5 px-10">
      <h1 className="text-2xl font-semibold">Orders</h1>

      {order.length <= 0 ? (
        <div className="mt-5 flex items-center justify-center text-red-500 font-semibold">
          No order found
        </div>
      ) : (
        <section className="grid grid-cols-3 gap-x-5 mt-3 space-y-2">
          {order.map((item) => (
            <OrderCard data={item} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Order;

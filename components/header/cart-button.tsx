"use client";

import Link from "next/link";
import IconComponent from "../UI/icon-component";
import { useStore } from "@/hooks/useStore";

const CartButton = () => {
  const { cartCount } = useStore();

  return (
    <Link href={"/cart"} className="relative">
      <IconComponent icon="mdi:cart" fontSize={"1.8rem"} />
      <h1 className="absolute text-xs p-1 bg-red-400 rounded-full -top-3 right-0">
        {cartCount}
      </h1>
    </Link>
  );
};

export default CartButton;

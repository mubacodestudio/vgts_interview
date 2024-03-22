"use client";

import { category } from "@/data/category";
import { product } from "@/data/product";
import { Categorytype, Ordertype, Producttype } from "@/data/type";
import { createContext, useState } from "react";

interface DefaultValueProps {
  category: Categorytype[];
  product: Producttype[];

  //order
  order: Ordertype[];
  createOrder: (data: any) => void;

  //cart
  cart: Producttype[];
  cartCount: number;
  addToCart: (data: Producttype) => void;
  removeFromCart: (data: Producttype) => void;

  //get product by id
  getProductById: (id: string) => Producttype | undefined;
}

const defaultValue: DefaultValueProps = {
  category: category,
  product: product,

  //order
  order: [],
  createOrder: (data: any) => {},

  //cart
  cart: [],
  cartCount: 0,
  addToCart: (data: Producttype) => Promise.resolve(),
  removeFromCart: (data: Producttype) => Promise.resolve(),

  //get product by id
  getProductById: (id: string) => undefined,
};

const StoreContext = createContext(defaultValue);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, _setCategory] = useState<any>(defaultValue.category);
  const [product, _setProduct] = useState<any>(defaultValue.product);
  const [cart, setCart] = useState<any>(defaultValue.cart);
  const [order, setOrder] = useState<any>(defaultValue.order);

  const handleAddToCart = (data: Producttype) => {
    setCart((prev: Producttype[]) => [...prev, data]);
  };

  const handleGetProductById = (id: string) => {
    return product.find((item: Producttype) => item.idMeal === id);
  };

  const handleRemoveFromCart = (data: Producttype) => {
    const indexToRemove = cart.findIndex(
      (item: Producttype) => item.idMeal === data.idMeal
    );
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1);
      setCart(newCart);
    }
  };

  const handleCreateOrder = (data: Ordertype) => {
    setOrder((prev: Ordertype[]) => [...prev, data]);
    setCart([]);
  };

  const values = {
    category,
    product,

    //order
    order,
    createOrder: handleCreateOrder,

    //cart
    cart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    cartCount: cart.length,

    //get product by id
    getProductById: handleGetProductById,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

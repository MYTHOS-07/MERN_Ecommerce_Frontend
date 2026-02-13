"use client";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "@/redux/cart/cartSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import React from "react";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(addToCart(product));

    toast.success(`${product.name} is added to your cart`);
  }

  return (
    <button
      onClick={addProductToCart}
      className="w-full text-white sm:mt-0 bg-primary hover:bg-red-600 focus:ring-4 focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary/60  focus:outline-none  flex items-center justify-center gap-3"
    >
      <MdOutlineAddShoppingCart />
      Add To Cart
    </button>
  );
};

export default AddToCart;



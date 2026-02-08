"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteProduct } from "@/api/products";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteProduct = ({ id }) => {
  const router = useRouter();

  function removeProduct(id) {
    const isConform = confirm("Are you sure ?");

    if (!isConform) return;

    deleteProduct(id)
      .then(() => {
        toast.success("Product Deleted Successfully");
        router.refresh();
      })
      .catch(() => {
        toast.error("Product deletion Failed");
      });
  }

  return (
    <button
      onClick={() => removeProduct(id)}
      className="bg-red-500 text-white p-2 rounded-lg text-xs hover:bg-red-700 cursor-pointer"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteProduct;



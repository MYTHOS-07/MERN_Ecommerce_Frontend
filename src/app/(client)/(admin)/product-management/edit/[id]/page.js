import { getProductsByID } from "@/api/products";
import ProductForm from "@/components/admin/products/form";
import React from "react";

const UpdateProductPage = async ({ params }) => {
  const id = (await params).id;

  const product = await getProductsByID(id);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 md:py-2 px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update Existing data
        </h2>
        <ProductForm product={product} />
      </div>
    </section>
  );
};

export default UpdateProductPage;

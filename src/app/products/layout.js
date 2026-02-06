import ProductsBanner from "@/components/products/ProductsBanner";
import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <section className="py-10">
      <ProductsBanner />
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default ProductsLayout;

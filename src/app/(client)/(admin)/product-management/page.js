import Link from "next/link";
import PaginationPage from "@/components/admin/products/Pagination";
import ProductsTable from "@/components/admin/products/Table";
import React from "react";
import { FaUpload } from "react-icons/fa";
import { getProducts } from "@/api/products";

const ProductManagementPage = async ({ searchParams }) => {
  const PAGE_LIMIT = 10;

  const query = await searchParams;

  const currentPage = query?.page ?? 1;

  const products = await getProducts({
    ...query,
    limit: PAGE_LIMIT,
    offset: PAGE_LIMIT * (currentPage - 1) + 1,
  });

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Product Management</h1>
      <section className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
          <div className="flex items-center flex-1 space-x-4">
            <h5>
              <span className="text-gray-500">All Products:</span>
              <span className="dark:text-white">&nbsp; {products.length}</span>
            </h5>
            <h5>
              <span className="text-gray-500">Total sales:</span>&nbsp;
              <span className="dark:text-white">
                Rs.
                {products.reduce((total, product) => total + product.price, 0)}
              </span>
            </h5>
          </div>
          <div className="flex flex-col shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            <Link
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-600  dark:bg-blue-600 dark:hover:bg-blue-700"
              href="product-management/add"
            >
              Add Product
            </Link>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <FaUpload />
              Export
            </button>
          </div>
        </div>
        <ProductsTable products={products} />
        <PaginationPage currentPage={currentPage} pageLimit={PAGE_LIMIT} />
      </section>
    </>
  );
};

export default ProductManagementPage;

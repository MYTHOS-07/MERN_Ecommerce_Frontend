import DeleteProduct from "./DeleteProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TableHeader from "@/components/products/TableHeader";
import { FaImage } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PRODUCT_MANAGEMENT_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import { format } from "date-fns";

const ProductsTable = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* Table Head */}
        <TableHeader />
        <tbody>
          {products?.map((product) => (
            <tr
              key={product._id}
              className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <th scope="row" className="text-gray-900  dark:text-white">
                <Link
                  href={`${PRODUCTS_ROUTE}/${product._id}`}
                  className="flex items-center px-4 py-2 whitespace-nowrap font-medium"
                >
                  {product.imageUrls?.length > 0 ? (
                    <Image
                      height={400}
                      width={400}
                      src={product.imageUrls[0]}
                      alt={product.name}
                      className="w-8 h-8 mr-3 object-contain"
                    />
                  ) : (
                    <FaImage className="w-8 h-8 mr-3 object-contain text-gray-300" />
                  )}

                  {product.name}
                </Link>
              </th>

              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary dark:text-white">
                  {product.category}
                </span>
              </td>

              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">{product.brand}</div>
              </td>

              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rs. {product.price}
              </td>

              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full" />
                {product.stock ?? 1}
              </td>

              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {format(new Date(product.createdAt), "dd MMM, yyyy")}
              </td>

              <td className="flex items-center justify-center gap-2 px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                  className="bg-primary text-white p-2 rounded-lg text-xs hover:bg-blue-700 cursor-pointer"
                >
                  <FaPencil />
                </Link>

                <DeleteProduct id={product._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

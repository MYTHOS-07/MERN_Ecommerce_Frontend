"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import Spinner from "@/components/Spinner";
import { FaPlus, FaTimes } from "react-icons/fa";
import { addProduct, updateProduct } from "@/api/products";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ProductForm = ({ product }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: product?.name,
      brand: product?.brand,
      price: product?.price,
      stock: product?.stock,
      category: product?.category,
    },
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const images = acceptedFiles.map((file) => ({
      ...file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setImageFiles(acceptedFiles);
    setSelectedImages(images);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function removeImage(index) {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  }

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock ?? 1);

    if (data.description) {
      formData.append("description", data.description);
    }

    if (imageFiles.length > 0) {
      imageFiles.map((file) => formData.append("images", file));
    }

    try {
      if (product) {
        await updateProduct(product._id, formData);
        toast.success("Product updated Successfully");
      } else {
        await addProduct(formData);
        toast.success("Product Created Successfully");
      }
      router.back();
      router.refresh();
    } catch (error) {
      toast.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Product Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white outline-primary focus:ring-3 focus:ring-primary/50"
            placeholder="Product name"
            required
            {...register("name")}
          />
        </div>

        {/* Brand */}
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand *
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white outline-primary focus:ring-3 focus:ring-primary/50"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>

        {/* Price */}
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price *
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white outline-primary focus:ring-3 focus:ring-primary/50"
            placeholder="Rs 10000"
            required
            {...register("price")}
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category *
          </label>
          <input
            type="text"
            id="category"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white outline-primary focus:ring-3 focus:ring-primary/50"
            placeholder="Category"
            required
            {...register("category")}
          />
        </div>

        {/* Stock */}
        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="  bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white outline-primary focus:ring-3 focus:ring-primary/50  "
            placeholder="12"
            {...register("stock")}
          />
        </div>
        {/* Image Dropzone */}
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Images
          </label>
          <div className="flex items-center justify-center w-full">
            <div
              className="flex flex-col items-center justify-center w-full rounded-lg border border-dashed cursor-pointer hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800"
              {...getRootProps()}
            >
              <div className="flex flex-col items-center justify-center text-body py-10">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">.png,.jpg,.jpeg (MAX. 5mb)</p>
              </div>
              <input {...getInputProps({ accept: ".png,.jpg,.jpeg" })} />
            </div>
          </div>

          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 flex items-center gap-4 mt-2"
            >
              <Image
                src={image.url}
                alt=" "
                height={100}
                width={100}
                className="h-16 w-16 rounded-lg object-cover"
              ></Image>
              <h4 className="flex-1">{image.name}</h4>
              <button
                type="button"
                className="p-2 bg-red-500 rounded text-white cursor-pointer"
                onClick={() => removeImage(index)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg dark:bg-gray-700 dark:text-white outline-primary focus:ring-3 focus:ring-primary/50"
            placeholder="Product description"
            {...register("description")}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}
        type="submit"
        className="disabled:opacity-80 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 cursor-pointer"
      >
        <span className="mr-2">
          {product ? "Update Product" : "Add product"}
        </span>
        {loading ? (
          <Spinner className="h-5 w-5 fill-primary" />
        ) : (
          <FaPlus className="h-3 w-3" />
        )}
      </button>
    </form>
  );
};

export default ProductForm;

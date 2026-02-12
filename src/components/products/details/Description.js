"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";
import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = ({ description }) => {
  const { theme } = useSelector((state) => state.userPreferences);
  return (
    <MarkdownPreview
      source={description}
      className="py-16"
      style={{ backgroundColor: "#0000" }}
      wrapperElement={{ "data-color-mode": ` ${theme}` }}
    />
  );
};

export default ProductDescription;

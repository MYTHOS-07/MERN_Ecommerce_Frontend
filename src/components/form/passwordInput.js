"use client";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const PasswordInput = ({ placeholder = "Enter your password", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
        required
        type={showPassword ? "text" : "password"}
        name="password"
        {...props}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        type="button"
        className="absolute right-1 top-4 p-2 cursor-pointer"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;

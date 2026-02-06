"use client";

import { signUp } from "@/api/auth";
import Logo from "@/components/Logo";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    const registerData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
      address: {
        city: data.city,
        province: data.province,
      },
    };

    try {
      const response = await signUp(registerData);

      const token = response.authToken;

      localStorage.setItem("authToken", token);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="flex items-center justify-center md:w-lg px-4  py-4 md:mt-20 lg:mt-1 bg-white dark:bg-slate-800 rounded-2xl m-auto md:mx-30">
      <div className="flex w-full flex-col max-w-96">
        {/* logo */}
        <Logo className="text-2xl" />
        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)}>
          <p className="mt-4 text-base text-gray-900/90">
            Please enter your details to register
          </p>
          <div className="mt-4">
            <label className="font-medium">Name</label>
            <input
              placeholder="Enter your full name"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="name"
              {...register("name")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Email</label>
            <input
              placeholder="Enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Phone Number</label>
            <input
              placeholder="Enter your phone number"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="tel"
              {...register("phone")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Address</label>
            <div className="flex justify-center items-center gap-5">
              <input
                placeholder="city"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("city")}
              />
              <input
                placeholder="province"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
                required
                type="text"
                {...register("province")}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="font-medium">Password</label>
            <input
              placeholder="Enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="password"
              {...register("password")}
            />
          </div>
          <div className="mt-4">
            <label className="font-medium">Confirm Password</label>
            <input
              placeholder="Enter your password to confirm"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="password"
              {...register("confirmPassword")}
            />
          </div>
          <button
            type="submit"
            className="mt-5 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-primary/80"
          >
            Register
          </button>
          <p className="text-center py-5">
            Already have an account?
            <Link
              href={LOGIN_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

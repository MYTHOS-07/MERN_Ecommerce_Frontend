"use client";
import { login } from "@/api/auth";
import Logo from "@/components/Logo";
import { REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    try {
      const response = await login(data);

      const token = response.token;
      localStorage.setItem("authToken", token);

      console.log(response);
      console.log("success");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="flex items-center justify-center md:w-lg px-4 py-10 bg-white dark:bg-slate-800 rounded-2xl m-auto md:mx-30 md:my-20">
      <div className="flex w-full flex-col max-w-96 gap-5">
        {/* logo */}
        <Logo className="text-2xl" />
        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)}>
          <p className="text-base text-gray-900/90">
            Please enter your credentials to login
          </p>
          <div className="mt-5">
            <label className="font-medium">Email</label>
            <input
              placeholder="Enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              name="email"
              {...register("email")}
            />
          </div>
          <div className="mt-3">
            <label className="font-medium">Password</label>
            <input
              placeholder="Enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="password"
              name="password"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-primary/80"
          >
            Login
          </button>
          <p className="text-center py-8">
            Don&apos;t have an account?
            <Link
              href={REGISTER_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";

import Logo from "@/components/Logo";
import React, { useState } from "react";
import Spinner from "@/components/Spinner";

import { resetPassword } from "@/api/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import PasswordInput from "@/components/form/passwordInput";
import { useRouter, useSearchParams } from "next/navigation";
import { LOGIN_ROUTE } from "@/constants/routes";

const ResetPasswordPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);
    resetPassword({ password: data.password, userId, token })
      .then(() => {
        reset();
        toast.success("Password reset successfully");
      })
      .catch(() => {
        toast.error("Password reset Failed");
        router.replace(LOGIN_ROUTE);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-center justify-center md:w-lg px-4 py-10 bg-white dark:bg-slate-800 rounded-2xl mt-30 md:m-auto md:mx-30 md:my-20 ">
      <div className="flex w-full flex-col max-w-96 gap-5">
        {/* logo */}
        <Logo className="text-2xl" />
        {/* Form */}
        <form onSubmit={handleSubmit(submitForm)}>
          <p className="text-base text-gray-900/90">
            Please enter your new Password
          </p>

          <div className="mt-3">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-primary/80 disabled:opacity-80"
          >
            Reset Password
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

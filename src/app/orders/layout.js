"use client";

import React, { useEffect } from "react";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const OrderLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user, router]);

  if (user) return <>{children}</>;

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default OrderLayout;

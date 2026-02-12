"use client";

import React, { useEffect } from "react";
import Spinner from "@/components/Spinner";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ROLE_ADMIN, ROLE_MERCHANT } from "@/constants/roles";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);

    const adminViewRoles = [ROLE_ADMIN, ROLE_MERCHANT];

    if (!user.roles.some((role) => adminViewRoles.includes(role))) {
      router.push(DASHBOARD_ROUTE);
    }
  }, [user, router]);

  if (user)
    return (
      <>
        <div>{children}</div>
      </>
    );

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default AdminLayout;

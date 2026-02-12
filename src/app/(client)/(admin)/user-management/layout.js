"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ROLE_ADMIN } from "@/constants/roles";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import Spinner from "@/components/Spinner";
import React, { useEffect } from "react";

const UserManagementLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);

    const adminViewRoles = [ROLE_ADMIN];

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

export default UserManagementLayout;

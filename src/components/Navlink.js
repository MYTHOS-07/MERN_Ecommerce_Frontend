"use client";

import Link from "next/link";
import React from "react";
import navLinks from "@/constants/navLinks";
import { HOME_ROUTE } from "@/constants/routes";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navLink) => {
        const isActive =
          pathname == navLink.route ||
          (navLink.route !== HOME_ROUTE && pathname.startsWith(navLink.route));

        return (
          <Link
            key={navLink.route}
            href={navLink.route}
            className={`${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300"} font-medium hover:text-primary dark:hover:text-primary`}
          >
            {navLink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLink;

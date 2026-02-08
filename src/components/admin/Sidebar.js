"use client";

import React from "react";
import Logo from "../Logo";
import sidebarLinks from "@/constants/Sidebar";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="py-14 fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 shadow"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto shadow dark:bg-gray-950">
          <div className="px-3 py-3">
            <Logo />
          </div>

          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((items) => {
              const isActive = pathname.startsWith(items.route);
              return (
                <li key={items.route}>
                  <Link
                    href={items.route}
                    className={`flex items-center px-2 py-1.5 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 group ${isActive ? "bg-primary/10 text-primary" : ""}`}
                  >
                    {items.Icon}
                    <span className="ms-3">{items.label}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                href="#"
                className="gap-3 flex items-center justify-center px-2 py-1.5 rounded-md w-full bg-red-600 hover:bg-red-700 text-white group"
              >
                <FaArrowRightFromBracket />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;

import Image from "next/image";
import React from "react";
import bg from "@/assets/images/auth-bg.jpg";

const AuthLayout = ({ children }) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={bg}
        alt="auth-bg"
        height={800}
        width={1200}
        className="h-full w-full absolute top-0 left-0 object-cover -z-1 select-none"
      ></Image>

      <div className="container max-auto p-3 md:p-6 ">{children}</div>
    </section>
  );
};

export default AuthLayout;

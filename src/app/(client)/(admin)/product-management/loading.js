import React from "react";
import Spinner from "@/components/Spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner className="h-12 w-12 fill-primary" />
    </div>
  );
};

export default loading;

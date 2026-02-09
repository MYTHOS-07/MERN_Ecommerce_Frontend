"use client";

import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { ORDER_PAGE_ROUTE } from "@/constants/routes";
import { confirmPayment } from "@/api/orders";
import { toast } from "react-toastify";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const OrderPayment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = searchParams?.get("status");

    confirmPayment(params.id, status)
      .then(() => {
        toast.success("Order payment Successful");
      })
      .catch(() => {
        toast.error("Order payment failed");
      })
      .finally(() => {
        router.push(ORDER_PAGE_ROUTE);

        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-20 w-20 fill-primary" />
      </div>
    );

  return <></>;
};

export default OrderPayment;

"use client";

import { getOrdersByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import Spinner from "@/components/Spinner";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrdersByUser()
      .then((data) => {
        setOrders(data || []);
      })
      .catch((e) => toast.error(e?.response?.data || "Failed to load orders"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-20 w-20 fill-primary" />
      </div>
    );

  return (
    <section className="py-24 relative">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10">
          Your Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          orders.map((order) => <OrderCard key={order._id} order={order} />)
        )}
      </div>
    </section>
  );
};

export default OrdersPage;

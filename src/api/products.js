import config from "@/config/config";
import axios from "axios";

export const getProducts = async (searchParams) => {
  try {
    const { name, sort, min, max, category, brands } =
      (await searchParams) ?? "";

    const response = await axios.get(
      `${config.apiUrl}/api/products?sort=${sort ?? ""}&min=${min ?? ""}&max=${max ?? ""}&category=${category ?? ""}&brand=${brands ?? ""}&name=${name ?? ""}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const addProduct = async (data) => {
  const authToken = localStorage.getItem("authToken");

  try {
    const response = await axios.post(`${config.apiUrl}/api/products`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

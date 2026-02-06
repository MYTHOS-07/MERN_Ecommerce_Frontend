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

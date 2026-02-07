import config from "@/config/config";
import axios from "axios";

export async function login(data) {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

  console.log(response.data);

  return response.data;
}

export async function signUp(data) {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);

  return response.data;
}

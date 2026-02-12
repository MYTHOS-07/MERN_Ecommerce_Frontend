import config from "@/config/config";
import axios from "axios";

export async function login(data) {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);



  return response.data;
}

export async function signUp(data) {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);

  return response.data;
}

export async function forgotPassword({ email }) {
  const response = await axios.post(
    `${config.apiUrl}/api/auth/forgot-password`,
    { email },
  );

  return response.data;
}

export async function resetPassword({ userId, token, password }) {
  const response = await axios.post(
    `${config.apiUrl}/api/auth/reset-password?userId=${userId}&token=${token}`,
    { password },
  );

  return response.data;
}

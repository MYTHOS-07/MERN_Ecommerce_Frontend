import { login, signUp } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

// first parameter name of function and second is the function
export const loginUser = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);

      localStorage.setItem("authToken", result.authToken);

      return result;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const registerUser = createAsyncThunk(
  "signUp",
  async (data, { rejectWithValue }) => {
    try {
      const result = await signUp(data);

      localStorage.setItem("authToken", result.authToken);

      return result;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

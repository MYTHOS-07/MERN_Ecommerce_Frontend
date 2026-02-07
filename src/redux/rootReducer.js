import { combineReducers } from "@reduxjs/toolkit";
import userPreferencesReducer from "./userPreferences/userPreferencesSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreferences: userPreferencesReducer,
});

export default rootReducer;

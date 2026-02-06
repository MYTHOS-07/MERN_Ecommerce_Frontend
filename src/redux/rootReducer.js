import { combineReducers } from "@reduxjs/toolkit";
import userPreferencesReducer from "./userPreferences/userPreferencesSlice";

const rootReducer = combineReducers({
  userPreferences: userPreferencesReducer,
});

export default rootReducer;

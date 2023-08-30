import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/features/reducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

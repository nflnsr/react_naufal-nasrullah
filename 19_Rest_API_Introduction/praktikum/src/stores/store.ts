import { configureStore } from "@reduxjs/toolkit";
import productData from "./products-slice";

export const store = configureStore({
  reducer: {
    products: productData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

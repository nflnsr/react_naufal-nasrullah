import { configureStore } from "@reduxjs/toolkit";
import productData from "./product-slice";
import productsData from "./products-slice";

export const store = configureStore({
  reducer: {
    products: productsData,
    product: productData,
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

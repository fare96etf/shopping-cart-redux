import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-state/cart-slice";
import { productsSlice } from "./product-state/product-slice";

export const store = configureStore({
    reducer: {
      cartReducer: cartSlice.reducer,
      productsReducer: productsSlice.reducer
    }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app.store'
import { IProduct } from "../../models/app.models";
import { products } from "../../storage/storage";

export interface ProductsState {
    products: IProduct[];
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success'
  }
  
  export const initialState: ProductsState = {
    products: products,
    error: null,
    status: 'pending'
  }

  export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<{ product: IProduct }>) => {
            return {
              ...state,
              products: state.products.concat([action.payload.product]) 
            }
        },
        removeProduct: (state, action: PayloadAction<{ id: number }>) => {
            return {
              ...state,
              products: state.products.filter((item) => item.id !== action.payload.id)
            }
        }
    },
  })
  
  export const { addProduct, removeProduct } = productsSlice.actions
  
  export const selectProducts = (state: RootState) => state.productsReducer.products;
  
  export default productsSlice.reducer
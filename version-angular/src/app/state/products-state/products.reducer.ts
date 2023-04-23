import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct, addProductToCart } from './products.actions';
import { IProduct } from 'src/app/models/app.models';
import { products } from 'src/app/storage/storage';

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

export const productsReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => ({...state, products: state.products.concat(product) })),
  on(removeProduct, (state, { id }) => ({...state, products: products.filter((item) => item.id != id)})),
  on(addProductToCart, (state) => ({...state})) // to be done
);
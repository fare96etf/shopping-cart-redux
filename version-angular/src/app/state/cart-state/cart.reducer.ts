import { createReducer, on } from '@ngrx/store';
import { removeProductFromCart } from './cart.actions';
import { ICartItem } from 'src/app/models/app.models';
import { cart } from 'src/app/storage/storage';

export interface CartState {
  cart: ICartItem[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'
}

export const initialState: CartState = {
  cart: cart,
  error: null,
  status: 'pending'
}

export const cartReducer = createReducer(
  initialState,
  on(removeProductFromCart, (state, { id }) => ({...state, cart: state.cart.filter((item) => item.product.id != id)}))
);
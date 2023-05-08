import { createReducer, on } from '@ngrx/store';
import { addProductToCart, removeProductFromCart } from './cart.actions';
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
  on(addProductToCart, (state, { product, quantity }) =>
    {
      const existingProductInCart = state.cart.find(cartItem => cartItem.product.id === product.id);

      if (existingProductInCart) {
        return {
          ...state, 
          cart: state.cart.map(cartItem => ({...cartItem}))
                          .map(cartItem => {
                            if (cartItem.product.id === product.id) {
                              return {
                                ...cartItem,
                                quantity: cartItem.quantity + quantity
                              }
                            }
                            else {
                              return cartItem;
                            }
                          })  
        }
      }
      else {
        return {
          ...state, cart: state.cart.concat([{ product: product, quantity: quantity, available: true }])
        }
      }
    }),
  on(removeProductFromCart, (state, { id }) => ({...state, cart: state.cart.filter((item) => item.product.id != id)}))
);
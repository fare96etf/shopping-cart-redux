import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app.store'
import { ICartItem, IProduct } from '../../models/app.models';
import { cart } from '../../storage/storage';

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

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<{ product: IProduct, quantity: number }>) => {
        const existingProductInCart = state.cart.find(cartItem => cartItem.product.id === action.payload.product.id);

        if (existingProductInCart) {
          return {
            ...state, 
            cart: state.cart.map(cartItem => ({...cartItem}))
                            .map(cartItem => {
                              if (cartItem.product.id === action.payload.product.id) {
                                return {
                                  ...cartItem,
                                  quantity: cartItem.quantity + action.payload.quantity
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
            ...state, cart: state.cart.concat([{ product: action.payload.product, quantity: action.payload.quantity, available: true }])
          }
        }
    },
    removeProductFromCart: (state, action: PayloadAction<{ id: number }>) => {
        return { ...state,  cart: state.cart.filter((item) => item.product.id !== action.payload.id) }
    },
    setProductInCartToSoldOut: (state, action: PayloadAction<{ id: number }>) => {
        return {
          ...state,
          cart: state.cart.map(cartItem => ({...cartItem}))
                          .map(cartItem => {
                            if (cartItem.product.id === action.payload.id) {
                              return {
                                ...cartItem,
                                available: false
                              }
                            }
                            else {
                              return cartItem;
                            }
                          }) 
        }
    },
  },
})

export const { addProductToCart, removeProductFromCart, setProductInCartToSoldOut } = cartSlice.actions

export const selectCart = (state: RootState) => state.cartReducer.cart;

export default cartSlice.reducer
import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/models/app.models';
import { cart } from 'src/app/storage/storage';

enum cartActions {
    addProductToCart = "[Cart] Add product to cart",
    removeProductFromCart = "[Cart] Remove product from cart",
    setProductInCartToSoldOut = "[Cart] Set product in cart to sold out"
};

export const addProductToCart = createAction(cartActions.addProductToCart, props<{ product: IProduct, quantity: number }>());
export const removeProductFromCart = createAction(cartActions.removeProductFromCart, props<{ id: number }>());
export const setProductInCartToSoldOut = createAction(cartActions.setProductInCartToSoldOut, props<{ id: number }>());
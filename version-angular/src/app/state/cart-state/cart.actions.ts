import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/models/app.models';

export const addProductToCart = createAction('[Cart] Add product to cart', props<{ product: IProduct, quantity: number }>());
export const removeProductFromCart = createAction('[Cart] Remove product from cart', props<{ id: number }>());
export const setProductInCartToSoldOut = createAction('[Cart] Set product in cart to sold out', props<{ id: number }>());
import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/app.models";

export const addProduct = createAction('Add product', props<{ product: IProduct }>());
export const removeProduct = createAction('Remove product', props<{ id: number }>());
export const addProductToCart = createAction('Add product to cart', props<{ id: number, quantity: number }>());
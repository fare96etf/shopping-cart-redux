import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/app.models";

export const addProduct = createAction('[Products] Add product', props<{ product: IProduct }>());
export const removeProduct = createAction('[Products] Remove product', props<{ id: number }>());

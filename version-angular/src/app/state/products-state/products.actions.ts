import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/models/app.models";

enum productActions {
    addProduct = "[Product] Add product",
    removeProduct = "[Products] Remove product"
};

export const addProduct = createAction(productActions.addProduct, props<{ product: IProduct }>());
export const removeProduct = createAction(productActions.removeProduct, props<{ id: number }>());

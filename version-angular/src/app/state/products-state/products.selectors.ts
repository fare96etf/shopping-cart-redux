import { createSelector } from '@ngrx/store';
import { ProductsState } from "./products.reducer";
import { AppState } from '../app.state';

export const selectProductsState = (state: AppState) => state.products;

export const selectProducts = createSelector(
    selectProductsState,
    (state: ProductsState) => state.products
);
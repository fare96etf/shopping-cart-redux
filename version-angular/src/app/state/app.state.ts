import { CartState } from "./cart-state/cart.reducer";
import { ProductsState } from "./products-state/products.reducer";

export interface AppState {
    cart: CartState,
    products: ProductsState
}
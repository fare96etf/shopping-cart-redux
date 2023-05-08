import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProductToCart, removeProductFromCart } from '../../state/cart-state/cart.actions';
import { selectCart } from 'src/app/state/cart-state/cart.selectors';
import { selectProducts } from 'src/app/state/products-state/products.selectors';
import { IProduct } from 'src/app/models/app.models';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart$: any;
  products$: any;
 
  constructor(private store: Store<any>) {
    this.cart$ = this.store.select(selectCart);
    this.products$ = this.store.select(selectProducts);
  }

  addProductToCart(product: IProduct) {
    this.store.dispatch(addProductToCart({ product: product, quantity: 1}));
  }
 
  removeProductFromCart(id: number) {
    this.store.dispatch(removeProductFromCart({ id: id}));
  }
}

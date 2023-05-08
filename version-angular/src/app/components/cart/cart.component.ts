import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProductToCart, removeProductFromCart } from '../../state/cart-state/cart.actions';
import { selectCart } from 'src/app/state/cart-state/cart.selectors';
import { selectProducts } from 'src/app/state/products-state/products.selectors';
import { ICartItem, IProduct } from 'src/app/models/app.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart$: Observable<ICartItem[]>;
 
  constructor(private store: Store<any>) {
    this.cart$ = this.store.select(selectCart);
  }
 
  removeProductFromCart(id: number) {
    this.store.dispatch(removeProductFromCart({ id: id}));
  }
}

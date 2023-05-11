import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeProductFromCart } from '../../state/cart-state/cart.actions';
import { selectCart } from 'src/app/state/cart-state/cart.selectors';
import { ICartItem } from 'src/app/models/app.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html'
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

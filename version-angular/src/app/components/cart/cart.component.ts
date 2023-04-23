import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeProductFromCart } from '../../state/cart-state/cart.actions';
import { selectCart } from 'src/app/state/cart-state/cart.selectors';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: any;
 
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select(selectCart);
  }
 
  removeProductFromCart() {
    this.store.dispatch(removeProductFromCart({ id: 1}));
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart-state/cart.reducer';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { productsReducer } from './state/products-state/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      cart: cartReducer,
      products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

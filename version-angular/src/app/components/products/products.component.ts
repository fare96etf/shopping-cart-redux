import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { IProduct } from "src/app/models/app.models";
import { addProduct } from "src/app/state/products-state/products.actions";
import { selectProducts } from "src/app/state/products-state/products.selectors";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
  })

  export class ProductsComponent {
    products$: any;
    newProduct: IProduct | undefined;

    constructor(private store: Store<any>) {
      this.products$ = this.store.select(selectProducts);
    }

    addnewProduct() {
      if (this.newProduct) {
        console.log("radil");
        this.store.dispatch(addProduct({ product: this.newProduct as IProduct }));
        this.newProduct = undefined;
      }
    } 

  }
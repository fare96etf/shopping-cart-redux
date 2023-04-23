import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectProducts } from "src/app/state/products-state/products.selectors";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
  })

  export class ProductsComponent implements OnInit {
    products$: any;

    constructor(private store: Store<any>) {}

    ngOnInit(): void {
      this.products$ = this.store.select(selectProducts);
    }
  }
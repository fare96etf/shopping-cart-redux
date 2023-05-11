import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IProduct } from "src/app/models/app.models";
import { addProductToCart, setProductInCartToSoldOut } from "src/app/state/cart-state/cart.actions";
import { addProduct, removeProduct } from "src/app/state/products-state/products.actions";
import { selectProducts } from "src/app/state/products-state/products.selectors";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html'
  })

  export class ProductsComponent {
    products$: Observable<IProduct[]>;
    productForm: FormGroup;
    currentId: number = 6;

    constructor(private store: Store<any>, private formBuilder: FormBuilder) {
      this.products$ = this.store.select(selectProducts);
      this.productForm = this.formBuilder.group({
        name: '',
        description: '',
        price: -1
      });
    }

    addProductToCart(product: IProduct) {
      this.store.dispatch(addProductToCart({ product: product, quantity: 1}));
    }

    addnewProduct() {
      if (this.productForm.value.price as number > 0 
          && (this.productForm.value.name as string).trim().length > 0
          && (this.productForm.value.description as string).trim().length > 0) {

        var newProduct: IProduct = {
          id: this.currentId,
          name: this.productForm.value.name as string,
          description: this.productForm.value.description as string,
          price: this.productForm.value.price as number
        };

        this.currentId = this.currentId + 1;
        this.store.dispatch(addProduct({ product: newProduct }));
      }
    }
    
    removeProduct(id: number) {
      this.store.dispatch(removeProduct({ id: id }));
      this.store.dispatch(setProductInCartToSoldOut({ id: id }));
    }

  }
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions) {}

    // addProduct$ = createEffect(() => this.actions$.pipe(
    //     ofType('[Products] Add product'),
        
    // )
    // ); 
}
import { createAction, props } from '@ngrx/store';

export const removeProductFromCart = createAction('Remove product from cart', props<{ id: number }>());
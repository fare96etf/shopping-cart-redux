import { ICartItem, IProduct } from "../models/app.models";

export var products: IProduct[] = [
    { id: 1, name: 'Product 1', description: 'Food product', price: 5 },
    { id: 2, name: 'Product 2', description: 'Beverage product', price: 3 },
    { id: 3, name: 'Product 3', description: 'Health product', price: 25 },
    { id: 4, name: 'Product 4', description: 'Home appliance product', price: 520.50 },
    { id: 5, name: 'Product 5', description: 'Fashion product', price: 33.99 }
];

export var cart: ICartItem[] = [
    { product: products[0], quantity: 10, available: true },
    { product: products[1], quantity: 8, available: true }
];
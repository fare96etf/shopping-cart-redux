export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number
}

export interface ICartItem {
    product: IProduct,
    quantity: number,
    available: boolean
}
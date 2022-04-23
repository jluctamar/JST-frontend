export interface CartItem {
    dishName: string;
    price: number;
    quantity: number;
    imgSrc?: string;
}

export interface OrderItem {
    username: string; // unique identifier 
    cartItems: CartItem[]
    total: number;
}
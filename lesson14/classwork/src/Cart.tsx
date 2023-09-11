import { FC } from 'react'

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

interface Props {
    cartItems: CartItem[]
    removeFromCart: (id: number) => void
}

export const Cart: FC<Props> = ({ cartItems, removeFromCart }: any) => {
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map((item: any) => (
                <div key={item.id}>
                    <span>
                        {item.name} - ${item.price} x {item.quantity}
                    </span>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

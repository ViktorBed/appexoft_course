import { FC, useState } from 'react'
import { Cart, CartItem } from './Cart'
import { Product, ProductList } from './ProductList'

export const App: FC = () => {
    const [product] = useState<Product[]>([
        { id: 1, name: 'IPhone 10', price: 1000 },
        { id: 2, name: 'IPhone 11', price: 1100 },
        { id: 3, name: 'IPhone 12', price: 1200 },
    ])
    const [cartItems, setCartItem] = useState<CartItem[]>([])
    const addToCart = (product: Product) => {
        const existingItem = cartItems.find(item => item.id === product.id)
        if (existingItem) {
            setCartItem(prevItems =>
                prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        } else {
            setCartItem((prevItems: any) => [...prevItems, { ...product, quantity: 1 }])
        }
    }
    const removeFromCart = (id: number) => {
        setCartItem(prevItems => prevItems.filter(item => item.id !== id))
    }

    return (
        <div>
            <ProductList products={product} addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    )
}

import { FC } from 'react'
import { Product } from './ProductList'

interface Props {
    product: Product
    addToCart: (product: Product) => void
}

export const ProductItem: FC<Props> = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(product)
    }
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to card</button>
        </div>
    )
}

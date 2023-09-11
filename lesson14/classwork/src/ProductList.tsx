import { ProductItem } from './ProductItem'

export interface Product {
    id: number
    name: string
    price: number
}

interface Props {
    products: Product[]
    addToCart: (product: Product) => void
}

export const ProductList: React.FC<Props> = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    )
}

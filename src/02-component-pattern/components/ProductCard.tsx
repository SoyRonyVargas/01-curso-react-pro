import { ProductButtons } from './ProductButtons'
import styles from '../styles/styles.module.css'
import { ProductCardContext } from '../context'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import useProduct from '../hooks/useProduct'
import { ProductCardProps } from '../types'

const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct()

    return (
        <ProductCardContext.Provider value={{
            product: product!,
            increaseBy,
            counter,
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </ProductCardContext.Provider>
    )
}

ProductCard.Buttons = ProductButtons
ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage

export default ProductCard
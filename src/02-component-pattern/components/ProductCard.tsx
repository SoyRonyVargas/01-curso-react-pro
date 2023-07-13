import { ProductButtons } from './ProductButtons'
import styles from '../styles/styles.module.css'
import { ProductCardContext } from '../context'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import useProduct from '../hooks/useProduct'
import { ProductCardProps } from '../types'

const ProductCard = ({ children, product , className , style , onChange }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({
        product: product!,
        onChange,
    })

    return (
        <ProductCardContext.Provider value={{
            product: product!,
            increaseBy,
            counter,
        }}>
            <div style={style} className={`${styles.productCard} ${className ?? ""} `}>
                {children}
            </div>
        </ProductCardContext.Provider>
    )
}

ProductCard.Buttons = ProductButtons
ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage

export default ProductCard
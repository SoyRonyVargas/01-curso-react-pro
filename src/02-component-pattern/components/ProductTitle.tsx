import styles from '../styles/styles.module.css'
import { ProductCardContext } from "../context"
import { ProductTitleProps } from "../types"
import { useContext, FC } from 'react'

export const ProductTitle: FC<ProductTitleProps> = ({ title , className }) => {
    
    const { product } = useContext(ProductCardContext)

    const titleFinal = product?.title ?? ( title ?? "Sin titulo" )

    return (
        <span className={`${styles.productDescription} ${className ?? ""}`}>
            {titleFinal}
        </span>
    )

}
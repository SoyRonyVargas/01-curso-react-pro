import styles from '../styles/styles.module.css'
import { ProductCardContext } from "../context"
import { ProductImageProps } from '../types'
import { useContext } from 'react'

export const ProductImage = ({ img , className }: ProductImageProps) => {

    const { product } = useContext(ProductCardContext)

    const imgComponent = product?.img ?? (img ?? "")

    return (
        <img className={`${styles.productImg} ${className ?? ""}`} src={imgComponent} alt="Coffee Mug" />
    )

}

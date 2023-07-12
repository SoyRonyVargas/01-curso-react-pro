import styles from '../styles/styles.module.css'
import { ProductCardContext } from "../context"
import { useContext } from 'react'

export const ProductImage = ({ img }: { img?: string }) => {

    const { product } = useContext(ProductCardContext)

    const imgComponent = product?.img ?? (img ?? "")

    return (
        <img className={styles.productImg} src={imgComponent} alt="Coffee Mug" />
    )

}

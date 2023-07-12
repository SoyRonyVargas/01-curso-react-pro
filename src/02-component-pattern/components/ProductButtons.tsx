import styles from '../styles/styles.module.css'
import { ProductCardContext } from '../context'
import { FC, useContext } from 'react'

export const ProductButtons: FC = () => {

    const { counter, increaseBy } = useContext(ProductCardContext)

    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
                -
            </button>
            <span className={styles.countLabel}>
                {counter}
            </span>
            <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
                +
            </button>
        </div>
    )

}

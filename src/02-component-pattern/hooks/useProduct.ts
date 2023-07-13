import { useState } from "react"
import { Product, ProductCardProps } from "../types"

type PickedCardProps = Pick<ProductCardProps, 'onChange'>

type Config = PickedCardProps & {
    product: Product
}

const useProduct = ( config: Config ) => {
    
    const { onChange , product } = config 

    const [ counter , setCounter ] = useState(0)

    const increaseBy = ( value : number ) => {
        const newValue = Math.max( counter + value , 0 )
        
        setCounter(newValue)

        onChange && onChange({
            count: newValue,
            product
        })

    }

    return {
        counter,
        increaseBy
    }
}

export default useProduct
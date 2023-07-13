import { Product, ProductCardProps } from "../types"
import { useEffect, useRef, useState } from "react"

type PickedCardProps = Pick<ProductCardProps, 'onChange'>

type Config = PickedCardProps & {
    product: Product
    value: number
}

const useProduct = ( config: Config ) => {
    
    const { onChange , product , value } = config 

    const [ counter , setCounter ] = useState(value)
    // const isControlled = useRef( Boolean(onChange) )

    useEffect( () => {
        
        setCounter(value)

    }, [value])

    const increaseBy = ( value : number ) => {

        // if( isControlled.current ) return onChange!({
        //     count: value,
        //     product
        // });
        
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
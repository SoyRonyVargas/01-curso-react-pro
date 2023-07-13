import React, { useState } from 'react'
import { OnChangeCard, ProductCart } from '../types'

const useShoppingCart = () => {

    const [cart, setCart] = useState<ProductCart[]>([])

    const onProductChange: OnChangeCard = (args) => {

        const { count } = args

        const productId = args.product.id;

        const productExists = cart.find((item) => item.product.id === productId);

        if (!productExists && count > 0) {

            setCart((prevCart) => [...prevCart, args]);

            return

        }

        if (!productExists && count > 0) {

            setCart((prevCart) => [...prevCart, args]);

            return

        }

        if (!productExists && count === 0) return

        const index = cart.findIndex((item) => item.product.id === productId);

        const newCart = [...cart]

        newCart[index] = {
            ...productExists!,
            count: args.count
        }

        setCart(newCart.filter(p => p.count !== 0))

    }
    return {
        onProductChange,
        cart,
    }
}

export default useShoppingCart
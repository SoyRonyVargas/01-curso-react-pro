import { createContext } from 'react'
import { ProductCardContextType } from '../types'

export const ProductCardContext = createContext<ProductCardContextType>({} as ProductCardContextType)

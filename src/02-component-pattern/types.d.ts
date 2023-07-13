import { CSSProperties } from "react"

type CustomStyleAtributtes = {
    style?: CSSProperties
    className?: string
}

export type ProductCardContextType = {
    increaseBy: (value: number) => void
    product: Product
    counter: number
}

export type Product = {
    title: string
    img?: string
    id: string
}

export type ProductCart = {
    product: Product
    count: number
}

export type ProductTitleProps = CustomStyleAtributtes & {
    title?: string
}

export type ProductImageProps = CustomStyleAtributtes & {
    img?: string 
}

type OnChangeArgs = {
    product: Product
    count: number
}

export type ProductCardProps = CustomStyleAtributtes & {
    onChange?: ( args: OnChangeArgs ) => void
    children?: ReactNode[] | ReactNode
    Title?: JSX.Element
    product?: Product
    value?: number
}

export type OnChangeCard = ( args: OnChangeArgs ) => void
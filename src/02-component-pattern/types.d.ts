
type CustomStyleAtributtes = {
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

export type ProductTitleProps = CustomStyleAtributtes & {
    title?: string
}

export type ProductImageProps = CustomStyleAtributtes & {
    img?: string 
}

export type ProductCardProps = CustomStyleAtributtes & {
    children?: ReactNode[] | ReactNode
    Title?: JSX.Element
    product?: Product
}
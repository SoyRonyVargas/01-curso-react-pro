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

export type ProductTitleProps = {
    title?: string
}

export type ProductCardProps = {
    children?: ReactNode[] | ReactNode
    Title?: JSX.Element
    product?: Product
}
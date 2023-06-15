import { Dispatch, SetStateAction } from 'react'

export interface ProductData {
  id: number
  title: string
  price: number
  images: string[]
  category?: {
    name: string
  }
  description?: string
}

export interface CardProps {
  data: ProductData
}

export interface OrderCardProps extends ProductData {
  handleDelete?: (id: number) => void
  productQuantities?: { [productId: number]: number }
  setProductQuantities?: Dispatch<
    SetStateAction<{ [productId: number]: number }>
  >
  quantity?: number
}

export interface Order {
  date?: number
  products?: ProductData[]
  totalProducts: number
  totalPrice: number
}

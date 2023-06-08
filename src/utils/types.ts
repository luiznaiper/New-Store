export interface CardProps {
  data: {
    id: number
    title: string
    price: number
    images: string[]
    category: {
      name: string
    }
    description: string
  }
}

export interface OrderCardProps {
  id: number
  title: string
  images: string[]
  price: number
  handleDelete: (id: number) => void
}

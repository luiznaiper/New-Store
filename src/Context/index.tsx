import { ReactNode, createContext, useState } from 'react'
import { CardProps } from '../Components/Card'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
  productToShow: CardProps['data'] | null
  setProductToShow: React.Dispatch<
    React.SetStateAction<CardProps['data'] | null>
  >
  cartProducts: Array<CardProps['data']>
  setCartProducts: React.Dispatch<React.SetStateAction<CardProps['data'][]>>
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  count: 0,
  setCount: () => {
    //placeholder function
  },
  isProductDetailOpen: false,

  openProductDetail: () => {
    //placeholder function
  },
  closeProductDetail: () => {
    //placeholder function
  },
  productToShow: {
    title: '',
    price: 0,
    images: [],
    category: {
      name: '',
    },
    description: '',
  },
  setProductToShow: () => {
    //placeholder function
  },
  cartProducts: [],
  setCartProducts: () => {
    //placeholder function
  },
})

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState<CardProps['data'] | null>(
    null
  )
  const [cartProducts, setCartProducts] = useState<CardProps['data'][]>([])

  const openProductDetail = () => {
    setIsProductDetailOpen(true)
  }

  const closeProductDetail = () => {
    setIsProductDetailOpen(false)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

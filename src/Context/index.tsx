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
  productToShow: CardProps['data'] | null | object
  setProductToShow: React.Dispatch<React.SetStateAction<object>>
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
  productToShow: {},
  setProductToShow: () => {
    //placeholder function
  },
})

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

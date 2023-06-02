import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
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
})

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  const openProductDetail = () => {
    setIsProductDetailOpen(true)
  }

  const closeProductDetail = () => {
    setIsProductDetailOpen(false)
  }
  console.log(isProductDetailOpen)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

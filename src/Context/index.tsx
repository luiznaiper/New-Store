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
  isSideMenuOpen: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  count: 0,
  setCount: () => {
    undefined
  },
  isProductDetailOpen: false,

  openProductDetail: () => {
    undefined
  },
  closeProductDetail: () => {
    undefined
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
    undefined
  },
  cartProducts: [],
  setCartProducts: () => {
    undefined
  },
  isSideMenuOpen: false,
  openSideMenu: () => {
    undefined
  },
  closeSideMenu: () => {
    undefined
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
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const openProductDetail = () => {
    setIsProductDetailOpen(true)
  }

  const closeProductDetail = () => {
    setIsProductDetailOpen(false)
  }

  const openSideMenu = () => {
    setIsSideMenuOpen(true)
  }

  const closeSideMenu = () => {
    setIsSideMenuOpen(false)
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
        isSideMenuOpen,
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

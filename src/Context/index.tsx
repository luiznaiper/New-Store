import { ReactNode, createContext, useState } from 'react'
import { Order, ProductData } from '../utils/types'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContextType = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
  productToShow: ProductData | null
  setProductToShow: React.Dispatch<React.SetStateAction<ProductData | null>>
  cartProducts: Array<ProductData>
  setCartProducts: React.Dispatch<React.SetStateAction<ProductData[]>>
  isSideMenuOpen: boolean
  order: Order[]
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>
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
    id: 0,
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
  order: [],
  setOrder: () => {
    undefined
  },
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
  const [productToShow, setProductToShow] = useState<ProductData | null>(null)
  const [cartProducts, setCartProducts] = useState<ProductData[]>([])
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [order, setOrder] = useState<Order[]>([])

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
        order,
        setOrder,
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

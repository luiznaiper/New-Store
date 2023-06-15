import { ReactNode, createContext, useEffect, useState } from 'react'
import { Order, ProductData } from '../utils/types'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContextType = {
  items: Array<ProductData>
  setItems: React.Dispatch<React.SetStateAction<ProductData[]>>
  filteredItems: Array<ProductData>
  setfilteredItems: React.Dispatch<React.SetStateAction<ProductData[]>>
  searchProduct: string
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>
  searchCategory: string
  setSearchcategory: React.Dispatch<React.SetStateAction<string>>
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
  items: [],
  setItems: () => undefined,
  filteredItems: [],
  setfilteredItems: () => undefined,
  searchProduct: '',
  setSearchProduct: () => undefined,
  searchCategory: '',
  setSearchcategory: () => undefined,
  isProductDetailOpen: false,

  openProductDetail: () => undefined,
  closeProductDetail: () => undefined,
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
  setProductToShow: () => undefined,
  cartProducts: [],
  setCartProducts: () => undefined,
  isSideMenuOpen: false,
  order: [],
  setOrder: () => undefined,
  openSideMenu: () => undefined,
  closeSideMenu: () => undefined,
})

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await resp.json()
      setItems(data)
    }
    fetchData()
  }, [])
  const [items, setItems] = useState<ProductData[]>([])
  const [filteredItems, setfilteredItems] = useState<ProductData[]>([])
  const [searchProduct, setSearchProduct] = useState('')
  const [searchCategory, setSearchcategory] = useState('')
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState<ProductData | null>(null)
  const [cartProducts, setCartProducts] = useState<ProductData[]>([])
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [order, setOrder] = useState<Order[]>([])

  useEffect(() => {
    let result = items || []

    if (searchProduct) {
      result = result.filter((item: ProductData) =>
        item.title.toLowerCase().includes(searchProduct.toLowerCase())
      )
    }

    if (searchCategory) {
      result = result.filter((item: ProductData) =>
        item?.category?.name
          ?.toLowerCase()
          .includes(searchCategory.toLowerCase())
      )
    }

    setfilteredItems(result)
  }, [items, searchProduct, searchCategory])

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
        items,
        setItems,
        filteredItems,
        setfilteredItems,
        searchProduct,
        setSearchProduct,
        searchCategory,
        setSearchcategory,
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

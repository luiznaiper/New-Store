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
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  searchCategory: string
  setSearchcategory: React.Dispatch<React.SetStateAction<string>>
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
  items: [],
  setItems: () => undefined,
  filteredItems: [],
  setfilteredItems: () => undefined,
  search: '',
  setSearch: () => undefined,
  searchCategory: '',
  setSearchcategory: () => undefined,
  count: 0,
  setCount: () => undefined,
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
  const [search, setSearch] = useState('')
  const [searchCategory, setSearchcategory] = useState('')
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState<ProductData | null>(null)
  const [cartProducts, setCartProducts] = useState<ProductData[]>([])
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [order, setOrder] = useState<Order[]>([])

  const filteredItemsByTitle = (
    items: ProductData[] | undefined,
    search: string
  ): ProductData[] => {
    return (items || []).filter((item: ProductData) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredItemsByCategory = (
    items: ProductData[] | undefined,
    searchCategory: string
  ): ProductData[] => {
    return (items || []).filter((item: ProductData) =>
      item?.category?.name?.includes(searchCategory)
    )
  }

  const filteredBy = (items, searchType, search, searchCategory) => {
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchCategory).filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, search)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchCategory)
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (search && searchCategory) {
      setfilteredItems(
        filteredBy('BY_TITLE_AND_CATEGORY', items, search, searchCategory)
      )
    }
    if (search && !searchCategory) {
      setfilteredItems(filteredBy('BY_TITLE', items, search, searchCategory))
    }
    if (!search && searchCategory) {
      setfilteredItems(filteredBy('BY_CATEGORY', items, search, searchCategory))
    }
    if (!search && !searchCategory) {
      setfilteredItems(filteredBy(null, items, search, searchCategory))
    }
  }, [items, search, searchCategory, filteredBy])

  console.log(items)

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
        search,
        setSearch,
        searchCategory,
        setSearchcategory,
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

import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  count: 0,
  setCount: () => {
    //placeholder function
  },
})

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

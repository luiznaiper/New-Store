import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)

  if (context === undefined) {
    throw new Error(
      'useShoppingCart must be used within a ShoppingCartProvider'
    )
  }

  return context
}

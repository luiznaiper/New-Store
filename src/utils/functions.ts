import { CardProps } from './types'

export const totalPrice = (products: CardProps['data'][]) => {
  return products.reduce((acc, el) => acc + el.price, 0)
}

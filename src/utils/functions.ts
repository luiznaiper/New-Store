import { CardProps } from './types'

export const totalPrice = (products, productQuantities) => {
  return products.reduce(
    (total, product) =>
      total + product.price * (productQuantities[product.id] || 1),
    0
  )
}

import { ProductData, OrderCardProps } from './types'

export const totalPrice = (
  products: ProductData[],
  productQuantities: OrderCardProps['productQuantities']
): number => {
  return products.reduce(
    (total, product) =>
      total + product.price * (productQuantities[product.id] || 1),
    0
  )
}

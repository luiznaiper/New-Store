import { ProductData } from './types'

export const totalPrice = (
  products: ProductData[],
  productQuantities: { [productId: number]: number }
): number => {
  return products.reduce(
    (total, product) =>
      total + product.price * (productQuantities[product.id] || 1),
    0
  )
}

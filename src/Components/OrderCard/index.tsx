import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { OrderCardProps } from '../../utils/types'

const OrderCard: React.FC<OrderCardProps> = ({
  id,
  title,
  images,
  price,
  handleDelete,
}) => {
  const { productQuantities, setProductQuantities } = useShoppingCart()

  const handleIncreaseQuantity = () => {
    const updatedQuantities = { ...productQuantities }
    updatedQuantities[id] = (updatedQuantities[id] || 1) + 1
    setProductQuantities(updatedQuantities)
  }

  const handleDecreaseQuantity = () => {
    const updatedQuantities = { ...productQuantities }
    updatedQuantities[id] = Math.max((updatedQuantities[id] || 1) - 1, 1)
    setProductQuantities(updatedQuantities)
  }

  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className="h-6 w-6 text-black cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    )
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <div className="flex flex-col items-center">
          <button onClick={handleDecreaseQuantity}>-</button>
          <span className="px-2">{productQuantities[id] || 1}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard

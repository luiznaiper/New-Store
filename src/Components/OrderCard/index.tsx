import { XMarkIcon } from '@heroicons/react/20/solid'

interface OrderCardProps {
  title: string
  images: string[]
  price: number
}

const OrderCard: React.FC<OrderCardProps> = ({ title, images, price }) => {
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
        <p className="text-lg font-medium">{price}</p>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
      </div>
    </div>
  )
}

export default OrderCard

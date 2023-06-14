import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Order } from '../../utils/types'

const OrdersCard: React.FC<Order> = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} products</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default OrdersCard

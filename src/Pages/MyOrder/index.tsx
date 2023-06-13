import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { Link } from 'react-router-dom'

const MyOrder = () => {
  const { order } = useShoppingCart()

  const lastOrder = order?.slice(-1)[0]

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {lastOrder?.products?.map((product) => {
          const { id, images, price, title } = product
          return (
            <OrderCard
              key={id}
              id={id}
              images={images}
              price={price}
              title={title}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default MyOrder

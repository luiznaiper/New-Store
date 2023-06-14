import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { useShoppingCart } from '../../hooks/useShoppingCart'

const MyOrders = () => {
  const { order } = useShoppingCart()

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order, index) => {
        const { totalProducts, totalPrice } = order
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalProducts={totalProducts} totalPrice={totalPrice} />
          </Link>
        )
      })}
    </Layout>
  )
}

export default MyOrders

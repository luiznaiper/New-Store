import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { useShoppingCart } from '../../hooks/useShoppingCart'

const MyOrder = () => {
  const { order } = useShoppingCart()

  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((product) => {
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

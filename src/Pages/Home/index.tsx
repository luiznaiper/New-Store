import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { useShoppingCart } from '../../hooks/useShoppingCart'

const Home = () => {
  const { items } = useShoppingCart()
  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => {
          const { id } = item
          return <Card key={id} data={item} />
        })}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home

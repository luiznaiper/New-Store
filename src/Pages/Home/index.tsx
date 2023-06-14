import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { useShoppingCart } from '../../hooks/useShoppingCart'

const Home = () => {
  const { items, search, setSearch } = useShoppingCart()
  console.log(search)

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Shop</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
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

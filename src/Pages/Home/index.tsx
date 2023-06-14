import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { useShoppingCart } from '../../hooks/useShoppingCart'

const Home = () => {
  const { items, filteredItems, search, setSearch } = useShoppingCart()
  const renderView = () => {
    if (search?.length > 0) {
      if (filteredItems.length > 0) {
        return filteredItems?.map((item) => {
          const { id } = item
          return <Card key={id} data={item} />
        })
      } else {
        return <div>No products found, try another</div>
      }
    } else {
      return items?.map((item) => {
        const { id } = item
        return <Card key={id} data={item} />
      })
    }
  }

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
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home

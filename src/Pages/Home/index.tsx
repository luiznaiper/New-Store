import { useEffect, useState } from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'

const Home = () => {
  const [items, setItems] = useState([])

  const url = 'https://api.escuelajs.co/api/v1/products'
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url)
      const data = await resp.json()
      setItems(data)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => {
          const { id } = item
          return <Card key={id} data={item} />
        })}
      </div>
    </Layout>
  )
}

export default Home

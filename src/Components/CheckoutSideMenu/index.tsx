import { XMarkIcon } from '@heroicons/react/20/solid'
import './styles.css'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils/functions'
import { Order } from '../../utils/types'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
  const {
    isSideMenuOpen,
    closeSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchProduct,
  } = useShoppingCart()

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd: Order = {
      date: Date.now(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setSearchProduct('')
  }

  return (
    <aside
      className={`${
        isSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white
    `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => closeSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => {
          const { id, images, price, title } = product
          return (
            <OrderCard
              key={id}
              id={id}
              images={images}
              price={price}
              title={title}
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
      <div className="px-6 mt-5">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="my-orders/last">
          <button
            className="bg-black py-3 mb-6 text-white w-full rounded"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu

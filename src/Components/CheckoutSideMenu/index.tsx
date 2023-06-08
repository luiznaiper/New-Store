import { XMarkIcon } from '@heroicons/react/20/solid'
import './styles.css'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils/functions'

const CheckoutSideMenu = () => {
  const { isSideMenuOpen, closeSideMenu, cartProducts, setCartProducts } =
    useShoppingCart()

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)

    setCartProducts(filteredProducts)
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
      <div className="px-6 overflow-y-scroll">
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
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu

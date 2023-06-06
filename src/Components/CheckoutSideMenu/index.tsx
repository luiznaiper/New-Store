import { XMarkIcon } from '@heroicons/react/20/solid'
import './styles.css'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { CardProps } from '../Card'

const CheckoutSideMenu = () => {
  const { isSideMenuOpen, closeSideMenu, productToShow } = useShoppingCart()

  const data = productToShow as CardProps['data'] | null

  //   const { images = [], price = 0, title = '', description = '' } = data || {}

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
    </aside>
  )
}

export default CheckoutSideMenu

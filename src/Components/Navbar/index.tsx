import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'

const NavBar = () => {
  const { cartProducts, productQuantities, setSearchcategory } =
    useShoppingCart()
  const totalItemsInCart = cartProducts.reduce(
    (total, product) => total + (productQuantities[product.id] || 1),
    0
  )

  const activeStyle = 'underline underline-offset-4 text-orange-400'

  return (
    <nav className="w-full top-0 flex justify-between items-center fixed z-10 py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => setSearchcategory('')}>
            Luis <span className="text-orange-400">Olivárez</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchcategory('')}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => setSearchcategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchcategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => setSearchcategory('furnitures')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => setSearchcategory('toys')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => setSearchcategory('others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <a
            href="mailto:me@luisolivarez.dev"
            className="text-orange-400 hover:underline"
          >
            me@luisolivarez.dev
          </a>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="w-6 h-6 text-black" />{' '}
          <span>{totalItemsInCart}</span>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Luis Olivárez</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures">Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others">Others</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <a href="mailto:me@luisolivarez.dev">me@luisolivarez.dev</a>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/my-order">My Order</NavLink>
        </li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  )
}

export default NavBar

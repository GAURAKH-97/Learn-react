import { useCart } from "../context/Cartcontext"
import {Link} from 'react-router-dom'
export default function Navbar() {
    const {cart} =useCart()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to='/'>🛒 MyShop</Link>
        <div>
          <Link className="nav-link d-inline me-3 text-white" to='/'>Home</Link>
          <Link className="nav-link d-inline text-white" to='/cartpage'>Cart {cart.length}</Link>
        </div>
      </div>
    </nav>
  )
}

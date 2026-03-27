import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Page/HomePage"
import Navbar from "./Components/Navbar"
import CartPage from "./Page/CartPage"
import { CartProvider  } from "./context/Cartcontext"
function App() {


  return (
    <CartProvider >
    <BrowserRouter>
    <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider >
  )
}

export default App

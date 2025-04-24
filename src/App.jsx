import './App.css'
import Products from "./components/products.jsx";
import {CartProvider} from "./contexts/cart-context.jsx";
import Cart from "./components/cart.jsx";

function App() {

  return (
    <CartProvider>
      <Products />
      <Cart/>
    </CartProvider>
  )
}

export default App

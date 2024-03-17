import Cart from "./coustomer/components/Cart/Cart"
import Checkout from "./coustomer/components/Checkout/Checkout"
import Footer from "./coustomer/components/Footer/Footer"
import Crousal from "./coustomer/components/Home/Crousal"
import Navbar from "./coustomer/components/Navbar/Navbar"
import Product from "./coustomer/components/product/Product"
import ProductDetails from "./coustomer/components/productDetails/ProductDetails"
import HomePage from "./coustomer/pages/HomePage/HomePage"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
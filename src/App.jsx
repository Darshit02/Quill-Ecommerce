import Cart from "./coustomer/components/Cart/Cart"
import Checkout from "./coustomer/components/Checkout/Checkout"
import Footer from "./coustomer/components/Footer/Footer"
import Crousal from "./coustomer/components/Home/Crousal"
import Navbar from "./coustomer/components/Navbar/Navbar"
import Order from "./coustomer/components/Order/Order"
import OrderDetail from "./coustomer/components/Order/OrderDetail"
import Product from "./coustomer/components/product/Product"
import ProductDetails from "./coustomer/components/productDetails/ProductDetails"
import HomePage from "./coustomer/pages/HomePage/HomePage"

const App = () => {
  return (
    <div className="">
      <div className="-z-10">

      <Navbar/>
      </div>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetail/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
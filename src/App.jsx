import Footer from "./coustomer/components/Footer/Footer"
import Crousal from "./coustomer/components/Home/Crousal"
import Navbar from "./coustomer/components/Navbar/Navbar"
import Product from "./coustomer/components/product/Product"
import HomePage from "./coustomer/pages/HomePage/HomePage"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
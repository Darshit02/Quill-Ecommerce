import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../coustomer/pages/HomePage/HomePage";
import Cart from "../coustomer/components/Cart/Cart";
import Navbar from "../coustomer/components/Navbar/Navbar";
import Footer from "../coustomer/components/Footer/Footer";
import Product from "../coustomer/components/product/Product";
import ProductDetails from "../coustomer/components/productDetails/ProductDetails";
import Checkout from "../coustomer/components/Checkout/Checkout";
import Order from "../coustomer/components/Order/Order";
import OrderDetail from "../coustomer/components/Order/OrderDetail";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/ragister" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:levelOne/:levelTwo/:levelThree"
            element={<Product />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderDetail />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;

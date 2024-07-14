import React from "react";
// import MainSlider from "./Components/Slider/MainSlider";
// import Sliderfade from "./Components/Slider/Sliderfade";
// import Staticslider from "./Components/Slider/Staticslider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Shop from "../src/Pages/Shop";
import Contact from "../src/Pages/Contact";
import Header from "../src/Components/Header/Navbar";
import Footer from "../src/Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import Slider from "./Components/Slider/Slider";

import "./App.css";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollButton/ScrollToTop";
import Authentication from "./Pages/Authentication";
import ResetPass from "./Components/Authentication/Reset/ResetPass";
import TermsConditions from "./Pages/TermsConditions";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Popup from "./Components/PopupBanner/Popup";

const App = () => {
  return (
    <div>
      {/* <Popup /> */}
      <ScrollToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/loginSignUp" element={<Authentication />} />
          <Route path="/resetPassword" element={<ResetPass />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/cart" element={<ShoppingCart />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Slider />
      <Sliderfade />
      <Staticslider />
      <MainSlider /> */}
    </div>
  );
};

export default App;

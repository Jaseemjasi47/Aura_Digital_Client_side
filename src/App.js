import "./App.css";
import "./Style/Animations.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster, toast } from 'sonner'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SingleProduct from "./Pages/SingleProduct";
import Footer from "./Components/Footer";
import Bottombar from "./Components/Navbar/Bottombar";
import ColorChanger from "./Components/ColorChanger";
import { CartProvider } from "./Components/Navbar/CartContext";
import Cart from "./Pages/Cart";
import SubCategory from "./Pages/SubCategory";
import UserProfile from "./Pages/UserProfile";
import SignUp from "./Pages/SignUp";
import CheckOut from "./Pages/CheckOut";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Toaster position="top-center" />
          <div className="app bottom-gap top-gap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/SubCategory" element={<SubCategory />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/Product" element={<SingleProduct />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/profile" element={<UserProfile />} />

              {/* Protected admin routes */}
              {/* <Route path="/admin" element={<AdminProtected><Admin /></AdminProtected>} /> */}
            </Routes>
            {/* <ColorChanger/> */}
          </div>
          <Footer />
          <Bottombar />
        </CartProvider>
        {/* <ScrollToTopButton/> */}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

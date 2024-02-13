import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SingleProduct from './Pages/SingleProduct';
import Footer from './Components/Footer';
import Bottombar from './Components/Navbar/Bottombar';
import ColorChanger from './Components/ColorChanger';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="app bottom-gap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Product" element={<SingleProduct />} />

            {/* Protected admin routes */}
            {/* <Route path="/admin" element={<AdminProtected><Admin /></AdminProtected>} /> */}
          </Routes>
        <ColorChanger/>
        </div>
        <Footer />
        <Bottombar/>
        {/* <ScrollToTopButton/> */}
      </>
    </Router>
  );
}

export default App;

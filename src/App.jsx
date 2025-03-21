import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CaterersList from "./pages/CaterersList/CaterersList";
import CatererProfile from "./pages/CatererProfile/CatererProfile";
import OrderPage from "./pages/OrderPage/OrderPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caterers/cuisine?" element={<CaterersList />} />
          <Route
            path="/caterers/:id"
            element={
              <CatererProfile
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/order" element={<OrderPage cartItems={cartItems} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

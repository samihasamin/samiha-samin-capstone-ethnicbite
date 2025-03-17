import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CaterersList from "./pages/CaterersList/CaterersList";
import CatererProfile from "./pages/CatererProfile/CatererProfile";
import OrderPage from "./pages/OrderPage/OrderPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caterers" element={<CaterersList />} />
          <Route path="/caterer/:id" element={<CatererProfile />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

const baseURL = `http://localhost:8000/Products`;

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});
  const fetchProducts = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response?.data);
      setProducts(response.data);
    } catch (error) {
      console.error("There was a problem fetching the products: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/product/:id"
          element={<Product setCart={setCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';
import { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async() => {
      const { data } = await commerce.products.list();

      setProducts(data);
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async( productId, quantity) => {
    const item = await commerce.cart.add( productId, quantity);

    setCart (item, cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])

  return (
    <>
      <div>
        <Navbar />
        <Products products={products} onAddToCart={handleAddToCart}/>
      </div>
    </>
  )
}

export default App
import React, { useState } from "react"
import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/cart/Cart.jsx"

function App() {
  // step 1: fetch data from database
  const { productItems } = Data

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header  CartItem={CartItem} />
        <Switch>
          <Route path="/" exact> 
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path="/cart" exact>
          <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch> 
      </Router> 
    </>
  );
}

export default App;

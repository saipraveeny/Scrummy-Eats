import { useState } from "react";
import { Route, Switch } from "react-router";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import OrderPage from "../src/components/footer/OrderPage";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";
import MainFooter from "./components/footer/links";
import PaymentPage from "./components/footer/paymentpage";
import ContactPage from "./components/footer/ContactPage";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
        <Header onShowCart={showCartHandler} />
        <main>
          <Switch>
            <Route path="/" exact component={Meals}></Route>
            <Route path="/orders" component={OrderPage}></Route>
            <Route path="/payments" component={PaymentPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
          </Switch>
        </main>
        <MainFooter />
      </CartProvider>
    </div>
  );
}

export default App;

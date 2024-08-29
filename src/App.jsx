import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/Home";
import ProductsPage from "./components/pages/ProductsPage";
import CartPage from "./components/pages/CartPage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFoundPage from "./components/pages/NoPageFound";
import { CartProvider } from "./contexts/CartFunctionality";
import { ThemeProvider } from "./contexts/ThemeMode";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

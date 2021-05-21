import React from "react";
import { Footer, Navbar } from "./Components";
import { GlobalStyle } from "./Components/createGlobalStyles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Product from "./pages/Product/Product";
import Signup from "./pages/Signup/Signup";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Product} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

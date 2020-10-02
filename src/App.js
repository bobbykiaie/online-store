import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Link, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.components';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
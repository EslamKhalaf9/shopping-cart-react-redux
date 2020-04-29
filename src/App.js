import React from "react";
import Header from "./components/Header";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import { Switch, Route } from "react-router-dom";
import Categories from "./containers/Categories";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/categories" exact>
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

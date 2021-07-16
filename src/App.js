import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

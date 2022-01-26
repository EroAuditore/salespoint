import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import { useDispatch } from "react-redux";
import { loadProducts } from "./redux/actions/products";
import Products from "./components/products";
import Reports from "./components/reports";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = () => dispatch(loadProducts());
    getProducts();
  }, [dispatch]);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/reports" exact component={Reports} />
          <Route path="/products" exact component={Products} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

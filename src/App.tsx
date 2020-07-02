import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import AppLayout from './layouts/AppLayout';
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AppLayout>
            <Home />
          </AppLayout>
        </Route>
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;

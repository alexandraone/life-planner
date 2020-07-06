import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import Test from './components/Test/Test';
import AppLayout from './layouts/AppLayout';
import Home from './views/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <AppLayout>
          <Home />
        </AppLayout>
      </Route>
      <Route path="/test">
        <Test />
      </Route>
      <Route component={Error404} />
    </Switch>
  );
};

export default App;

import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import TodoLists from './components/todoLists/TodoLists';
import Todos from './components/todos/Todos';
import AppLayout from './layouts/AppLayout';
import GlobalStyle from './layouts/GlobalStyle';
import Home from './views/Home';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AppLayout>
            <Home />
          </AppLayout>
        </Route>
        <Route path="/todo-lists" component={TodoLists} />
        <Route path="/todo" component={Todos} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;

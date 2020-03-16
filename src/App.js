import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, AddTodo } from 'pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home name="All" />
        </Route>
        <Route path="/active">
          <Home name="Active" />
        </Route>
        <Route path="/completed">
          <Home name="Completed" />
        </Route>
        <Route path="/create">
          <AddTodo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

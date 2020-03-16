import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from 'pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home name="home" />
        </Route>
        <Route path="/active">
          <Home name="active" />
        </Route>
        <Route path="/completed">
          <Home name="completed" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Room from './pages/Room';
import NotFound404 from './pages/NotFound404';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/room/:id" component={Room} />
        <Route exact path="/" component={Main} />
        <Route exact component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

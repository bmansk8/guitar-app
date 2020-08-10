import React from 'react';
import './App.css';
import Page from './page';
import { Blue } from './components/blue';
import { Green } from './components/green';
import { Purple } from './components/purple';
import { Bronco } from './components/bronco';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path='/bronco'>
            <Bronco />
          </Route>
          <Route path='/blue'>
            <Blue />
          </Route>
          <Route path='/green'>
            <Green />
          </Route>
          <Route path='/purple'>
            <Purple />
          </Route>
          <Route path='/'>
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

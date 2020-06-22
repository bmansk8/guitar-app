import React from 'react';
import './App.css';
import Page from './page';
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
          <Route path='/'>
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

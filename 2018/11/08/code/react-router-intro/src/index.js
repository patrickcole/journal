import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  NavLink, 
  BrowserRouter as Router, 
  Switch 
} from 'react-router-dom';

import './index.css';

import App from './App';
import Users from './Users';
import Contact from './Contact';
import NotFound from './NotFound';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={ App } />
        <Route path="/users" component={ Users } />
        <Route path="/contact" component={ Contact } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

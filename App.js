import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/About" exact component={About} />
      </Switch>
      </Router>
     
      </div>
  );
}

export default App;

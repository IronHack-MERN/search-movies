import React, { Component } from "react";
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import NotFound from './views/NotFound'

import "./App.css";
import "bulma/css/bulma.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
        </div>
    );
  }
}

export default App;

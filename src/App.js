import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";

import ClientDetails from "./components/leaders/ClientDetails";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Settings from "./components/settings/Settings";

import "./App.css";
import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={{maxWidth:"1600px", margin: "0 auto"}}>
             <Header /> 

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about/leaders" component={Dashboard}></Route>
              <Route exact path="/leaders/:id" component={ClientDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

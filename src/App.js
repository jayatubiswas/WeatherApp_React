import React from "react";
import Login from "./components/Login";
import Weather from './components/Weather';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Header />
            <Weather />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

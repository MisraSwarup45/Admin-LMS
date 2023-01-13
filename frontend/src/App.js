import React, { useState } from 'react';
import Header from "./Components/Header";
import Login from ".//Components/Login/Login"
import Register from "./Components/Register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Header setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';
import Header from './Component/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Component/Main/Main';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>


        <Router>
          <Header></Header>
          <Switch>
            <Route path="/Main">
              <Main />
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/godetails/:id">
              <h1>This is details</h1>
              <Register></Register>
            </PrivateRoute>



            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>

      </div>
    </UserContext.Provider>
  );
}

export default App;

import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export  const PlaceContext = createContext();
export const UserContext = createContext();

function App() {

  const [place, setPlace] = useState({
    origin:'',
    destination:'',
    from:'',
    to:''
  })
  const [isLoggedIn, setIsLoggedIn] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      success: ''
  })

  return (
    <div className="App">
      <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <PlaceContext.Provider value={[place, setPlace]}>
     <Router>
       <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/booking">
              <Booking></Booking>
          </Route>
          <PrivateRoute path="/hotel">
              <Hotel></Hotel>
          </PrivateRoute>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route exact path="*">
              <Home></Home>
          </Route>
       </Switch>
     </Router>
     </PlaceContext.Provider>
     </UserContext.Provider>
    </div>
  );
}

export default App;

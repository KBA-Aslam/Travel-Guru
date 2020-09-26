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

export  const PlaceContext = createContext()

function App() {

  const [place, setPlace] = useState({
    origin:'',
    destination:'',
    from:'',
    to:''
  })

  return (
    <div className="App">
      <PlaceContext.Provider value={[place, setPlace]}>
     <Router>
       <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/booking">
              <Booking></Booking>
          </Route>
          <Route path="/hotel">
              <Hotel></Hotel>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
       </Switch>
     </Router>
     </PlaceContext.Provider>
    </div>
  );
}

export default App;

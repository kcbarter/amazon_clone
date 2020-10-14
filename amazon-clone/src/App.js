import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Checkout from './component/Checkout.js';
import Login from './component/Login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './component/Payment.js';

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER is: ', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

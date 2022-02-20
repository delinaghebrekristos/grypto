// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";

// import Home component
import Dashboard from "./components/Dashboard";
// import About component
import Wallet from "./components/Wallet";
import Purchase from "./components/makePurchase";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import Dashboard from "./Dashboard";
//import Wallet from "./Wallet";
//import LoginPage from "./LoginPage";

import "./App.css";
// importing components from react-router-dom package

function App() {
  return (	<>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component*/}
      <Route exact path="/" component={Dashboard} />
        
      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/wallet" component={Wallet} />   

      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/purchase" component={Purchase} />       
       
      {/* If any route mismatches the upper
      route endpoints then, redirect triggers
      and redirects app to home component with to="/" */}
      <Redirect to="/" />
      </Switch>
    </Router>
    </>
  );
  }
  
  export default App;
    
    /**<div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div><Dashboard></Dashboard></div> : renderForm}
    </div>
  </div>
  );**/


//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);


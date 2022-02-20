import React, {useState, useEffect} from 'react';
import { observer } from 'mobx-react';
import { Router, Route, Link, broswerHistory, IndexRoute } from "react-router";
import Dashboard from './Dashboard';
import UserStore from './users/UserStore';
import LoginPage from './LoginPage';
import SubmitButton from './SubmitButton'
import { render } from 'react-dom';
import './App.css';

class App extends React.Component {
  
   // Login 
  async componentDidMount() {

    //when application mounts, it will check if user is logged in by checking the session 
    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        }
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  //Logout
  async doLogout() {

    //when application mounts, it will check if user is logged in by checking the session 
    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }

    }

    catch(e) {
      console.log(e)
    }
  }
  render() {
    return(
        <div className='app'>
            <div className = 'container'>
                <LoginPage/>
            </div>
        </div>
    );
    /**if (UserStore.loading){
      return (
        <div className="app">
          <div className='container'>
            Loading, please wait..
          </div>
      
        
      </div>
      );
    }
    else {
      if(UserStore.isLoggedIn){
        return (
          <div className="app">
            <div className='container'>
              Welcome {UserStore.username}

              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={ () => this.doLogout() }
              />
            </div>
        
          
        </div>
        );
      }
      
      return(
        <div className="app">
          <div className='container'>
            <LoginPage/> 
            
          </div>

      
        
      </div>
      )
      
    }

    return (
      <div className="app">
        hello world
      
        
      </div>
    );**/
  }
  
}

export default observer(App);
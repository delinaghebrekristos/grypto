import React from 'react';
import './LoginPage.css';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './users/UserStore';
import history from './history';
import Dashboard from './Dashboard';

class LoginPage extends React.Component {
    //makes sure there isn't double requests
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    

    //rules for username and password
    setInputValue(property, val){
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState(
            {
                username:'',
                password: '',
                buttonDisabled: false
            }
        )
    }
    async goIn(){
        <Dashboard/>
    }
    async doLogin() {
        if(!this.state.username) {
            return;
        }
        if(!this.state.password) {
            return;
        }
        //can't double-click submit button
        this.setState({
            buttonDisabled: true
        })

        try{
            let res = await fetch('./login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            //result from API
            let result = await res.json();

            //taken from result json
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }

            //return error and reset
            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }
    
        catch(e) {
            console.log(e);
            this.resetForm();
        }

        function goDashboard(){
            history.push('Dashboard');
            history.go(0)
    
        }
        
    }

   
    render(){
        return (
            <div className="loginForm">
              Log in
              <InputField
                type='text'
                placeholder='Username'
                value={this.state.username ? this.state.username: ''}
                onChange= { (val) => this.setInputValue('username', val) }

              />
              <InputField
                type='password'
                placeholder='Password'
                value={this.state.password ? this.state.password: ''}
                onChange= { (val) => this.setInputValue('password', val) }

              />

               <SubmitButton
                text='Login'
                disabled={this.state.buttonDisabled}
                onClick={() => history.push('./Dashboard')}    
                        
                /> 
                

              
            </div>
          );
    }
  
}

export default LoginPage;

import React, { Component } from 'react';
import UserService from '../services/UserService';

class Login extends Component {
        constructor(props) {
        super(props)
        this.state = {
            user:{}
        }
        this.usernameHandler = this.usernameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }

    Login=(u)=>{u.preventDefault();
    UserService.getLogin(this.state.username,this.state.password).then(
        res =>{
            let user1=res.data;
            console.log(user1);
            sessionStorage.setItem('userData',JSON.stringify(user1));
            window.location.replace("/user");

        });
    }

    usernameHandler = (event) => { this.setState({ username: event.target.value }); }
    passwordHandler = (event) => { this.setState({ password: event.target.value }); }
  
    render() {
        return (
            <div>
                <form onSubmit={this.Login}>
                    <div class=" card container-sm" style={{width:"40%"}} >
                        <div class="form-group" style={{width:"70%"}}>
                            <label for="username"><strong>Username:</strong></label>
                            <input type="username" class="form-control" id="username" required
                                value={this.state.username} onChange={this.usernameHandler} />
                        </div>
                        <div class="form-group"style={{width:"70%"}}>
                            <label for="pwd"><strong>Password:</strong></label>
                            <input type="password" class="form-control" id="pwd" required
                                value={this.state.password} onChange={this.passwordHandler} />
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" /><strong>Remember me</strong> </label>
                        </div>
                        <a href="ForgotP">Forgot Password?</a>
                        <a href="CreateUSerComponent">Create New Account</a>
                        <span><input type="submit" class="btn btn-outline-success" value="Submit" /></span>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
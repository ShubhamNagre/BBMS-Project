import React, { Component } from 'react';
import UserService from '../services/UserService';
class ForgotPasswordComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            mobile: ''
        }
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
    }
    pop=(u)=>{u.preventDefault();
                
        UserService.putfop(this.state.email,this.state.mobile).then((res)=>{
            let user1=res.data;
            console.log(user1);
            sessionStorage.setItem('userData',JSON.stringify(user1));
            alert("Email and mobile number Matches Redirecting to the profile page...!"); 
            window.location.replace("/user");
            
        });
        
    }
    changeEmailHandler=(event)=>{this.setState({email:event.target.value});}
    changeMobileHandler=(event)=>{this.setState({mobile:event.target.value});}

    render() {
        return (
            <div>
                <h4>Forgot Username or Password</h4> <hr/>
        <h6>Enter Email:</h6> <br/>
        <form onSubmit={this.pop}>
        <input type="email" name="email" id="email" value={this.state.email} onChange={this.changeEmailHandler}/>
        <h6>Enter Mobile:</h6> <br/>
        <input type="number" name="number" id="mobileno" value={this.state.mobile} onChange={this.changeMobileHandler}/>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            </div>
        );
    }
}

export default ForgotPasswordComponent;
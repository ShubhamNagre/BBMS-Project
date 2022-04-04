import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props)
    this.state = {

      user:{}

    }
  }

  Logout=()=>{
    sessionStorage.removeItem("userData");
    console.log("Logout successfull");
    alert("Thank you Visit Again !!!");
    window.location.replace("/");
}

  render() {

    let data=sessionStorage.getItem('userData');
    this.state.user=JSON.parse(data);
    console.log(this.state.user)

    let button;
    {
      (() => {
        let rol=this.state.user.role;
        console.log(rol);

        if (rol === "ADMIN") {
          return (
            button = <tbody>
              <tr><td><a href="/home" class="text-decoration-none" > <button type="button" class="btn btn-outline-primary">Blood Stock Data</button></a> </td>
              <td><a href="/DonorValidationData" class="text-decoration-none" > <button type="button" class="btn btn-outline-warning">Donor Validation Data</button></a> </td>
              <td><a href="/users" class="text-decoration-none" > <button type="button" class="btn btn-outline-success">User Details Data</button></a> </td>
              <td><a href="/BloodTestLogData" class="text-decoration-none" > <button type="button" class="btn btn-outline-secondary">Blood Test Log Data</button></a></td>
              <td><button type="button" class="btn btn-primary btn-sm" onClick={this.Logout}>Logout</button></td> </tr>
            </tbody>
          )
        } else if (rol === "USER") {
          return (
            button = <tbody>
              <tr><td><a href="/home" class="text-decoration-none" > <button type="button" class="btn btn-outline-primary">Blood Stock Data</button></a> </td>
              <td><a href="/DonorValidation" class="text-decoration-none" > <button type="button" class="btn btn-outline-warning">Donate Blood</button></a> </td>
              <td><a href="/Cart" class="text-decoration-none" > <button type="button" class="btn btn-outline-success">Needed Blood</button></a> </td>
              <td><a href="/Certificate" class="text-decoration-none" > <button type="button" class="btn btn-outline-secondary">Download Blood donation Certificate</button></a></td>
              <td><button type="button" class="btn btn-primary btn-sm" onClick={this.Logout}>Logout</button></td> </tr>
            </tbody>

          )
        } else if (rol === "LABASSISTANT") {
          return (
            button = <tbody>
              <tr><td><a href="/home" class="text-decoration-none" > <button type="button" class="btn btn-outline-primary">Blood Stock Data</button></a> </td>
              <td><a href="/BloodTestLog" class="text-decoration-none" > <button type="button" class="btn btn-outline-warning">Blood Test Log</button></a></td>
              <td><button type="button" class="btn btn-primary btn-sm" onClick={this.Logout}>Logout</button></td> </tr>
            </tbody>
          )
        }
        else {
          return (
            button = <tbody>
              <tr><td><a href="/home" class="text-decoration-none" > <button type="button" class="btn btn-outline-primary">Blood Stock Data</button></a> </td>
              <td><a href="./BloodTestLogData" class="text-decoration-none" > <button type="button" class="btn btn-outline-warning">Blood Test Log Data</button></a> </td>
              <td><a href="./DonorValidationData" class="text-decoration-none" > <button type="button" class="btn btn-outline-success">Blood Validation Data</button></a></td>
              <td><button type="button" class="btn btn-primary btn-sm" onClick={this.Logout}>Logout</button></td></tr>
            </tbody>
          )
        }
      })()
    }
    return (
      <div>
        <table className='card col-md-5 offset-sm-1  '>
          <tr> <td><h3>Profile</h3></td> </tr>
          <hr />
          <tr><td><div>Name: {this.state.user.fname} {this.state.user.mname} {this.state.user.lname}</div></td></tr>
          <tr><td><div>Username: {this.state.user.username}</div></td></tr>
          <tr><td><div>Password: {this.state.user.password}</div></td></tr>
          <tr><td><div>Role:{this.state.user.role}</div></td></tr>
          <tr><td><div>Gender: {this.state.user.gender}</div></td></tr>
          <tr><td><div>Age: {this.state.user.age}</div></td></tr>
          <tr><td><div>Blood group: {this.state.user.blood_group}</div></td></tr>
          <tr><td><div>Address: {this.state.user.address}</div></td></tr>
          <tr><td><div>Department: {this.state.user.department}</div></td></tr>
          <tr><td><div>Number: {this.state.user.mobile}</div></td></tr>
          <tr><td><div>Email:{this.state.user.email}</div></td></tr>
          <tr><td><div>Subscribed: {this.state.user.subscribe}</div></td></tr>
        </table>
        <table className='card justify-content-right'>
          <thead><h3>Functionalities:</h3><br /></thead>
          {button}
        </table>
      </div>
    );
  }
}

export default User;
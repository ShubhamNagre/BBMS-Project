import React, { Component } from 'react';
import UserService from '../services/UserService';




class ListUsers extends Component {
  constructor(props){
    super(props)
    this.state={
      user:[],
      idd:'',
      showForm: false
    }
    
    this.changeIddHandler=this.changeIddHandler.bind(this);
  }
  componentDidMount(){
    UserService.getUsers().then((res) => {
      this.setState({user:res.data});
    });
  }
  
deluser=(u)=>{u.preventDefault();
  alert("in del user");
  UserService.deluser(this.state.idd).then(res => {
    console.log("User deleted Successfully",res.data);
    alert("User Deleted Successfully!!!");
    window.location.replace("/users")
  });
}


changeIddHandler=(event)=>{this.setState({idd:event.target.value});}

  render() {
    return (
      <div>
         <div>
         <a href="CreateUserAdmin"><button type="button" className="btn btn-primary">Add User</button></a>&nbsp;&nbsp;&nbsp;
         <form onSubmit={this.deluser}>
        <label> Enter Id : </label>
        <input type="number" value={this.state.idd} onChange={this.changeIddHandler}/>
        <button type="submit" className="btn btn-primary" value="submit">Delete User</button>
     </form>
         
                 </div>
       <h2 className='text-center'>Users List</h2>
               <div className='row' style={{margin :"20px"}}>
                 <table className='table table-striped table-bordered'>
                   <thead>
                     <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Gender</th>
                       <th>Blood Group</th>
                       <th>Address</th>
                       <th>Username</th>
                       <th>Password</th>
                       <th>Mobile No.</th>
                       <th>Email</th>
                       <th>Subscribed</th>
                       <th>Age</th>
                       <th>Department</th>
                       <th>Role</th>
                       <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     {
                       this.state.user.map(
                         user=>
                         <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.fname} {user.mname} {user.lname}</td>
                           <td>{user.gender}</td>
                           <td>{user.blood_group}</td>
                           <td>{user.address}</td>
                           <td>{user.username}</td>
                           <td>{user.password}</td>
                           <td>{user.mobile}</td>
                           <td>{user.email}</td>
                           <td>{user.subscribe.toString()}</td>
                           <td>{user.age}</td>
                           <td>{user.department}</td>
                           <td>{user.role}</td>
                           <td><button>Update</button></td>
                         </tr>
                       )
                     }
                   </tbody>
                 </table>
               </div>
      </div>
    );
  }
}

export default ListUsers;
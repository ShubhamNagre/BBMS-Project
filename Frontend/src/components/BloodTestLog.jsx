import React, { Component } from 'react';
import BloodTestLogService from '../services/BloodTestLogService';

class BloodTestLog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hepatitisb:'',
            hepatitisc:'',
            hiv:'',
            syphilis:'',
            maleria:'',
            userid:''            
        }
        this.changeHepatitisBHandler=this.changeHepatitisBHandler.bind(this);
        this.changeHepatitisCHandler=this.changeHepatitisCHandler.bind(this);
        this.changeHivHandler=this.changeHivHandler.bind(this);
        this.changeSyphilisHandler=this.changeSyphilisHandler.bind(this);
        this.changeMaleriaHandler=this.changeMaleriaHandler.bind(this);
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
    } 
    saveBloodTestLog=(u)=>{u.preventDefault();
        let bloodtestlog={ hepatitisb:this.state.hepatitisb,hepatitisc:this.state.hepatitisc,hiv:this.state.hiv,syphilis:this.state.syphilis,maleria:this.state.maleria,userid:this.state.userid};
    console.log((JSON.stringify(bloodtestlog)));
    
    BloodTestLogService.createBloodTestLog(bloodtestlog).then((response) =>{
        
        console.log('user data added successfully',response.data); 
        alert("Data Uploaded Successfully");
        window.location.replace("/BlooTestLog"); 
    });
    }
    changeHepatitisBHandler=(event)=>{this.setState({hepatitisb:event.target.value});}
changeHepatitisCHandler= (event) =>{this.setState({hepatitisc: event.target.value});}
changeHivHandler= (event) =>{this.setState({hiv: event.target.value});}
changeSyphilisHandler= (event) =>{this.setState({syphilis: event.target.value});}
changeMaleriaHandler= (event) =>{this.setState({maleria: event.target.value});}
changeUserIdHandler= (event) =>{this.setState({userid: event.target.value});}


    render() { 
        return (
            <div>
                 <form onSubmit={this.saveBloodTestLog}>
        <table class=" table-striped table-hover" style={{width: "40%", height: "100%", padding: "30px", margin: "100px"}}>
            <tr>
                <td colspan="3"><h3>Blood Tests log</h3></td>
            </tr>
            <tr>
            <td colspan="2">Enter Donor Id:</td>
            <td>
            <input type="text" name="userid" id="userid" required value={this.state.userid} onChange={this.changeUserIdHandler}/>
            </td>
            </tr>
             <tr>
                <th>Sr. No.</th>
                <th>Test</th>
                <th>Output</th>
            </tr>
            <tr>
                <td>
                    1.
                </td>
                <td>
                    Hepatitis B:
                </td>
                <td>
                 <input class="form-check-input" type="radio" name="T1" id="T1T" checked={this.state.hepatitisb === "true"} value="true" onChange={this.changeHepatitisBHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T1" id="T1F" checked={this.state.hepatitisb === "false"} value="false" onChange={this.changeHepatitisBHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
                </td>
            </tr>
            <tr>
             <td>
                 2.
             </td>
             <td>
                 Hepatitis C:
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T2" id="T2T" checked={this.state.hepatitisc === "true"} value="true" onChange={this.changeHepatitisCHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T2" id="T2F" checked={this.state.hepatitisc === "false"} value="false" onChange={this.changeHepatitisCHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td>
                 3.
             </td>
             <td>
                HIV/AIDS:
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T3" id="T3T" checked={this.state.hiv === "true"} value="true" onChange={this.changeHivHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T3" id="T3F" checked={this.state.hiv === "false"} value="false" onChange={this.changeHivHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td>
                 4.
             </td>
             <td>
                 Syphilis:
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T4" id="T4T" checked={this.state.syphilis === "true"} value="true" onChange={this.changeSyphilisHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T4" id="T4F" checked={this.state.syphilis === "false"} value="false" onChange={this.changeSyphilisHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td>
                 5.
             </td>
             <td>
                 Maleria:
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T5" id="T5T" checked={this.state.maleria === "true"} value="true" onChange={this.changeMaleriaHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T5" id="T5F" checked={this.state.maleria === "false"} value="false" onChange={this.changeMaleriaHandler}/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td colSpan="4">
                 <div class="center" style={{width: "40%"}}>
                     <button type="reset" class="btn btn-outline-warning" style={{width: "auto" , float: "left"}}>Reset</button>
                     <button type="submit" class="btn btn-outline-success" style={{width: "auto", float: "right"}}>SUBMIT</button>    
                 </div>
             </td>
         </tr>
         </table>
    </form>
            </div>
        );
    }
}

export default BloodTestLog;
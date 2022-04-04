import React, { Component } from 'react';
import DonorValidationService from '../services/DonorValidationService';

class DonorValidation extends Component {
    constructor(props) {
        super(props)
        this.state = {
                q1:'',
                q2:'',
                q3:'',
                q4:'',
                q5:'',
                q6:'',
                q7:'',
                q8:'',
                q9:'',
                q10:'',
                q11:'',
                q12:'',
                q13:'',
                q14:'',
                q15:'',
                q16:'',
                q17:'',
                q18:'',
                q19:'',
                q20:'',
                q21:'',
                q22:''            
        }

        this.q1=this.q1.bind(this);
        this.q2=this.q2.bind(this);
        this.q3=this.q3.bind(this);
        this.q4=this.q4.bind(this);
        this.q5=this.q5.bind(this);
        this.q6=this.q6.bind(this);
        this.q7=this.q7.bind(this);
        this.q8=this.q8.bind(this);
        this.q9=this.q9.bind(this);
        this.q10=this.q10.bind(this);
        this.q11=this.q11.bind(this);
        this.q12=this.q12.bind(this);
        this.q13=this.q13.bind(this);
        this.q14=this.q14.bind(this);
        this.q15=this.q15.bind(this);
        this.q16=this.q16.bind(this);
        this.q17=this.q17.bind(this);
        this.q18=this.q18.bind(this);
        this.q19=this.q19.bind(this);
        this.q20=this.q20.bind(this);
        this.q21=this.q21.bind(this);
        this.q22=this.q22.bind(this);
    }

    saveDVal=(u)=>{u.preventDefault();
        let dval={ q1:this.state.q1,q2:this.state.q2,q3:this.state.q3,q4:this.state.q4,q5:this.state.q5,
            q6:this.state.q6,q7:this.state.q7,q8:this.state.q8,q9:this.state.q9,q10:this.state.q10,
            q11:this.state.q11,q12:this.state.q12,q13:this.state.q13,q14:this.state.q14,q15:this.state.q15,
            q16:this.state.q16,q17:this.state.q17,q18:this.state.q18,q19:this.state.q19,q20:this.state.q20,
            q21:this.state.q21,q22:this.state.q22};
    console.log((JSON.stringify(dval)));
    
    DonorValidationService.createDVal(dval).then((response) =>{
        console.log('user data added successfully',response.data);
        alert("We will call you within an hour");  
        window.location.replace("/user");    
    });
    }
    
    q1=(event)=>{this.setState({q1:event.target.value});}
    q2=(event)=>{this.setState({q2:event.target.value});}
    q3=(event)=>{this.setState({q3:event.target.value});}
    q4=(event)=>{this.setState({q4:event.target.value});}
    q5=(event)=>{this.setState({q5:event.target.value});}
    q6=(event)=>{this.setState({q6:event.target.value});}
    q7=(event)=>{this.setState({q7:event.target.value});}
    q8=(event)=>{this.setState({q8:event.target.value});}
    q9=(event)=>{this.setState({q9:event.target.value});}
    q10=(event)=>{this.setState({q10:event.target.value});}
    q11=(event)=>{this.setState({q11:event.target.value});}
    q12=(event)=>{this.setState({q12:event.target.value});}
    q13=(event)=>{this.setState({q13:event.target.value});}
    q14=(event)=>{this.setState({q14:event.target.value});}
    q15=(event)=>{this.setState({q15:event.target.value});}
    q16=(event)=>{this.setState({q16:event.target.value});}
    q17=(event)=>{this.setState({q17:event.target.value});}
    q18=(event)=>{this.setState({q18:event.target.value});}
    q19=(event)=>{this.setState({q19:event.target.value});}
    q20=(event)=>{this.setState({q20:event.target.value});}
    q21=(event)=>{this.setState({q21:event.target.value});}
    q22=(event)=>{this.setState({q22:event.target.value});}


    render() {
        return (
            <div class="card col-md-7 offset-md-3">
                 <form onSubmit={this.saveDVal}>
        <table class="center table table-striped table-hover" >
            <tr><td colspan="3"><h1>Donor Validation Form</h1></td></tr>
            <tr>
                <td>1.</td>
                <td>Have been treated for rabies in past 1 year?</td>
                <td>
                    <input class="form-check-input" type="radio" name="Q1T" id="Q1T" value="Q1T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q1F" id="Q1F" value="Q1F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Be treated for Malaria in the past three months?</td>
                <td>
                    <input class="form-check-input" type="radio" name="Q2T" id="Q2T" value="Q2T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q2T" id="Q2F" value="Q2F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Blood pressure-Systolic 100-180 mm Hg and Diastolic 50-100 mm Hg</td>
                <td>
                    <input class="form-control form-control-sm" placeholder="Blood Pressure" type="text" name="BP" id="BP"/>
                </td>
               
            </tr>
            <tr>
                <td>4.</td>
                <td>Tooth extraction/manipulation in 3 days</td>
                <td>
                    <input class="form-check-input" type="radio" name="Q4T" id="Q4T" value="Q4T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q4T" id="Q4F" value="Q4F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Have had any dental treatment?
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q5T" id="Q5T" value="Q5T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q5T" id="Q5F" value="Q5F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Have taken Aspirin in the past 75 hours?
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q6T" id="Q6T" value="Q6T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q6T" id="Q6F" value="Q6F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>7.</td>
                <td>Have diabeties,heart disease or high BP,cancer,blood clotting problem or blood disease?
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q7T" id="Q7T" value="Q7T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q7T" id="Q7F" value="Q7F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>8.</td>
                <td>Have TB,bronchial asthama or allergic disorder,liver disease,kidney disease,fits or fainting?
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q8T" id="Q8T" value="Q8T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q8T" id="Q8F" value="Q8F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>9.</td>
                <td>Have Cough,influenza or sore throat,common,cold at the time of blood donation
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q9T" id="Q9T" value="Q9T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q9T" id="Q9F" value="Q9F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>10.</td>
                <td>Have taken any antibiotic or any other medications in past 48 hours
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q10T" id="Q10T" value="Q10T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q10T" id="Q10F" value="Q10F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>11.</td>
                <td>Haemoglobin `&gt;`12.5g/dl.
                </td>
                <td>
                   <input class="form-control form-control-sm" placeholder="minimum 12.5g/dl" type="text" name="Haemoglobin" id="Haemoglobin"/>
                </td>
                
            </tr>
            <tr>
                <td>12.</td>
                <td>Be pregnant or breast feeding or donate during her menstrual cycles</td>
                <td>
                    <input class="form-check-input" type="radio" name="Q12T" id="Q12T" value="Q12T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q12T" id="Q12F" value="Q12F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>13.</td>
                <td>Have donated blood in past 3 months?
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q13T" id="Q13T" value="Q13T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q13T" id="Q13F" value="Q13F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>14.</td>
                <td>Is your age is between 18-60 ?
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q14T" id="Q14T" value="Q14T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q14T" id="Q14F" value="Q14F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>15.</td>
                <td>Have taken alcoholic beverages in past 24 hours
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q15T" id="Q15T" value="Q15T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q15T" id="Q15F" value="Q15F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>16.</td>
                <td>Pulse(50-100)/min with no irregularities.
    
                </td>
                <td>
                    <input class="form-control form-control-sm" placeholder="Pulse" type="text" name="Pulse" id="Pulse"/>
                </td>
            </tr>
            <tr>
                <td>
                    17.
                </td>
                <td>
                    Have had any immunizations in last 1 month?
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q17T" id="Q17T" value="Q17T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q17T" id="Q17F" value="Q17F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>
                    18.
                </td>
                <td>
                    Temperature Normal
    
                </td>
                <td>
                    <input class="form-control form-control-sm" placeholder="Temperature" type="text" name="Temperature" id="Temperature"/>
                </td>
            </tr>
            <tr>
                <td>
                    19.
                </td>
                <td>
                    Weight-`&gt;`=45 kg(for 350ml) and `&gt;`=60(for 450ml)
    
                </td>
                <td>
                    <input class="form-control form-control-sm" placeholder="Weight in Kg" type="text" name="Weight" id="Weight"/>
                </td>
            </tr>
            <tr>
                <td>
                    20.
                </td>
                <td>
                    Any Major surgery in last 6 months
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q20T" id="Q20T" value="Q20T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q20T" id="Q20F" value="Q20F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>
                    21.
                </td>
                <td>
                    Any Minor surgery in last 3 months
    
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q21T" id="Q21T" value="Q21T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q21T" id="Q21F" value="Q21F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr>
                <td>
                    22.
                </td>
                <td>
                    Received blood/blood component transfusion in last 1 year
                </td>
                <td>
                    <input class="form-check-input" type="radio" name="Q22T" id="Q22T" value="Q22T"/>
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                    <input class="form-check-input" type="radio" name="Q22T" id="Q22F" value="Q22F"/>
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </td>
            </tr>
            <tr> 
                <td colspan="3">
                    <div class="center" style={{width: "40%"}}>
                        <button type="reset" class="btn btn-outline-warning" style={{width: "auto", float: "left"}}>Reset</button>
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

export default DonorValidation;
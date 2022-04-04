import React, { Component } from 'react';
import DonorValidationService from '../services/DonorValidationService';

class DonorValidationData extends Component {
    constructor(props){
        super(props)
        this.state={
          DValData:[]
        }
      }
      componentDidMount(){
        DonorValidationService.getDVal().then((res) => {
          this.setState({DValData:res.data});
          console.log(res.data);
        }).then(()=>{
          window.print();
        });;
      }

    render() {
        return (
            <div>
                 <h2 className='text-center '>Donor Validation List</h2>
               <div className='row ' style={{width:"98%", margin :"20px"}}>
                 <table className='table table-striped table-bordered'>
                   <thead>
                     <tr>
                       <th>Id</th>
                       <th>Q1</th>
                       <th>Q2</th>
                       <th>Q3</th>
                       <th>Q4</th>
                       <th>Q5</th>
                       <th>Q6</th>
                       <th>Q7</th>
                       <th>Q8</th>
                       <th>Q9</th>
                       <th>Q10</th>
                       <th>Q11</th>
                       <th>Q12</th>
                       <th>Q13</th>
                       <th>Q14</th>
                       <th>Q15</th>
                       <th>Q16</th>
                       <th>Q17</th>
                       <th>Q18</th>
                       <th>Q19</th>
                       <th>Q20</th>
                       <th>Q21</th>
                       <th>Q22</th>
                     </tr>
                   </thead>
                   <tbody>
                     { this.state.DValData.map(
                        DValData=>
                         <tr key={DValData.id}>
                           <td>{DValData.id}</td>
                           <td>{DValData.q1.toString()}</td>
                           <td>{DValData.q2.toString()}</td>
                           <td>{DValData.q3.toString()}</td>
                           <td>{DValData.q4.toString()}</td>
                           <td>{DValData.q5.toString()}</td>
                           <td>{DValData.q6.toString()}</td>
                           <td>{DValData.q7.toString()}</td>
                           <td>{DValData.q8.toString()}</td>
                           <td>{DValData.q9.toString()}</td>
                           <td>{DValData.q10.toString()}</td>
                           <td>{DValData.q11.toString()}</td>
                           <td>{DValData.q12.toString()}</td>
                           <td>{DValData.q13.toString()}</td>
                           <td>{DValData.q14.toString()}</td>
                           <td>{DValData.q15.toString()}</td>
                           <td>{DValData.q16.toString()}</td>
                           <td>{DValData.q17.toString()}</td>
                           <td>{DValData.q18.toString()}</td>
                           <td>{DValData.q19.toString()}</td>
                           <td>{DValData.q20.toString()}</td>
                           <td>{DValData.q21.toString()}</td>
                           <td>{DValData.q22.toString()}</td>
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
export default DonorValidationData;
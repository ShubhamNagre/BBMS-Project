import React, { Component } from 'react';
import BloodTestLogService from '../services/BloodTestLogService';

class BloodTestLogData extends Component {
    constructor(props){
        super(props)
        this.state={
          btlog:[]
        }
        
      }
      componentDidMount(){
        BloodTestLogService.getBloodTestLogs().then((res) => {
          this.setState({btlog:res.data});
          console.log(res.data);
        }).then(()=>{
          window.print();
        });
      }

    render() {
      
        return (
            <div>
                    <h2 className='text-center'>Blood Test Log Data</h2>
               <div className='row'style={{margin :"20px"}}>
                 <table className='table table-striped table-bordered'>
                   <thead>
                     <tr>
                       <th>User Id</th>
                       <th>Hepatitis B</th>
                       <th>Hepatitis C</th>
                       <th>HIV</th>
                       <th>Syphilis</th>
                       <th>Maleria</th>
                     </tr>
                   </thead>
                   <tbody>
                     {
                       this.state.btlog.map(
                         btlog=>
                         <tr key={btlog.id}>
                           <td>{btlog.id}</td>
                           <td>{btlog.hepatitisB.toString()}</td>
                           <td>{btlog.hepatitisC.toString()}</td>
                           <td>{btlog.hiv.toString()}</td>
                           <td>{btlog.syphilis.toString()}</td>
                           <td>{btlog.maleria.toString()}</td>
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

export default BloodTestLogData;
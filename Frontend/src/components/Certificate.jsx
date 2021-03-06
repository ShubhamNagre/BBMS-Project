import React, { Component } from 'react';

class Certificate extends Component {
    constructor(props) {
        super(props)
        this.state = {

            user: {}
        }
    }


    render() {
        let data = sessionStorage.getItem('userData');
        this.state.user = JSON.parse(data);
        console.log(this.state.user)
        return (
            <div style={{ size: "100%" }}>
                <table class="center" style={{ margin: "auto", width: "100%", height: "100%", border: "6px double Black" }} >
                    <tr><td style={{ textAlign: "center" }}><h1 style={{ font: "50px", padding: "top 10px" }}>New Life Blood Bank</h1></td></tr>
                    <tr>
                        <td><center><img src="./images/logo.png" alt="logo" style={{ width: "70px" }} /></center></td>
                    </tr>
                    <tr><td ><h1 style={{ color: "rgb(94, 64, 193)", font: " 40px" }}><center>Certificate of Appreciation</center></h1></td></tr>
                    <tr><td style={{ font: "30px" }}><center>This Certificate is greatfully presented to </center></td></tr>
                    <tr><td style={{ font: "47px"}}><center>{this.state.user.fname} {this.state.user.mname} {this.state.user.lname}</center></td></tr>
                    <tr><td style={{ font: "26px" }}><center>for it's valuable blood donation <br /> in <b>"New Life Blood Bank"</b> on {new Date().toLocaleString()} and hope <br /> for it's support in future also.</center></td></tr>
                    <tr>
                        <td><center><img src="./images/demosign1.png" alt="sign" style={{ width: "100px", padding: "20px" }} /></center></td>
                    </tr>
                    <tr>
                        <center><td style={{ font: "27px", padding: "10px" }}>
                            Medical Officer
                        </td></center>
                    </tr>
                </table>

                <button onClick={window.print()}>PRINT</button>
            </div>
                        );
    }
}
export default Certificate;
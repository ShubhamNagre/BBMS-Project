import React, { Component } from 'react';

class FooterComponents extends Component {
    constructor(props){
        super(props)
        this.state={
        }
      }
    render() {
        return (
            <div  style={{position:"absolute",float:"bottom", left:"0",right:"0", bottom:"0", padding:"0px"}}>
                <footer className='footer bg-info bg-info.bg-gradient'>
                &copy; <span className='text-dark'>All rights Reserved 2022 Saurabh and Shubham</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponents;
import React, { Component } from 'react';
import BstockService from '../services/BstockService';
import Map from './Map';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bstock: []
        }
    }

    componentDidMount() {
        BstockService.getBloodStock().then((res) => {
            this.setState({ bstock: res.data });
        });
    }

    render() {
        return (
            <div>
                <table class="d-flex align-items-center justify-content-center">
                    <tr class="row ">
                        {this.state.bstock.map(bstock =>
                                <td class="col-sm-3"><a href="./Login" class="text-decoration-none" >
                                    <div class="card w-auto p-1 text-white bg-danger  ">
                                        <div class="card-body text-center">
                                            <p class="card-text">Blood Group: <b>{bstock.bloodgrp}</b></p>
                                            <p class="card-text">Available Bags: <b>{bstock.quantity}</b></p>
                                        </div>
                                    </div>
                                </a>
                        </td>)}
                    </tr>
                </table>
                <Map/>
            </div>
        );
    }
}

export default HomePage;
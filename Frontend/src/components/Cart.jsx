import React, { Component } from 'react';
import BstockService from '../services/BstockService';


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bstock: [],
            quantity: ''
        }
        this.quantity = this.quantity.bind(this);
    }

    componentDidMount() {
        BstockService.getBloodStock().then((res) => {
            this.setState({ bstock: res.data });
        });
    }

    quantity = (event) => { this.setState({ quantity: event.target.value }); }

    // Quantity=(u)=>{u.preventDefault();

    //    return { quantity:this.state.quantity*500}
    // }

    render() {
        return (
            <div>
                <table class="d-flex align-items-center justify-content-center">
                    <tr class="row ">
                        {this.state.bstock.map(bstock =>
                            <td class="col-sm-3">
                                <div class="card w-auto p-1 text-white bg-danger  ">
                                    <div class="card-body text-center">
                                        <p class="card-text">Blood Group: <b>{bstock.bloodgrp}</b></p>
                                        <p class="card-text">Available Bags: <b>{bstock.quantity}</b></p>
                                    </div>
                                </div>
                            </td>)}
                    </tr>
                </table>
                <form action="">
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="card bg-light">
                            <div class="card-body ">
                                <p class="card-text"><b>Add to Cart:</b></p> <hr />
                                <table>
                                    <tr>
                                        <td>

                                            <p class="card-text">Blood Group:</p>
                                            <select name="bloodgroup" id="bloodgroup"
                                                value={this.state.blood_group} onChange={this.changeBloodGroupHandler}>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>
                                        </td>
                                        <td>
                                            <p class="card-text">Quantity:</p>
                                            <input type="text" name="quantity" id="quantity" value={this.state.quantity} onChange={this.quantity} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="card-text">Total(including GST):</p>
                                            <p>{this.state.quantity * 1050}</p>
                                        </td>
                                        <td>
                                            <a href="./Payment"><button type="button" class=" btn btn-info">Payment</button></a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Cart;
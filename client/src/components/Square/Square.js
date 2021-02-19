import React from 'react';
import config from '../utils/paymentForm.js';
import './assets/css/style.css'


const Square = ({ paymentForm }) => {

    // let totalPrice = JSON.parse(localStorage.getItem('state'));

    paymentForm = new paymentForm(config);
    paymentForm.build();
    const requestCardNonce = () =>{
        paymentForm.requestCardNonce();
    }

    return (
        <div id="formDiv">
            <div className="cardLogoDiv">
                <h5>Square Payment Form</h5>
            </div>
            <div id="sq-card-number"></div>
            <div className="third" id="sq-expiration-date"></div>
            <div className="third" id="sq-cvv"></div>
            <div className="third" id="sq-postal-code"></div>
            <div className="checkTotal">
                <h3 id="paymentDue">Payment Due Now:</h3>
                {/* <span id="duedue">${totalPrice.total}</span> */}
            </div>
            <button id="sq-creditcard" className="button-credit-card squareSubmit midtransition" onClick={requestCardNonce}>Submit</button>
        </div>
      
    )
}

export default Square;
import React, { Component } from 'react';
import donation from '../audio/donation.PNG';

export class Donation extends Component {
    render() {
        return (
            <div>
                <div className="pastorgallery donation-section" >
                    <div className="container bannertext"> Your donation is others inspiration</div>
                </div>

                <div className="container donation-section1" style={{paddingBottom:'40px'}}>
                    <div className="homeheader homeheader1" style={{fontSize:'40px'}}>To make <span className="homeheader-span" > donations</span></div>

                    <div className="row">
                        <div className="col-6">
                            <div className="">
                                <p style={{fontWeight:'bold', fontSize:'22px'}}>Nigeria Bank details</p>
                                <p>
                                    <span className="account-title"> Account Name : <span className="account-details"> Kingdom of Christ Church</span></span>
                                    <span className="account-title"> Account Number : <span className="account-details"> 1582006669 </span></span>
                                    <span className="account-title"> Bank : <span className="account-details"> Ecobank</span></span>
                                </p>
                            </div>
                            <hr style={{borderTop:'1px solid #ff5e14'}}/>

                            <div className="" style={{paddingTop:'10px'}}>
                                <p style={{fontWeight:'bold', fontSize:'22px'}}>Benin republic Bank details</p>
                                <p>
                                    <span className="account-title"> Account Name : <span className="account-details"> EGLISE DU ROYAUME DU CHRIST</span></span>
                                    <span className="account-title"> Code IBAN: <span className="account-details"> BJ66BJ0620100111110171500128 </span></span>
                                    <span className="account-title"> Numero de compte interne: <span className="account-details"> 111101715001</span></span>
                                    <span className="account-title"> Code SWIFT: <span className="account-details"> ECOCBJBJ</span></span>
                                    <span className="account-title"> Bank : <span className="account-details"> Ecobank</span></span>
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={donation} alt="error" width="100%"/>
                            <p className="" style={{position: 'absolute', bottom:'30%', padding:'20% 0% 0px 50px'}}>Let's work together to build the gospel</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donation

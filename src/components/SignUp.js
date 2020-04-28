import React from 'react';

import states from './data/states';


export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="login100-form validate-form">
                        <div className="wrap-input100 validate-input" data-validate="State is required">
                            <select className="input100" name="state" id="state_list" style={{"-webkit-appearance": 'none', "border": "1px", "outline":"none","color":"#666666"}} required="">
                                <option value="-1" style={{display: 'none'}}> Choose State</option>
                                <option value="ap">Andhra Pradesh</option>
                            </select>
                            <span className="symbol-input100">
                                <i className="fa fa-map-marker " aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="district">
                            <select className="input100" name="district" id="district" style={{"-webkit-appearance": "none", "border": "1px", "outline":"none", "color":"#666666"}}>
                                <option value="-1" style={{'display':'none'}}> Choose district</option>
                            </select>
                            <span className="symbol-input100">
                                <i className="fa fa-location-arrow" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Phone Number should be 10 numbers">
                            <input className="input100" type="number" name="phone" placeholder="Phone No." data-kwimpalastatus="alive" data-kwimpalaid="1588047873565-0" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Submit
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="msg" style={{"display": "none"}}>
                                    Service Activated! You will receive an SMS Soon.
                                    <br />
                                    <br />
                                        Share it with your loved one's and friends to help them.
                                    <br />
                                    <br />
                                </p>
                                <div className="post-share" style={{"display": "none"}}>
                                    <a className="social-whatsapp" target="_blank" id="whatsapp" href="whatsapp://send?text=Coronavirus India Update On SMS - Near you - http://coronafight.online/">
                                        <i className="fa fa-whatsapp"></i><span>Whatsapp</span>
                                    </a>
                                    <br />
                                    <br />
                                    <a className="social-facebook" target="_blank" id="facebook" href="https://www.facebook.com/sharer/sharer.php?u=Coronavirus India Update On SMS - Near you - http://coronafight.online"><i className="fa fa-facebook"></i><span>Share</span></a>
                                    <br />
                                    <br />
                                    <a className="social-twitter" target="_blank" id="twitter" href="https://twitter.com/intent/tweet?text=Coronavirus India Update On SMS - Near you - http://coronafight.online/"><i className="fa fa-twitter"></i><span>Tweet</span></a>
                                </div>
                            <p></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
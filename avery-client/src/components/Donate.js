import React, {Component} from 'react';
import './Donate.css'
import {Link} from 'react-router-dom';

export default class Donate extends Component {
    render(){
        return(
            <div>
                   <div class="banner">
                    </div>

                    <div class="container mt-4">
                        <h2 class="txt">How To Donate</h2>
                            <p class="txt">
                            If you have the means,
                            We have made two methods of donating to the cause. You can either choose, to donate through our gofund me page.
                            Or directly to us through paypal. 
                            </p>
                        </div>
                    <div class="container">
                            <Link to='/'>
                                <button className="btn btn-outline-warning mb-5 mr-3 pt-1 "><span>GoFundme</span></button>
                            </Link>
                            <Link to='/donatedirectly'>
                                <button className="btn btn-outline-info  mb-5 pt-1"><span>Donate Directly</span></button>
                            </Link>
                    </div>
            </div>
            
        )
    }
}
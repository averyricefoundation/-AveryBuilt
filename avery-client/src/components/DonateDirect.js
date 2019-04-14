import React, {Component} from 'react';
import "./DonateDirectly.css"

export default class DonateDirectly extends Component {
    render(){
        return (
            <div className="container text-center">
                    <h2 className="mt-5 thankyou">You're contribution is greatly apprechiated.</h2>
                    <div className="row mt-5">
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$5</h1>
                                <p className="card-text">Click below to donate.</p>
                                <a href="#" className="btn btn-outline-warning">Donate $5</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$10</h1>
                                <p className="card-text">Click below to donate.</p>
                                <a href="#" className="btn btn-outline-warning">Donate $10</a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$15</h1>
                                <p className="card-text">Click below to donate.</p>
                                <a href="#" className="btn btn-outline-warning">Donate $15</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                            <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">$20</h1>
                                <p className="card-text">Click below to donate.</p>
                                <a href="#" className="btn btn-outline-warning">Donate $20</a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-12 col-md-12 col-lg-12  text-center">
                            <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Custom Amount</h2>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">$</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <div class="input-group-append">
                                        <span class="input-group-text">.00</span>
                                    </div>
                                    </div>
                                <a href="#" className="btn btn-outline-warning">Donate</a>
                            </div>
                            </div>
                        </div>
                    </div>



            </div>
        )
    }
}
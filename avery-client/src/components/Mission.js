import React, {Component} from 'react';
import './Mission.css'
import {Link} from 'react-router-dom';

export default class Mission extends Component {
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Do it for Avery.</h1>
                            <p className="lead">Help make a change in the osceola community.</p>
                        </div>
                    </div>
                <div className="container">

                            <h2>About Avery</h2>
                            <p>
                            We believe that if someone would have just called 911 or dropped Avery at the hospital between the time of 6:00 pm and 9:00 pm, he would still be alive right now. 
                            On the night of January 13, 2019, Avery was brought to the house across the street and was put on the lawn not breathing and unresponsive. 
                            His friends didn't want to call 911 because they were afraid that Avery will go to jail if the police found out he was using drugs. 
                            You see, away from skateboarding and fixing cars, Avery had friends who were not a good influence and led him down the wrong path.
                            Here you will be able to memorialize Avery Michael Rice, who spent countless hours helping people out, friends or strangers, even if he puts himself in danger. 
                            He lived his life to the fullest and encouraged others to do the same. Our vision is to build a skatepark to commemorate Avery and let everyone enjoy as much as Avery would have enjoyed skating. 
                            Skateboarding is first and foremost his love and passion. Below you will learn why he loved skateboarding.
                            </p>




                            <h2>Mission Statement</h2>
                            <p>
                            Our mission is to build a local skatepark in the Kissimmee / Poinciana area to commemorate Avery Rice. 
                            Most of Avery's friendships that he made throughout the years were because of skateboarding, 
                            so we want to provide others the same opportunity to build a friendship that could possibly last a lifetime.
                            We also want to take the opportunity through this website to prevent unnecessary deaths by training people on drugs, and its effects on someone's health. 
                            In addition, we would like to provide some information on what to do when you suspect someone is having a medical issue. 
                            Below are some of the helpful links that can be useful in these kinds of situations.
                            </p>


                            <Link to='/products'>
                                <button className="btn btn-outline-warning mb-5 mr-3 pt-1 "><span>View Products</span></button>
                            </Link>
                            <Link to='/donate'>
                                <button className="btn btn-outline-info  mb-5 pt-1"><span>Donate to the cause..</span></button>
                            </Link>
                </div>
                

            </div>
                
        )
    }
}
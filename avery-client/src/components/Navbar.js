import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render(){
        return(
            <div>
                <NavWraper className="navbar navbar-expand-lg navbar-dark px-sm-5">
                            <Link to="/">
                            <h5 className="ab mt-2">#AveryBuilt</h5>
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav align-items-center ml-auto">
                                                        <li className="nav-item">
                                                            <Link to="/products" className="nav-link">
                                                                products
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/mission" className="nav-link">
                                                                mission
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/about" className="nav-link">
                                                                about
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/donate" className="nav-link">
                                                                donate
                                                            </Link>
                                                        </li>
                                                        <li>
                                                        <Link to="/cart" className="ml-auto">
                                                                <ButtonContainer >
                                                                <span className="mr-2 ml-1">
                                                                <i className="fas fa-cart-plus"></i>
                                                                </span>
                                                                </ButtonContainer>
                                                        </Link>
                                                        </li>
                                                    </ul> 
                                                </div>

                                              
                </NavWraper>
            </div>
        )
    }
}


const NavWraper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainwhite) !important;
        font-size:1.3rem;
        text-transform: capitalize !important;
    }
`



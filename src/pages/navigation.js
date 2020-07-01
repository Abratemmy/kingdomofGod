import React, { Component } from 'react';
import './navigation.css';
import {NavLink} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
// import {logo} from '../logo/logo.jpg';

export class Navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isOpen: true,
             isShow: false
        }
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    showToggle = () =>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div className="navigation">
                <header>
                    <div className="container">
                        <div className="nav-logo"><img src="https://res.cloudinary.com/aitechma/image/upload/v1593546686/churchweb/logo11_o3eos5.jpg" alt="not seen" className="logo"/></div> 

                        <div className="nav-icon-logo">
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon" />
                            </button>
                        </div>
                        <nav>
                            <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"}>
                                <li><NavLink to="/" activeClassName="selected" activeStyle={{color:'#ff5e14'}}>Home</NavLink> </li>
                                <li className="nav-item dropdown">
                                    <NavLink to ="/about" id="navbarDropdown" data-toggle="dropdown">About us</NavLink>
                                 </li>
                                <li><NavLink to ="/pastorgallery" >Pastorate</NavLink> </li>
                                <li><NavLink to ="/audio">Audio Sermon</NavLink> </li>
                                <li><NavLink to ="/contact" >Contact</NavLink> </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navigation

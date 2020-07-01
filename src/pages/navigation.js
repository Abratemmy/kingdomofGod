import React, { Component } from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';
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
                                <li><Link to="/" className="active">Home</Link> </li>
                                <li className="nav-item dropdown">
                                    <Link to ="/about"  id="navbarDropdown" data-toggle="dropdown">About us</Link>
                                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="" className="dropdown-item">Who we are</Link>
                                        <Link to="" className="dropdown-item">Who we if</Link>
                                    </div> */}
                                 </li>
                                <li><Link to ="/pastorgallery">Pastorate</Link> </li>
                                <li><Link to ="/audio">Audio Sermon</Link> </li>
                                <li><Link to ="/contact">Contact</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navigation

import React, { Component } from 'react';
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div className="" style={{backgroundColor:'rgb(27, 27, 27)'}}>
                <div className="container footer-background">
                    <div className=" row footer-row">
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-column">
                            <div className="logo-widget footer-widget">
                                <figure className="logo-box"><a href="/"><img src="https://res.cloudinary.com/aitechma/image/upload/v1593546686/churchweb/logo11_o3eos5.jpg" alt="not seen" className="footer-logo" style={{color:'#ff5e14'}} /></a></figure>
                                <div className="text">
                                    <p>Preaching God's word through the Bible</p>
                                    <p> Our goal is to do nothing against the truth, but for the truth. We stand on the rock that never fails.</p>
                                </div>
                                <ul className="footer-social">
                                    <li><Link to="https://www.facebook.com" target="_blank" className="footer-social-link"><FaFacebookF className="footersocial-icons"/></Link></li>
                                    <li><Link to="https://twitter.com" target="_blank"className="footer-social-link"><FaInstagram className="footersocial-icons"/></Link></li>
                                    <li><Link to="https://www.instagram.com" target="_blank"className="footer-social-link"><FaLinkedinIn className="footersocial-icons" /></Link></li>
                                    <li><Link to="https://www.linkedin.com" target="_blank"className="footer-social-link"><FaTwitter className="footersocial-icons"/></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 offset-sm-1 footer-column">
                            <div className="service-widget footer-widget">
                                <div className="footer-title">Topics</div>
                                <ul className="list">
                                    <li>Salvation</li>
                                    <li>Marriage</li>
                                    <li>Life</li>
                                    <li>Life with JEsus</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 footer-widget">
                            <div className="contact-widget footer-widget">
                                <div className="footer-title">Contacts</div>
                                <div className="text">
                                    <p> Eldorado beach donaten PLM 06 PB 167 Akpakpa Cotonou, Benin.</p>
                                    <p>+22997253027 / +2348033271649</p>
                                    <p>kingdomofchristchurch. org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container text-center">
                        <p>&copy; 2020 All Right Reserved. <span className=""> Kingdom of Christ Church</span></p>
                    </div>
                </div>

                {/* <div className="col-md-4">
                    <div className="cours2" style={{overflow:'hidden'}}>
                            <img className="hover" src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458__340.jpg" style={{width:'100%', height:'200px',border:'1px solid transparent',transition:'1s'}}/>
                            <div className="cours3">
                                <h2 style={{textAlign:'center',marginTop:'-6px', color:'rgb(237,78,110)'}}>ISTAKHAR</h2>
                                    <h5 style={{textAlign:'center'}}>Teaching To Over Students To Making Applications..</h5>
                                    <h5 style={{textAlign:'center'}}>Student Can Make Apropariats Are The Creating Applications Are The All About The Relivents If The Regarding..</h5>
                            </div>
                            <div className="cours4 text-center">
                                
                                <button className="cou" style={{border:'1px solid transparent', padding:'10px 20px ', fontSize:'16px', borderRadius:'10%',backgroundColor:'rgb(237,78,110)', color:'white'}}>View More</button>
                            
                            </div>
                    </div>
                </div> */}

                
            </div>
        )
    }
}

export default Footer

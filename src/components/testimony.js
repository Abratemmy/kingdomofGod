import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Testimony extends Component {
    render() {
        const testimonyslides = {
        dots: false,
        arrow: false,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        className: "slides"
    }
        return (
            <div className="container-fluid testimony">
                <div className="container text-center">
                    <div className="homeheader homeheader1" ><span className="homeheader-span">Our </span> Testimony</div>
                    <p>Jesus is doing wonders in our midst. We overcome by the blood of the lamb and by the words of our testimony</p>
                </div>
                <div className="container">
                    <div className="testimonial-content">
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12 testimonial-column">
                                <div className=" top-content overlay-bg" >
                                    <div className="sec-title">Featured <br />Stories</div>
                                </div>
                            </div>  
                            <div className  ="col-lg-3"></div>                       
                        </div>
                        <section className="testimony-slide">
                            <div className="container">
                                <Slider {...testimonyslides} className=" slidecontainer">
                                    <div className="sliding-testimony">
                                        <div className="text"> I want appreciate what God did in my life and my family. I was deliver from the power of darkness.Praise God
                                        </div>

                                        <div className="author-info">
                                            <figure className="author-thumb"><img src="https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753__340.jpg" width= '100%' alt="not seen" /></figure>
                                            <h5>Courage Olaniyi</h5>
                                        </div>
                                    </div>

                                    <div className="sliding-testimony">
                                        <div className="text"> I appreciate God for the salvation of my soul. I want to thank God on behalf of my husband. After the devil attempt. God save him from sickness
                                        </div>

                                        <div className="author-info">
                                            <figure className="author-thumb"><img src="https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753__340.jpg" width= '100%' alt="not seen" /></figure>
                                            <h5>Courage Olaniyi</h5>
                                        </div>
                                    </div>
                                    
                                </Slider>

                            </div>

                        </section>
                                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimony

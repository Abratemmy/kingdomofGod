import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Blog extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            centerPadding: "10px",
            autoplaySpeed: 5000,
            className: "slides"
        }
        return (
            <div>
                 <div className="container-fluid text-center" style={{backgroundColor: 'rgb(37, 37, 37)', height:'500px', color: 'white'}}>
                    <div className="container">
                        <div className="homeheader  homeheader1" style={{color:'white',}}>
                            <span className="homeheader-span">Our </span>latest <span className="homeheader-span">Blogs</span>
                        </div>
                        <p>Learn more about God through our blog. Learn how to grow spiritually</p>
                    </div>
                </div>

                <div className="container-fluid"style={{backgroundColor:'#e8e9e9',height:'350px'}}>               
                    <div className="container blogslider" style={{position:'relative', top:'-215px', color:'blue'}}>
                        <Slider {...settings}>
                            <div>
                                <div className="card blogcard"style={{maxWidth: '20rem'}} >
                                    <img src="https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607__340.jpg" className="blogcard-img-top" alt="not found"width="100%" height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title blogcardtitle">Marriage</h5>
                                        <p className="card-text">It is not good for a man to be alone.|A man shall leave his father and mother and cling to his wife </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card blogcard no-border"style={{maxWidth: '20rem'}} >
                                    <img src="https://image.shutterstock.com/image-photo/happy-family-two-daughters-playing-260nw-634089968.jpg" className="blogcard-img-top" alt="not found"width="100%" height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title blogcardtitle">Family</h5>
                                        <p className="card-text">It is not good for a man to be alone.|A man shall leave his father and mother and cling to his wife </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card blogcard no-border"style={{maxWidth: '20rem'}} >
                                    <img src="https://cdn.pixabay.com/photo/2013/09/29/02/00/ten-commandments-187967__340.jpg" className="blogcard-img-top" alt="not found"width="100%" height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title blogcardtitle">Salvation</h5>
                                        <p className="card-text">It is not good for a man to be alone.|A man shall leave his father and mother and cling to his wife </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card blogcard no-border"style={{maxWidth: '20rem'}} >
                                    <img src="https://image.shutterstock.com/image-photo/sanctification-easter-bread-wine-260nw-1705528825.jpg" className="blogcard-img-top" alt="not found"width="100%" height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title blogcardtitle">Sanctification</h5>
                                        <p className="card-text">It is not good for a man to be alone.|A man shall leave his father and mother and cling to his wife </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card blogcard no-border"style={{maxWidth: '20rem'}}>
                                    <img src="https://cdn.pixabay.com/photo/2018/06/12/02/42/jesus-3469896__340.jpg" className="blogcard-img-top" alt="not found"width="100%" height="300" />
                                    <div className="card-body">
                                        <h5 className="card-title blogcardtitle">Jesus & God</h5>
                                        <p className="card-text">It is not good for a man to be alone.|A man shall leave his father and mother and cling to his wife </p>
                                    </div>
                                </div>
                            </div>

                            
                        </Slider>
                    
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Blog

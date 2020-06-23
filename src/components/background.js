import React, { Component } from 'react';
import './background.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from 'wowjs';
// import { Spring } from 'react-spring';

const photos=[
    {
        id: 1,
        name: 'photo 1',
        url: "https://colorlib.com/preview/theme/spring/images/about-2.jpg",
        text:"hello"
    },
    {
        id: 2,
        name: 'photo 2',
        url: "https://colorlib.com/preview/theme/christian/images/bg_1.jpg",
        text:"hello"
    },
    {
        id: 3,
        name: 'photo 3',
        url: "https://colorlib.com/preview/theme/spring/images/bg_1.jpg",
        text:"hello"
    }
]


class Background extends React.Component {
   componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() { const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        className: "slides"
    }
    return (
        <div className="">
       
                <Slider {...settings} className="background-slider">
               {photos.map(photos=>{
                    return<div className="sliding-image " key={photos.id}> 
                        <img src={photos.url} width="100%" height="650" alt="error" className="bgimage"/>
                        <div className="c1style container" style={{position: 'absolute', top:'30%', paddingLeft:'8%'}}>
                            <div className="homeheader " style={{ color:'#222222', width:'100%'}}><span className=" backgroundtitle"> Kingdom of <span style={{color:'#ff5e14',fontSize:'70px'}}>Christ Church </span></span>
                                <br />
                            </div>

                            <div className="wow flipInY" data-wow-duration="2s" data-wow-iteration="infinite">Eglise Du Royaume Du Christ</div>
                    
                            <div className="content">
                                <div className="slider-wrapper">
                                    
                                    <div className="slider">
                                        <div className="slidertext1"><span style ={{color:'#ff5e14'}}>The church</span>  of God</div> 
                                        <div className="slidertext2"><span style ={{color:'#ff5e14'}}>Where Love </span> abound</div>
                                       
                                    </div>
                                </div>
                            </div>

                            <div className="WOW slideInLeft">Hello </div>
                            
                        </div>
                    </div>                         
                })}
            </Slider> 

            
        </div>    
       
    )
    }
}

export default Background

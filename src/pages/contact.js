import React, { Component } from 'react';
import { BsFillEnvelopeFill} from "react-icons/bs";
// import axios from 'axios'
import {FaRegAddressCard, FaPhone  } from 'react-icons/fa';
import Form1 from './form';  
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps"; 
  import Geocode from 'react-geocode';

  Geocode.setApiKey("AIzaSyBO2p88YOi9n5jx5iqDr8s4hxCQW2lSnUc")


export class Contact extends Component {
    state={
        address:'',
        city:"",
        area:"",
        state:"",
        zoom:15,
        height: 600,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition:{
            lat:0,
            lng: 0
        }
    }

    componentDidMount(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition:{
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                }, ()=>{
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
                    .then(response => {
                        console.log('response', response)
                        const address = response.results(0).formatted_address,
                            addressArray = response.results[0].address_components,
                            city = this.getCity(addressArray),
                            area = this.getArea(addressArray),
                            state= this.getState(addressArray);
            
                            this.setState({
                                address:(address) ? address : "",
                                area: (area) ? area :"",
                                city:(city) ? city : "",
                                state : (state) ? state :"",
                            })
                    })

                })
            })
        }
    }

    getCity = (addressArray) =>{
        let city = '';
        for(let index = 0; index < addressArray.length; index++){
            if (addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]){
                city = addressArray[index].long_name;
                return city;
            }
        }
    }

    getArea = (addressArray) =>{
        let area = '';
        for(let index = 0; index < addressArray.length; index++){
            if (addressArray[index].types[0]){
                for (let j = 0; j < addressArray.length; j++){
                    if ('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]){
                        area = addressArray[index].long_name;
                        return area;
                    }
                }    
            }
        }
    }

    getState = (addressArray) =>{
        let state = '';
        for(let index = 0; index < addressArray.length; index++){
            if (addressArray[index].types[0] && 'administrative_area_level_1' === addressArray[index].types[0]){
                state = addressArray[index].long_name;
                return state;
            }
        }
    }


    onMarkerDragEnd = (event) =>{
        let newLat= event.latLng.lat();
        let newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng)
        .then(response => {
            
            const address = response.results(0).formatted_address,
                addressArray = response.results[0].address_components,
                city = this.getCity(addressArray),
                area = this.getArea(addressArray),
                state= this.getState(addressArray);

                this.setState({
                    address:(address) ? address : "",
                    area: (area) ? area :"",
                    city:(city) ? city : "",
                    state : (state) ? state :"",
                    markerPosition :{
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition :{
                        lat: newLat,
                        lng: newLng
                    },
                })
        })

        
    }
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
            >
              <Marker
              draggable = {true}
              onDragEnd = {this.onMarkerDragEnd}
                position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}>
                  <InfoWindow>
                      <div>Welcome to church location</div>
                  </InfoWindow>
              </Marker>
            </GoogleMap>
          ));
          
        return (
            <div>
                 <div className="pastorgallery" >
                    <div className="container bannertext"> Contact us</div>
                    
                </div>

                <section className="contact-section" style={{paddingBottom:'40px'}}>
                    <div className="container">
                        {/* code for contact information */}
                        <div className="contact-title">Contact information</div>
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-12 contact-column" >
                                <div className="contact-text">Address : <span className="contact-span">AJ - 325, SEC - 2, SALTLAKE, KOLKATA - 700091</span></div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 contact-column">
                                <div className="contact-text">Phone : <span className="contact-span">0202 00 2365</span></div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 contact-column">
                                <div className="contact-text">Email : <span className="contact-span">info@church.com</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 contact-column">
                                <div className="contact-info">
                                    <div className="contact-title">Get In Touch</div>

                                    {/* code for map api */}
                                    <MapWithAMarker
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBO2p88YOi9n5jx5iqDr8s4hxCQW2lSnUc&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                    {/* <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                            <div className="left-column contactaddress centred">
                                                <div className="icon-box"><FaRegAddressCard className="contact-icons"/></div>
                                                <h5>Address</h5>
                                                <div className="text">AJ - 325, SEC - 2, SALTLAKE, KOLKATA - 700091</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                            <div className="right-column contactaddress">
                                                <div className="icon-box"><BsFillEnvelopeFill className="contact-icons"/></div>
                                                <h5>Email</h5>
                                                <div className="text">info@church.com</div>
                                            </div>
                                            <div className="right-column contactaddress">
                                                <div className="icon-box"><FaPhone className="contact-icons"/></div>
                                                <h5>Phone No</h5>
                                                <div className="text">0202 00 2365</div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 contact-column">
                                <div className="contact-form-area">
                                    <div className="contact-title">Send Us A Message</div>
                                    {/* <Form id="contact-form" name="contact_form" class="default-form" onSubmit={this.handleSubmit}>                                       
                                        <FormGroup>
                                            <Label for="name">Name </Label>
                                            <Input type="text" name="name" value="" required="" className="inputfield" onChange={this.handleChange}/>                                           
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="email">Email </Label>
                                            <Input type="email" name="email" value="" required="" className="inputfield" onChange={this.handleChange}/>                                           
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="message">Message *</Label>
                                            <Input type="textarea" name="message" value="" required="" className="inputfield" onChange={this.handleChange}/>                                           
                                        </FormGroup>  
                                        <Button>Submit</Button>     
                                    </Form> */}
                                    <Form1 />
                                </div>
                            </div>
                        </div>
                    </div>
    </section>
                    
            </div>
        )
    }
}

export default Contact

import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Pastorgallery from './gallery.js';
import About from './about.js';
import Contact from './contact.js';
import Audio from './audio.js';
import Donation from './donation.js';

const Router = ()=>(
    <Switch>
        <Route exact path = '/kingdomofGod' component = {Home} />
        <Route exact path = '/' component = {Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path = '/pastorgallery' component = {Pastorgallery} />
        <Route exact path = '/contact' component = {Contact} />
        <Route exact path = '/audio' component = {Audio} />
        <Route exact path = '/donation' component = {Donation} />
        
    </Switch>
)
export default Router
import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import Navigation from './pages/navigation';
import Router from './pages/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

const App = () => {

  useEffect(() =>{
    Aos.init({duration: 1500});
}, []);

  return (
    <div className="App">
      <Navigation/>
      <Router />
      <Footer />
    </div>
  );
}

export default App;

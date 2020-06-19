import React from 'react';

import './App.css';
import Navigation from './pages/navigation';
import Router from './pages/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router />
      <Footer />
    </div>
  );
}

export default App;

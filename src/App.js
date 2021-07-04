import React from 'react'
import { Element } from 'react-scroll';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Featured from './components/featured/index'
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/highlights/index'
import Pricing from './components/pricing/index'
import Location from './components/location/index';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <VenueInfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>


      <Footer/>
    </div>
  );
}

export default App;
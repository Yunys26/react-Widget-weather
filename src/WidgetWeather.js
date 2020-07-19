import React, { Component } from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import './WidgetWeather.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';

class WidgetWeather extends Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Header />
          <MainSection />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default WidgetWeather;

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

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

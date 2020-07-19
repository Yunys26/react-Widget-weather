import React, { Component } from 'react';
import './WidgetWeather.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';

class WidgetWeather extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default WidgetWeather;

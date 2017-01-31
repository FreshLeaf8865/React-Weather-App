import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(city => city.main.temp - 273.15);
    const humidity = cityData.list.map(city => city.main.humidity);
    const pressure = cityData.list.map(city => city.main.pressure);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="highlight centered">
        <thead>
          <tr>
            <th>City</th>
            <th>Map</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}



function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
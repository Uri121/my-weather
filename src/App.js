import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/weather";
import "weather-icons/css/weather-icons.css";
import Form from "./components/form";

const API_Key = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      error: false,
      check: false,
      weatherIcon: undefined,
      fullData: [],
      dailyData: []
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  getWeather = async e => {
    try {

      e.preventDefault();

      const city = e.target.elements.city.value;
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`
      );

      
      const response = await api_call.json();
      const dailyData = response.list.filter(reading =>
        reading.dt_txt.includes("18:00:00")
      );
      this.setState({
        city: response.city.name,
        error: false,
        fullData: response.list,
        dailyData: dailyData
      });
    } catch {
      this.setState({ error: true, city: undefined });
    }
  };

  getWeatherWithLatLng = async pos => {

    
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_Key}`
    );

    const response = await api_call.json();
    const dailyData = response.list.filter(reading =>
      reading.dt_txt.includes("18:00:00")
    );
    this.setState({
      city: response.city.name,
      error: false,
      fullData: response.list,
      dailyData: dailyData
    });
  };

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherWithLatLng);
    }
  }

  handleCheckbox = e => {
    if (e.target.checked === true) {
      this.setState({
        check: e.target.checked
      });
      this.getLocation();
    } else {
      this.setState({
        city: undefined,
        error: false,
        fullData: [],
        dailyData: [],
        check: e.target.checked
      });
    }
  };

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <Weather reading={reading} key={index} />
    ));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="locationCheck"
                onChange={this.handleCheckbox}
              />
              <label
                className="custom-control-label"
                htmlFor="locationCheck"
                style={{ color: "white" }}
              >
                Get Location
              </label>
            </div>
          </div>
          <div className="box-2">
            <Form loadWeather={this.getWeather} error={this.state.error} />
          </div>
          {this.state.city ? (
            <h2 className="city-header">{this.state.city}</h2>
          ) : null}
          {this.state.city ? (
            <div className="row">
              {this.formatDayCards()}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

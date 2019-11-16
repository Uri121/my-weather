import React, { Component } from "react";
import Weather from "./weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./form";
import "./App.css";

const API_Key =  process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      check:false
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

  calCelsiuis(temp) {
    let cell = Math.floor(temp - 275.15);
    return cell;
  }

  getWeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icons: this.weatherIcon.Clouds });
    }
  }

  getWeather = async e => {
    try {
      e.preventDefault();

      const city = e.target.elements.city.value;

      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
      );

      const response = await api_call.json();
      this.setState({
        city: response.name,
        celsius: this.calCelsiuis(response.main.temp),
        temp_max: this.calCelsiuis(response.main.temp_max),
        temp_min: this.calCelsiuis(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });
      this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
    } catch {
      this.setState({ error: true,
      city:undefined 
    });
    }
  };

  getWeatherWithLatLng = async pos => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_Key}`
    );

    const response = await api_call.json();

    this.setState({
      city: response.name,
      celsius: this.calCelsiuis(response.main.temp),
      temp_max: this.calCelsiuis(response.main.temp_max),
      temp_min: this.calCelsiuis(response.main.temp_min),
      description: response.weather[0].description,
      error: false
    });
    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
  };

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherWithLatLng);
    }
  }

  handleCheckbox = e => {
  
    if (e.target.checked === true) {
      this.setState({
        check:e.target.checked
      })
      this.getLocation();
    }else{
      this.setState({
        city: undefined,
        icon: undefined,
        main: undefined,
        celsius: undefined,
        temp_max: undefined,
        temp_min: undefined,
        description: "",
        error: false,
        check:e.target.checked
      });
    }
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
            <Weather
              city={this.state.city}
              temp_celsius={this.state.celsius}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              description={this.state.description}
              weatherIcon={this.state.icon}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

// <input type="checkbox" onChange={e => this.checkItem(e)}></input>
//           <span class="badge badge-light">Get Location</span>

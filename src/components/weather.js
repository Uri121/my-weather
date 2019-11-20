import React from "react";

var moment = require("moment");

const Weather = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);
  const icon = getWeatherIcon(reading.weather[0].id);

  return (

      <div className="card">
        <h3 className="card-header">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted pb-2 pt-2">
          {moment(newDate).format("MMMM Do")}
        </p>
        <i className={`wi ${icon} display-4`}></i>
        <h3 className="pt-4">{calCelsiuis(reading.main.temp)}&deg;</h3>
        <p className="card-text pb-10">{reading.weather[0].description}</p>
      </div>

  );
};

function calCelsiuis(temp) {
  let cell = Math.floor(temp - 275.15);
  return cell;
}

function getWeatherIcon(rangeID) {
  let icon;
  switch (true) {
    case rangeID >= 200 && rangeID <= 232:
      icon = "wi-thunderstorm";
      break;
    case rangeID >= 300 && rangeID <= 321:
      icon = "wi-sleet";
      break;
    case rangeID >= 500 && rangeID <= 531:
      icon = "wi-storm-showers";
      break;
    case rangeID >= 600 && rangeID <= 622:
      icon = "wi-snow";
      break;
    case rangeID >= 701 && rangeID <= 781:
      icon = "wi-fog";
      break;
    case rangeID === 800:
      icon = "wi-day-sunny";
      break;
    case rangeID >= 801 && rangeID <= 804:
      icon = "wi-day-fog";
      break;
    default:
      icon = "wi-day-fog";
  }
  return icon;
}

export default Weather;

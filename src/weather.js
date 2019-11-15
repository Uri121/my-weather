import React from "react";
import "./weather.css";

const Weather = props => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h4>{props.city}</h4>
      </div>
      <div className="card-body">
        <h5 className="py-2">
          <i className={`wi ${props.weatherIcon} display-3`}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}
        {minMax(props.temp_min, props.temp_max)}
        <h5 className="py-3">{props.description}</h5>
      </div>
    </div>
  );
};

function minMax(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
export default Weather;

import React from "react";
import "./form.css";

const Form = props => {
  return (
    <div className="container">
      <div>{props.error? error():null}</div>
     
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div>
            <input
              className="form-control"
              type="text"
              name="city"
              placeholder="City"
              autoComplete="on"
            ></input>
          </div>
          <div className="ml-3 text-md-left">
            <button className="btn btn-light">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};
function error() {
  return (
    <div className="alert alert-danger max-5" role="alert">
      Please enter a vaild city
    </div>
  );
}

export default Form;

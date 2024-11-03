import React from "react";

function Card(props) {
  return (
    <div className="card-div">
      <div className="iconn">
        <center>
          <img src={props.IconUrl} alt="weather-icon" />
        </center>
      </div>
      <p>
        <b>Date:</b> {props.Time}
      </p>
      <p>
        <b>Temperature:</b> {props.Temperature}°C
      </p>
      <p>
        <b>Description:</b> {props.Description}
      </p>
      <p>
        <b>Feels like:</b> {props.Feels_like}°C
      </p>
      <p>
        <b>Humidity:</b> {props.Humidity}%
      </p>
      <p>
        <b>Pressure:</b> {props.Pressure} hPa
      </p>
      <p>
        <b>Wind Speed:</b> {props.WindSpeed} m/s
      </p>
      <p>
        <b>Visibility:</b> {props.Visibility} m
      </p>{" "}
      <p>
        <b>Precipitation:</b> {props.Pop}%
      </p>{" "}
    </div>
  );
}

export default Card;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Button from "./Button";
import CurrentTemp from "./CurrentTemp";
import Icon from "./Icon";
import Date from "./Date";
import WeatherState from "./WeatherState";

function App() {
  return (
    <div className="container">
      <div id="root">
        <div className="App">
          <div className="Weather">
            <form className="mb-3" abineguid="0076D2C5E6FD447094460E2CEFCE9D13">
              <div className="row">
                <div className="col-9">
                  <Search />
                </div>
                <div className="col-3">
                  <Button />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">Wylie</h1>
              <ul>
                <li>
                  <Date />
                </li>
                <li>
                  <WeatherState />
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-1">
                <div className="clearfix weather-temperature">
                  <Icon />
                </div>
              </div>
              <div className="col-1">
                <div className="float-left">
                  <CurrentTemp />
                </div>
              </div>
              <div id="list" className="col-10">
                <ul>
                  <li>
                    <Humidity />
                  </li>
                  <li>
                    <Wind />
                  </li>
                </ul>
              </div>
            </div>
            <small>
              <a
                href="https://github.com/VampirePrin4jc/Vanilla-Weather-App"
                target="_blank"
              >
                Open-source code
              </a>
              by Kathryn Lotzer
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

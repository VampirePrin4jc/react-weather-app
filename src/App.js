import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Button from "./Button";
import CurrentTemp from "./CurrentTemp";
import Icon from "./Icon";

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
                <li>Last updated: Wendsday 11:00</li>
                <li>Sunny</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <Icon />
                  <div className="col-3">
                    <div className="float-left">
                      <CurrentTemp />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

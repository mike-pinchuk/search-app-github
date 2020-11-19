import React from "react";
import "./App.css";
import Loader from "./components/Loader/index";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-wrapper">
          <div className="App-header__left">
            <div className="App-header__left-icon">
              <a href="https://requestum.com/">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQF9lXbU0ZvPKA/company-logo_200_200/0?e=2159024400&v=beta&t=DY8XvbP8swTlUrE3xCC-a7nMIp0TmnGJDe1nSTa6wBM"
                  alt=""
                />
              </a>
            </div>
            <div className="App-header__left-text">
              <h1>Requestum</h1>
              <p>Web development company</p>
            </div>
          </div>
          <div className="App-header__right">
            <p>Github users search app</p>
          </div>
        </div>
        <hr />
      </div>
      <Loader />
      <div className="App-footer"></div>
    </div>
  );
}

export default App;

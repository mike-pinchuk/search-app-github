import React, { useState } from "react";
import "./style.css";

const Loader = () => {
  const [load, setLoad] = useState([]);
  const [inputData, setInputData] = useState("");
  const [results, setResults] = useState("");

  let history = [];

  function handle(data) {
    setInputData(data);
    if (data.length < 1) {
      setResults("We have no any results");
    } else {
      history.push(data);
      setResults(
        history.map((e) => {
          return (
            <div className="history">
              <ul key={e.id}>
                <p>{e}</p>
              </ul>
            </div>
          );
        })
      );
      loading(data);
    }
  }

  function loading(request) {
    let result = [];
    let url1 = `https://api.github.com/search/repositories?q=${request}`;

    return fetch(url1, {
      headers: {
        accept: "application/json",
        Authorization: "52dddec49bffe9199fb466cf4a0cd21881bbfb4d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        result.push(data);
        setLoad(
          result[0].items.map((e) => {
            return (
              <div className="card" key={e.id}>
                <h3>
                  <a href={e.html_url}>{e.name}</a>
                </h3>
                <p>
                  Description:
                  {e.description === null
                    ? "Description does not exist"
                    : e.description.length < 100
                    ? e.description
                    : "Description is to long. Please, use link to read more about description"}
                </p>
              </div>
            );
          })
        );
      });
  }

  return (
    <div className="Loader">
      <div className="Loader-search">
        <input
          type="text"
          value={inputData}
          onChange={(e) => handle(e.target.value)}
        />
        <div className="results">{results}</div>
      </div>
      <div className="Loader-result">{load}</div>
    </div>
  );
};

export default Loader;

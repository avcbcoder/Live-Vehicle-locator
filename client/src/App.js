import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import $ from "jquery";

const Button = styled.button`
  cursor: pointer;
`;

const BASE_URL = "http://localhost:3000/";

function App() {
  async function fetchData() {
    $.ajax({
      url: BASE_URL,
      type: "GET",
      success: function(result) {
        const { payload } = result;
        alert(JSON.stringify(result));
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={fetchData}>Learn React</Button>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import $ from "jquery";

const Button = styled.button`
  cursor: pointer;
`;

const BASE_URL = "http://localhost:3000/";
const CARREGISTRATION_API_BASE_URL =
  "http://in.carregistrationapi.com/api/reg.asmx/CheckIndia";

const useSample = true;

//server to make update requests

const SAMPLE_RESPONSE = {
  Description: "FORD ENDEAVOUR ",
  RegistrationYear: "2009",
  CarMake: { CurrentTextValue: "FORD" },
  CarModel: { CurrentTextValue: "ENDEAVOUR" },
  EngineSize: { CurrentTextValue: "2499" },
  MakeDescription: { CurrentTextValue: "FORD" },
  ModelDescription: { CurrentTextValue: "ENDEAVOUR" },
  VechileIdentificationNumber: "MAJUXXMR2U9R21945",
  NumberOfSeats: { CurrentTextValue: "7" },
  Colour: "DIAMOND WH",
  EngineNumber: "9R21945",
  FuelType: { CurrentTextValue: "DIESEL" },
  RegistrationDate: "12/6/2009",
  Location: "RAJA GARDEN",
  ImageUrl: "http://in.carregistrationapi.com/image.aspx/@Rk9SRCBFTkRFQVZPVVIg"
};

function App() {
  async function fetchCarDetails() {
    const res = useSample
      ? $(SAMPLE_RESPONSE)
      : await $.ajax({
          url: CARREGISTRATION_API_BASE_URL,
          type: "POST",
          data: {
            username: "avcbcoder",
            RegistrationNumber: "DL4CAF4943"
          }
        });
    console.log(res);

    const obj = res.getElementsByTagName("vehicleJson")[0].innerHTML;
    console.log("json =" + obj);
  }

  async function fetchData() {
    const res = await $.ajax({
      url: BASE_URL,
      type: "GET",
      data: {
        id: 4,
        UserID: "avcb",
        email: "av@gmail",
        obj: { a: { df: 10 }, b: 5 }
      }
    });
    console.log(res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={fetchData}>CALL / ENDPOINT</Button>
        <Button onClick={fetchCarDetails}>CALL CREG API</Button>
      </header>
    </div>
  );
}

export default App;

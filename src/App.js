import React, { Component } from "react";

import "./App.css";
import "./scss/main.scss";
import Currency from "./Currency/Currency";
import Form from "./Form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="column-left">
          <Currency />
        </div>
        <div className="column-right">
          <Form />
        </div>

      </div >
    );
  }
}

export default App;

import React, { Component } from "react";

import SubTotal from "./components/Subtotal";
import PickupSavings from "./components/PickupSavings";
import TaxesFees from "./components/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal";
import "./App.css";

class App extends Component {
  state = {
    total: 100,
    pickUpSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0
  };
  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickUpSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
        </div>
      </div>
    );
  }
}

export default App;

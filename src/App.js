import React, { Component } from "react";

import SubTotal from "./components/Subtotal";
import PickupSavings from "./components/PickupSavings";
import TaxesFees from "./components/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal";
import "./App.css";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";

import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  state = {
    total: 100,
    pickUpSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  };

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickUpSavings) * 0.0875 },
      () => {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickUpSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler() {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  }
  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickUpSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);

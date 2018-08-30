import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Payments extends Component {
  state = {};
  render() {
    return (
      <StripeCheckOut
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        currency="usd"
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckOut>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
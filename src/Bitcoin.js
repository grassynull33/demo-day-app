import React, { Component } from 'react';
import axios from 'axios';

class Bitcoin extends Component {
  constructor() {
    super();
    this.state = {
      coinData: [],
      btcPrice: null,
      bchPrice: null
    };
    this.getCoinData = this.getCoinData.bind(this);
  }

  getCoinData() {
    let that = this;

    axios.get("https://api.coinmarketcap.com/v1/ticker/")
      .then(function(response) {
        that.setState({coinData: response.data, btcPrice: response.data[0].price_usd, bchPrice: response.data[3].price_usd});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getCoinData();
  }

  render() {
    return (
      <div className="Bitcoin">
        <h1>Bitcoin (BTC)</h1>
        <h2>${this.state.btcPrice}</h2>
        <h1>Bitcoin Cash (BCH)</h1>
        <h2>${this.state.bchPrice}</h2>
        <button className="btn btn-primary" onClick={this.getCoinData}>Refresh</button>
        <small>API updates only once every five minutes, so don't smash the button</small>
      </div>
    );
  }
}

export default Bitcoin;

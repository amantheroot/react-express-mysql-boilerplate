import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    companies: store.companies,
    products: store.products,
    stocks: store.stocks,
    customers: store.customers,
    suppliers: store.suppliers,
    orders: store.orders
  };
};

class toConnectHomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>{JSON.stringify(this.props.companies)}</li>
          <li>{JSON.stringify(this.props.products)}</li>
          <li>{JSON.stringify(this.props.stocks)}</li>
          <li>{JSON.stringify(this.props.customers)}</li>
          <li>{JSON.stringify(this.props.suppliers)}</li>
          <li>{JSON.stringify(this.props.orders)}</li>
        </ul>
      </div>
    );
  }
}

const HomePage = connect(mapStateToProps)(toConnectHomePage);

export default HomePage;

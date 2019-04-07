import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {fetchCompanies} from "./actions/companiesActions";
import {fetchProducts} from "./actions/productsActions";
import {fetchStocks} from "./actions/stocksActions";
import {fetchCustomers} from "./actions/customersActions";
import {fetchSuppliers} from "./actions/suppliersActions";
import {fetchOrders} from "./actions/ordersActions";

import Layout from "./components/layout";

import HomePage from "./components/pages/homePage";

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

class toConnectApp extends Component {
  componentWillMount() {
    this.getData();

    fetch('/api/hello')
      .then(res => res.json())
      .then(res => console.log(res));

    fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: 'Hello World!' })
    }).then(res => res.text()).then(res => console.log(res));
  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.props.dispatch(fetchCompanies(res)))

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.props.dispatch(fetchProducts(res)))
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.props.dispatch(fetchStocks(res)))

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.props.dispatch(fetchCustomers(res)))
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.props.dispatch(fetchSuppliers(res)))

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.props.dispatch(fetchOrders(res)))
  }

  render() {
    const {companies, products, stocks, customers, suppliers, orders} = this.props;
    console.log(companies, products, stocks, customers, suppliers, orders);
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;

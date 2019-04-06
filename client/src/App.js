import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    companies: store.companies,
    products: store.products,
    stocks: store.stocks,
    customers: store.customers,
    suppliers: store.companies
  };
};

class toConnectApp extends Component {
  componentDidMount() {
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

  render() {
    const {companies, products, stocks, customers, suppliers} = this.props;
    console.log(companies, products, stocks, customers, suppliers);
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;

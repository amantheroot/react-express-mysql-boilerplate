import React, { Component } from 'react';
import { connect } from "react-redux";

import {incrementState} from "./actions/stateActions";

const mapStateToProps = store => {
  return {
    store: store.stateReducer.state
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

  headClick = () => {
    this.props.dispatch(incrementState());
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.headClick}>Hello World! The State is {this.props.store}</h1>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;

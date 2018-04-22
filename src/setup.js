import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './index';

function setup() {

  // Redux needs to inject a store holding the app state into the app.
  // To do so, it requires a ‘Provider’ wrapping the whole app.
  // This store is basically a combination of reducers.

  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <Main />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
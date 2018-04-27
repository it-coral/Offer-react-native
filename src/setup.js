'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; //Import the store
import Main from './index';
export default  class Root extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Main />
            </Provider>
        );
    }
 }

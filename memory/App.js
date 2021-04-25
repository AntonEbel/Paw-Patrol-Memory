/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './src/containers/MainContainer';
import {createStore} from 'redux';
import {reducers} from './src/redux/Reducers';


const store = createStore(reducers);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

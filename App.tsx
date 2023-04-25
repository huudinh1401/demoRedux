/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/components/Main';
import store from './src/redux/store';


export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
          <Main/>
      </Provider>
      
    )
  }
}



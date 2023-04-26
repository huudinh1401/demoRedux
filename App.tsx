
import React, { Component } from 'react';
import Main from './src2/components/Main';
import { Provider } from 'react-redux';
//import Main from './src/components/Main';
//import store from './src/redux/store';
import store from './src2/redux/store';


export default class App extends React.Component {
  render(){
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}



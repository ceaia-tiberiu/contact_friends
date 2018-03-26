import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RequestContainer from './components/requestContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RequestContainer />
      </Provider>
    );
  }
}

export default App;

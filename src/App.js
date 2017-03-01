import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import SplashPage from './SplashPage';
import Navi from './Navi';


const store = createStore(() => { })

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Component: SplashPage
    }
    this.setTimeout = setTimeout.bind(this);
  }
  componentDidMount() {
    setTimeout(function () {
      this.setState({
        Component: Navi
      })
    }.bind(this), 3000);
  }

  render() {
    let Component = this.state.Component;
    return (
      <Provider store={store}>
        <Component></Component>
      </Provider>
    )
  }
}




import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './header';
import Main from './Main'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main />
      </div>
    );
  }
}

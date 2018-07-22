import React, { Component } from 'react';
import Head from './header';
import Slid from './sild';
import Content from './content';
export default class Home extends Component {
  render() {
    return (
      <div>
            <Head />
            <Slid />
            <Content />   
      </div>
    )
  }
};

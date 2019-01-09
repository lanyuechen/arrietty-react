import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import AioDemo from './all-in-one';
import FlexDemo from './flex';
import AspectRatioBoxDemo from './aspect-ratio-box';

const DEMO = {
  '/all-in-one': AioDemo,
  '/flex': FlexDemo,
  '/aspect-ratio-box': AspectRatioBoxDemo
};

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><NavLink to={'/'}>/</NavLink></li>
          {Object.keys(DEMO).map(k => (
            <li><NavLink to={k}>{k}</NavLink></li>
          ))}
        </ul>

        <Switch>
          {Object.keys(DEMO).map(k => (
            <Route path={k} component={DEMO[k]} />
          ))}
        </Switch>
      </div>
    )
  }
}
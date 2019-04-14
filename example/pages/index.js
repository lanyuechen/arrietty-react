import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import AioDemo from './all-in-one';
import FlexDemo from './flex';
import AspectRatioBoxDemo from './aspect-ratio-box';
import JsonEditor from './json-editor';
import CodeEditor from './code-editor';
import Dnd from './dnd';

const DEMO = {
  '/all-in-one': AioDemo,
  '/flex': FlexDemo,
  '/aspect-ratio-box': AspectRatioBoxDemo,
  '/json-editor': JsonEditor,
  '/code-editor': CodeEditor,
  '/dnd': Dnd
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
            <li key={k}><NavLink to={k}>{k}</NavLink></li>
          ))}
        </ul>

        <Switch>
          {Object.keys(DEMO).map(k => (
            <Route key={k} path={k} component={DEMO[k]} />
          ))}
        </Switch>
      </div>
    )
  }
}
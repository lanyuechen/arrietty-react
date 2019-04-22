import React, { Component } from 'react';

import './style.scss';

export default class Popover extends Component {
  static defaultProps = {
    x: 0,
    y: 0
  };

  constructor(props) {
    super(props);
    this.rect = {
      x: props.x,
      y: props.y
    }
  }

  render() {
    const { children } = this.props;
    const { x, y } = this.rect;

    return (
      <div className="popover" style={{left: x, top: y}}>
        {children}
      </div>
    )
  }
}
import React, { Component } from 'react';

import './style.scss';

export default class ContextMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.menu.focus();
  }

  handleClick = (cb, ...params) => {
    cb && cb(...params);
    this.props.onBlur();
  };

  render() {
    const { data, onBlur } = this.props;

    return (
      <div className="context-menu">
        <ul tabindex="1" ref="menu" onBlur={onBlur}>
          {data.map((d, i) => (
            <li
              key={i}
              onClick={(...params) => this.handleClick(d.onClick, ...params)}
            >
              {d.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
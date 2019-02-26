import React, { Component } from 'react';

import Item from './item';

import './style.scss';

export default class Form extends Component {
  static isObj(obj) {
    return obj && typeof(obj) === 'object';
  }

  constructor(props) {
    super(props);
  }

  handleChange = (k, v) => {
    const { value } = this.props;
    value.$update({
      $merge: {
        [k]: v
      }
    });
  };

  render() {
    const { name, value } = this.props;

    return (
      <div className="form-group">
        <label className="form-group-title">{name}</label>
        <ul className="form-group-list">
          {Object.entries(value).map(([k, v]) => (
            <li key={k}>
              {Form.isObj(v) ? (
                <Form value={v} name={k} />
              ): (
                <Item name={k} value={v} onChange={(v) => this.handleChange(k, v)} />
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
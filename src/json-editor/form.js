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

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
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
          {Object.entries(value).filter(([k]) => {
            return (
              k.indexOf('@') === -1 &&
              (!value[`@${k}`] || value[`@${k}`].type !== 'hidden')
            );
          }).map(([k, v]) => (
            <li key={k}>
              {Form.isObj(v) && !value[`@${k}`] ? (
                <Form value={v} name={k} />
              ): (
                <Item 
                  name={k} 
                  value={v} 
                  describe={value[`@${k}`]} 
                  onChange={(v) => this.handleChange(k, v)}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
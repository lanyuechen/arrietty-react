import React, { Component } from 'react';

import Input from './input';
import Checkbox from './checkbox';
import Radio from './radio';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { name, value, onChange, describe = {type: 'input'} } = this.props;
    console.log('[render form item]', name, describe, value);

    const C = {
      checkbox: Checkbox,
      radio: Radio,
      input: Input
    }[describe.type];

    return (
      <label>
        {name}: 
        <C name={name} value={value} describe={describe} onChange={onChange} />
      </label>
    );
  }
}
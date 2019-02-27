import React, { Component } from 'react';

import Input from './input';
import Checkbox from './checkbox';
import Radio from './radio';
import Select from './select';

const COMPONENTS = {
  checkbox: Checkbox, //复选框
  radio: Radio,       //单选框
  select: Select,     //下拉框
}

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

    const C = COMPONENTS[describe.type] || Input;

    return (
      <label>
        {name}: 
        <C name={name} value={value} describe={describe} onChange={onChange} />
      </label>
    );
  }
}
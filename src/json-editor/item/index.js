import React, { Component } from 'react';

import Input from './input';
import Checkbox from './checkbox';
import Radio from './radio';
import Select from './select';
import FileUpload from './file';
import Textarea from './textarea';

const COMPONENTS = {
  checkbox: Checkbox, //复选框
  radio: Radio,       //单选框
  select: Select,     //下拉框
  file: FileUpload,   //文件上传
  textarea: Textarea, //文本域
}

export default class extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { name, value, onChange, describe = {} } = this.props;
    console.log('[render form item]', name, describe, value);

    let C = COMPONENTS[describe.type] || Input;
    if (describe.type === 'custom' && describe.Component) {
      C = describe.Component;
    }

    return (
      <label>
        {name}: 
        <C name={name} value={value} describe={describe} onChange={onChange} />
      </label>
    );
  }
}
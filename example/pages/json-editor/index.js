import React, { Component } from 'react';

import JsonEditor from '@/json-editor';

import SPEC from './spec.json';

//------------- 自定义表单 start -----------------
class Custom extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  }

  render() {
    const { name, value, describe = {type: 'text'} } = this.props;
    return (
      <input
        type={describe.type}
        name={name}
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

const spec = {
  ...SPEC,
  custom: '{}',
  '@custom': {
    type: 'custom',
    Component: Custom
  }
}
//------------- 自定义表单 end -----------------
export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  handleChange = (data) => {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <JsonEditor 
          name="props"
          value={spec}
          onChange={this.handleChange}
        />
        <pre>
          {JSON.stringify(data, (k, v) => {
            if (k.indexOf('@') === 0) {
              return;
            }
            return v;
          }, 2)}
        </pre>
      </div>
    );
  }
}
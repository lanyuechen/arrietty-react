import React, { Component } from 'react';

import JsonEditor from '@/json-editor';

import spec from './spec.json';

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
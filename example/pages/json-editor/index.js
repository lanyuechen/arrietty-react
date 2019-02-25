import React, { Component } from 'react';

import JsonEditor from '@/json-editor';

const spec = {
  "style": {
    "background": "lightcoral",
    "width": "100%",
    "height": "100%",
    "font-size": "32px",
    "display": "flex",
    "align-items": "center",
    "justify-content": "center"
  },
  "children": "hello world"
};

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
          {JSON.stringify(data, undefined, 2)}
        </pre>
      </div>
    );
  }
}
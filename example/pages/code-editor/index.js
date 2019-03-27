import React, { Component } from 'react';

import CodeEditor from '@/code-editor';

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width: '100%', height: 400}}>
        <CodeEditor>
          {'function(){}'}
        </CodeEditor>
      </div>
    );
  }
}
import React, { Component } from 'react';

import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import './style.scss';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.editor = ace.edit(this.refs.container);
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/javascript");
    this.editor.session.on('change', () => {
      this.props.onChange && this.props.onChange(this.editor.getValue());
    })
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="f-c-code-editor" ref="container">
        {this.props.value || this.props.children}
      </div>
    )
  }
}
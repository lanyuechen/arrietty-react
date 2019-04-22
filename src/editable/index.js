import React, { Component } from 'react';

import './style.scss';

export default class Editable extends Component {
  constructor(props){
    super(props);
  }

  handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.props.onSubmit?.(e.target.value);
    } else if (e.key === 'Escape') {
      this.props.onCancel?.();
    }
  }

  handleCancel = (e) => {
    this.props.onCancel?.();
  }

  render() {
    const { editing } = this.props;

    if (editing) {
      return (
        <span className="ar-editable">
          <input 
            type="text" 
            spellCheck={false}
            defaultValue={this.props.children}
            onClick={this.handleClick}
            onKeyUp={this.handleKeyUp}
            onBlur={this.handleCancel}
          />
        </span>
      )
    }

    return (
      <span className="ar-editable">
        {this.props.children}
      </span>
    )
  }
}
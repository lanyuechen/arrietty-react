import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  }

  render() {
    const { name, value } = this.props;
    return (
      <input 
        name={name} 
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}
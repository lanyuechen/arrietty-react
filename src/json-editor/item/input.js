import React, { Component } from 'react';

export default class extends Component {
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
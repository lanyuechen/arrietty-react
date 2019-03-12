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
    const { name, value, describe } = this.props;
    console.log('------', name, value, describe)
    return (
      <input type="file" onChange={this.handleChange} />
    )
  }
}
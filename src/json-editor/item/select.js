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
    const { value, describe } = this.props;
    return (
      <select onChange={this.handleChange} value={value}>
        {describe.data && describe.data.map(d => (
          <option key={d.key} value={d.key}>{d.name}</option>
        ))}
      </select>
    )
  }
}
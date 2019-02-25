import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  }

  render() {
    const { name, value } = this.props;

    return (
      <label>
        {name}: 
        <input 
          name={name} 
          value={value}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}
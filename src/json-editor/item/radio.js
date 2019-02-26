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
    return (
      <div>
        {describe.data && describe.data.map(d => (
          <label key={d.key}>
            <input 
              type="radio" 
              name={name} 
              value={d.key}
              checked={d.key === value}
              onChange={this.handleChange}
            />
            {d.name}
          </label>
        ))}
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    let { value, onChange } = this.props;
    if (e.target.checked) {
      value = [...value, e.target.value];
    } else {
      value = value.filter(v => v !== e.target.value);
    }
    onChange && onChange(value);
  }

  render() {
    const { name, value, describe } = this.props;
    return (
      <div>
        {describe.data && describe.data.map(d => (
          <label key={d.key}>
            <input 
              type="checkbox" 
              name={name} 
              value={d.key}
              checked={value.indexOf(d.key) > -1}
              onChange={this.handleChange}
            />
            {d.name}
          </label>
        ))}
      </div>
    )
  }
}
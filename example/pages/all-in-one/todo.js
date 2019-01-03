import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    const { spec } = this.props;

    spec.list.$update({
      $push: [
        {text: new Date().toLocaleString()}
      ]
    })
  }

  handleRemove = (idx) => {
    const { spec } = this.props;

    spec.list.$update({
      $splice: [
        [idx, 1]
      ]
    });
  }

  render() {
    const { spec } = this.props;

    return (
      <div>
        <h2>
          {spec.name}
        </h2>
        <a href="javascript:;" onClick={this.handleAdd}>添加</a>

        <ul>
          {spec.list.map((d, i) => (
            <li key={i}>
              {d.text}&nbsp;&nbsp;
              <a href="javascript:;" onClick={() => this.handleRemove(i)}>删除</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
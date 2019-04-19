import React, { Component } from 'react';

import Menu from '@/menu';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  handleContextMenu = (e, d) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('handleContextMenu', d)
  }

  handleSubmit = (d, v) => {
    console.log('handleSubmit', d, v);
  }

  handleCancel = (d) => {
    console.log('handleCancel', d);
  }

  renderMenuDir = (d) => {
    return (
      <a>
        {d.name}
      </a>
    )
  }

  render() {
    const data = [
      {
        name: '文件', 
        path: '/foo.json', 
        isFile: true
      },
      {
        name: '文件夹', 
        path: '/bar', 
        children: [
          {
            name: '文件2', 
            path: '/bar/foo2.json', 
            isFile: true
          }
        ], 
        render: this.renderMenuDir
      },
      {
        name: '文件3', 
        path: '/foo3.json', 
        isFile: true
      }
    ]
    return (
      <Menu 
        data={data}
        onContextMenu={this.handleContextMenu}
      />
    )
  }
}
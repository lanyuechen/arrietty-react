import React, { Component } from 'react';

import './style.scss';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { onChange, describe } = this.props;
    const { url, name = 'bin' } = describe.config;

    console.log('==', name)
    
    const file = e.target.files[0];
    const body = new FormData();
    body.append(name, file);

    console.log('describe', describe)
    fetch(url, {
      method: 'POST',
      body,
      // 注！加headers会导致上传失败，原因未知
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // }
    }).then(res => res.json()).then(res => {
      if (res.code === 200) {
        onChange && onChange(res.msg);
      }
    });
  }

  render() {
    const { name, value, describe } = this.props;
    console.log('------', name, value, describe)
    return (
      <div className="ar-img-upload">
        {value && value._id ? (
          <img src={`http://localhost:3001/upload/${value._id}.${value.ext}`} alt="IMG"/>
        ) : (
          'IMG'
        )}
        <input type="file" onChange={this.handleChange} />
      </div>
    )
  }
}
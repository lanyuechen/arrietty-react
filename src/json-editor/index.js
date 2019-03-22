import React, { Component } from 'react';

import Aio from '../all-in-one';

import Form from './form';

class AioForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, value } = this.props.spec;
    if (!value) {
      return null;
    }
    return (
      <Form name={name} value={value} />
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.AioForm = Aio({
      name: props.name,
      value: props.value
    }, (spec) => {
      props.onChange && props.onChange(spec);
    })(AioForm);
  }

  render() {
    return (
      <this.AioForm name={this.props.name} value={this.props.value} />
    );
  }
}